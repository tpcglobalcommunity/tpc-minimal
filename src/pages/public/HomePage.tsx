import { useI18n } from "../../i18n";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex w-full items-center justify-center rounded-2xl bg-[#F0B90B] px-5 py-3 text-sm font-semibold text-[#0B0E11] transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B90B]/60 sm:w-auto">
      {children}
    </button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B90B]/60 sm:w-auto">
      {children}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#12161C] p-4">
      <div className="text-[11px] font-semibold tracking-wide text-white/55">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
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

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#12161C] p-6">
      <div className="text-xs font-semibold tracking-wider text-white/50">{n}</div>
      <div className="mt-2 text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-semibold tracking-wider text-white/50">{eyebrow}</div>
      <div className="mt-2 text-2xl font-semibold text-white">{title}</div>
      {desc ? <div className="mt-2 text-sm text-white/65">{desc}</div> : null}
    </div>
  );
}

export default function HomePage() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <div className="relative">
      {/* Background: Binance-like subtle grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#F0B90B]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,11,0.12),transparent_55%)]" />
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

          <p className="mt-3 text-sm text-white/60">{t("public.home.disclaimer")}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton>{t("public.home.ctaPrimary")}</PrimaryButton>
            <SecondaryButton>{t("public.home.ctaSecondary")}</SecondaryButton>
          </div>
        </div>

        {/* Stats strip (Binance feel) */}
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <Stat label={t("public.home.stats.0.label")} value={t("public.home.stats.0.value")} />
          <Stat label={t("public.home.stats.1.label")} value={t("public.home.stats.1.value")} />
          <Stat label={t("public.home.stats.2.label")} value={t("public.home.stats.2.value")} />
        </div>
      </section>

      {/* WHY + FEATURES */}
      <section className="mt-10">
        <SectionTitle
          eyebrow={t("public.home.why.eyebrow")}
          title={t("public.home.why.title")}
          desc={t("public.home.why.desc")}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title={t("public.home.cards.0.title")}
            desc={t("public.home.cards.0.desc")}
            icon={<span className="text-lg">📚</span>}
          />
          <FeatureCard
            title={t("public.home.cards.1.title")}
            desc={t("public.home.cards.1.desc")}
            icon={<span className="text-lg">🌐</span>}
          />
          <FeatureCard
            title={t("public.home.cards.2.title")}
            desc={t("public.home.cards.2.desc")}
            icon={<span className="text-lg">🛡️</span>}
          />
        </div>
      </section>

      {/* VALUES (4 cards) */}
      <section className="mt-10">
        <SectionTitle
          eyebrow={t("public.home.values.eyebrow")}
          title={t("public.home.values.title")}
          desc={t("public.home.values.desc")}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["0", "1", "2", "3"].map((i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-[#12161C] p-6">
              <div className="text-base font-semibold text-white">
                {t(`public.home.values.items.${i}.title`)}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                {t(`public.home.values.items.${i}.desc`)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-10">
        <SectionTitle
          eyebrow={t("public.home.how.eyebrow")}
          title={t("public.home.how.title")}
          desc={t("public.home.how.desc")}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Step n="01" title={t("public.home.steps.0.title")} desc={t("public.home.steps.0.desc")} />
          <Step n="02" title={t("public.home.steps.1.title")} desc={t("public.home.steps.1.desc")} />
          <Step n="03" title={t("public.home.steps.2.title")} desc={t("public.home.steps.2.desc")} />
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-[#12161C] p-7 sm:p-10">
        <SectionTitle
          eyebrow={t("public.home.positioning.eyebrow")}
          title={t("public.home.positioning.title")}
          desc={t("public.home.positioning.desc")}
        />
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          {t("public.home.positioning.note")}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 pb-2 text-xs text-white/50">
        {t("public.footer.rights", { year })}
      </footer>
    </div>
  );
}
