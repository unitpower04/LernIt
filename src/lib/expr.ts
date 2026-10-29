// Kleiner, sicherer Formel-Parser (kein eval): + - * / ^ ( ), Variablen, Funktionen.
type Tok = { t: "num"; v: number } | { t: "id"; v: string } | { t: "op"; v: string };

const FUNCS: Record<string, (...a: number[]) => number> = {
  round: (x, n = 0) => {
    const f = 10 ** n;
    return Math.round((x + Number.EPSILON) * f) / f;
  },
  floor: Math.floor,
  ceil: Math.ceil,
  abs: Math.abs,
  min: Math.min,
  max: Math.max,
  sqrt: Math.sqrt,
};

function tokenize(src: string): Tok[] {
  const out: Tok[] = [];
  const re = /\s*(?:(\d+(?:\.\d+)?)|([A-Za-z_][\w]*)|(.))/gy;
  let m: RegExpExecArray | null;
  while (re.lastIndex < src.length && (m = re.exec(src))) {
    if (m[1] !== undefined) out.push({ t: "num", v: parseFloat(m[1]) });
    else if (m[2] !== undefined) out.push({ t: "id", v: m[2] });
    else if (m[3] !== undefined && m[3].trim()) out.push({ t: "op", v: m[3] });
  }
  return out;
}

export function evalExpr(src: string, vars: Record<string, number>): number {
  const toks = tokenize(src);
  let i = 0;
  const peek = () => toks[i];
  const eat = (v?: string) => {
    const t = toks[i++];
    if (v && (!t || t.t !== "op" || t.v !== v)) throw new Error(`Formel "${src}": '${v}' erwartet`);
    return t;
  };
  const isOp = (v: string) => peek()?.t === "op" && (peek() as { v: string }).v === v;

  function expr(): number {
    let l = term();
    while (isOp("+") || isOp("-")) {
      const op = (eat() as { v: string }).v;
      const r = term();
      l = op === "+" ? l + r : l - r;
    }
    return l;
  }
  function term(): number {
    let l = pow();
    while (isOp("*") || isOp("/") || isOp("%")) {
      const op = (eat() as { v: string }).v;
      const r = pow();
      l = op === "*" ? l * r : op === "/" ? l / r : l % r;
    }
    return l;
  }
  function pow(): number {
    const b = unary();
    if (isOp("^")) {
      eat();
      return b ** pow();
    }
    return b;
  }
  function unary(): number {
    if (isOp("-")) {
      eat();
      return -unary();
    }
    if (isOp("+")) {
      eat();
      return unary();
    }
    return atom();
  }
  function atom(): number {
    const t = eat();
    if (!t) throw new Error(`Formel "${src}": unerwartetes Ende`);
    if (t.t === "num") return t.v;
    if (t.t === "id") {
      if (isOp("(")) {
        eat("(");
        const args: number[] = [];
        if (!isOp(")")) {
          args.push(expr());
          while (isOp(",")) {
            eat();
            args.push(expr());
          }
        }
        eat(")");
        const f = FUNCS[t.v];
        if (!f) throw new Error(`Formel "${src}": unbekannte Funktion ${t.v}`);
        return f(...args);
      }
      if (!(t.v in vars)) throw new Error(`Formel "${src}": Variable ${t.v} unbekannt`);
      return vars[t.v];
    }
    if (t.v === "(") {
      const v = expr();
      eat(")");
      return v;
    }
    throw new Error(`Formel "${src}": unerwartetes Zeichen ${t.v}`);
  }

  const v = expr();
  if (i < toks.length) throw new Error(`Formel "${src}": Rest nicht lesbar`);
  return v;
}
