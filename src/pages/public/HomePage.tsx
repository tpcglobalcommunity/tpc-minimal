import { useI18n } from "../../i18n";

function Button({
  variant,
  children,
}: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B90B]/60 sm:w-auto";
  if (variant === "primary") {
    return <button className={`${base} bg-[#F0B90B] text-[#0B0E11] hover:brightness-95`}>{children}</button>;
  }
  return (
    <button className={`${base} border border-white/15 bg-white/5 text-white hover:bg-white/10`}>
      {children}
    </button>
  );
}

function Card({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#12161C] p-6 transition hover:-translate-y-0.5 hover:border-white/15">
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          {icon}
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#12161C] p-6">
      <div className="text-xs font-semibold tracking-wider text-white/50">{n}</div>
      <div className="mt-2 text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const cards = [
    { title: t("public.home.values.0.title"), desc: t("public.home.values.0.desc"), icon: <span className="text-lg">⏳</span> },
    { title: t("public.home.values.1.title"), desc: t("public.home.values.1.desc"), icon: <span className="text-lg">🎯</span> },
    { title: t("public.home.values.2.title"), desc: t("public.home.values.2.desc"), icon: <span className="text-lg">📈</span> },
    { title: t("public.home.values.3.title"), desc: t("public.home.values.3.desc"), icon: <span className="text-lg">🕊</span> },
  ];

  const steps = [
    { n: "01", title: t("public.home.steps.0.title"), desc: t("public.home.steps.0.desc") },
    { n: "02", title: t("public.home.steps.1.title"), desc: t("public.home.steps.1.desc") },
    { n: "03", title: t("public.home.steps.2.title"), desc: t("public.home.steps.2.desc") },
  ];

  return (
    <div className="relative">
      {/* Background glow + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F0B90B]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      {/* HERO */}
      <section className="rounded-3xl border border-white/10 bg-[#12161C] p-7 sm:p-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#F0B90B]" />
            TPC — Trader Professional Community
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {t("public.home.title")}
          </h1>

          <div className="mt-3 text-sm font-semibold text-[#F0B90B]">
            {t("public.home.tagline")}
          </div>

          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {t("public.home.subtitle")}
          </p>

          <p className="mt-3 text-sm text-white/60">
            {t("public.home.disclaimer")}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary">{t("public.home.ctaPrimary")}</Button>
            <Button variant="secondary">{t("public.home.ctaSecondary")}</Button>
          </div>
        </div>
      </section>

      {/* WHY TPC */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-[#12161C] p-7 sm:p-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-white">{t("public.home.why.title")}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {t("public.home.why.content")}
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} desc={card.desc} icon={card.icon} />
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-[#12161C] p-7 sm:p-10">
        <div className="mb-6">
          <div className="text-sm font-semibold text-white/80">How It Works</div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <Step key={step.n} n={step.n} title={step.title} desc={step.desc} />
          ))}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-[#12161C] p-7 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-white/75">
            {t("public.home.positioning")}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 pb-2 text-xs text-white/50">
        {t("public.footer.rights", { year })}
      </footer>
    </div>
  );
}
