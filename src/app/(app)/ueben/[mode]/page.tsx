"use client";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { FlashcardSession } from "@/components/FlashcardSession";
import { PracticeSession } from "@/components/PracticeSession";
import { SprintSession } from "@/components/SprintSession";
import { Spinner } from "@/components/ui";
import { scopeFromParam } from "@/lib/data/types";

function Inner() {
  const { mode } = useParams<{ mode: string }>();
  const sp = useSearchParams();
  const scopeParam = sp.get("scope");
  const scope = useMemo(() => scopeFromParam(scopeParam), [scopeParam]);
  const part = sp.get("part") ? Number(sp.get("part")) : null;
  const n = sp.get("n") ? Number(sp.get("n")) : null;
  if (mode === "karten") return <FlashcardSession scope={scope} part={part} n={n} />;
  if (mode === "sprint") return <SprintSession scope={scope} />;
  return <PracticeSession mode={mode} scope={scope} part={part} n={n} />;
}

export default function UebenPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <Inner />
    </Suspense>
  );
}
