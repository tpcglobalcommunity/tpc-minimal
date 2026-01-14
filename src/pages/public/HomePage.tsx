interface HomePageProps {
  t: (key: keyof import('../../i18n').Translations) => string
}

export default function HomePage({ t }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('public.home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('public.home.subtitle')}
            </p>
            <p className="text-sm text-gray-400 mb-8 italic">
              {t('public.home.disclaimer')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {t('public.home.ctaPrimary')}
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
              >
                {t('public.home.ctaSecondary')}
              </a>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-16 px-4 bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors backdrop-blur-sm">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {t('public.home.cards.0.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('public.home.cards.0.desc')}
                </p>
              </div>
              <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors backdrop-blur-sm">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {t('public.home.cards.1.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('public.home.cards.1.desc')}
                </p>
              </div>
              <div className="bg-gray-900/80 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors backdrop-blur-sm">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {t('public.home.cards.2.title')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('public.home.cards.2.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  {t('public.home.steps.0.title')}
                </h3>
                <p className="text-gray-300">
                  {t('public.home.steps.0.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  {t('public.home.steps.1.title')}
                </h3>
                <p className="text-gray-300">
                  {t('public.home.steps.1.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  {t('public.home.steps.2.title')}
                </h3>
                <p className="text-gray-300">
                  {t('public.home.steps.2.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700">
          <div className="container mx-auto text-center">
            <p className="text-gray-400 text-sm">
              {t('public.footer.rights')}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
