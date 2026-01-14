import { useI18n } from "../../i18n";

export default function HomePage() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const values = [
    { 
      icon: "⏳", 
      title: t("public.home.values.0.title"), 
      desc: t("public.home.values.0.desc") 
    },
    { 
      icon: "🎯", 
      title: t("public.home.values.1.title"), 
      desc: t("public.home.values.1.desc") 
    },
    { 
      icon: "📈", 
      title: t("public.home.values.2.title"), 
      desc: t("public.home.values.2.desc") 
    },
    { 
      icon: "🕊", 
      title: t("public.home.values.3.title"), 
      desc: t("public.home.values.3.desc") 
    },
  ];

  const steps = [
    { 
      n: "01", 
      title: t("public.home.steps.0.title"), 
      desc: t("public.home.steps.0.desc") 
    },
    { 
      n: "02", 
      title: t("public.home.steps.1.title"), 
      desc: t("public.home.steps.1.desc") 
    },
    { 
      n: "03", 
      title: t("public.home.steps.2.title"), 
      desc: t("public.home.steps.2.desc") 
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E11] via-[#12161C] to-[#0B0E11]" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#F0B90B] to-[#F59E0B] bg-clip-text text-transparent">
            {t("public.home.title")}
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-[#F0B90B] mb-6">
            {t("public.home.tagline")}
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t("public.home.subtitle")}
          </p>
          <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
            {t("public.home.disclaimer")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl bg-[#F0B90B] px-8 py-4 text-base font-semibold text-[#0B0E11] hover:bg-[#F59E0B] transition-colors"
            >
              {t("public.home.ctaPrimary")}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              {t("public.home.ctaSecondary")}
            </a>
          </div>
        </div>
      </section>

      {/* Why TPC Section */}
      <section className="py-20 px-4 bg-[#12161C]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#F0B90B]">
            {t("public.home.why.title")}
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            {t("public.home.why.content")}
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-700 bg-[#12161C] p-6 hover:border-[#F0B90B] transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#F0B90B]">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#12161C]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#F0B90B]">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-16 h-16 bg-[#F0B90B] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#0B0E11]">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#F0B90B]">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-700 bg-[#12161C] p-8">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              {t("public.home.positioning")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-[#0B0E11]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            {t("public.footer.rights", { year })}
          </p>
        </div>
      </footer>
    </div>
  );
}
