export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-4 py-10">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-2xl font-black text-brandfg">L</div>
        <h1 className="h1">LernIt</h1>
        <p className="text-sm text-muted">Prüfungstrainer · Kaufleute für Marketingkommunikation</p>
      </div>
      <div className="card">{children}</div>
    </main>
  );
}
