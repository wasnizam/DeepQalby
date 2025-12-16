import React, { useState } from 'react';
import { ExternalLink, Download, Check } from 'lucide-react';

type Language = 'en' | 'ms';

export const IMathuratLanding: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const isEN = lang === 'en';

  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      {/* Language Toggle */}
      <section className="px-6 pt-6 md:pt-10">
        <div className="max-w-6xl mx-auto flex justify-end">
          <div className="inline-flex items-center gap-1 rounded-full border border-warm-100 bg-white/80 backdrop-blur px-1 py-1 text-xs md:text-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition-all ${
                isEN ? 'bg-navy-900 text-white' : 'text-navy-600 hover:text-navy-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ms')}
              className={`px-3 py-1 rounded-full transition-all ${
                !isEN ? 'bg-navy-900 text-white' : 'text-navy-600 hover:text-navy-900'
              }`}
            >
              BM
            </button>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 pb-12 md:pb-20 pt-6 md:pt-10">
        <div className="max-w-6xl mx-auto grid gap-10 md:gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-muted mb-4">
              {isEN ? 'Lifestyle Dhikr' : 'Dzikir Gaya Hidup'}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-navy-900 mb-4 leading-[1.05]">
              iMathurat Pro
            </h1>
            <p className="text-lg md:text-xl text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Modern, complete, lifestyle-oriented Mathurat app for the busy, tech-savvy Muslim.'
                : 'Aplikasi Mathurat moden, lengkap dan berfokus gaya hidup untuk Muslim moden yang sibuk.'}
            </p>
            <p className="text-sm md:text-base text-navy-600 mb-8 leading-relaxed">
              {isEN
                ? 'Transform your daily Mathurat into a modern spiritual lifestyle. Track your growth, listen hands-free with CarPlay, manage your mental well-being, and access 13+ languages.'
                : 'Tukar amalan harian Mathurat anda menjadi gaya hidup spiritual moden. Jejak perkembangan, dengar tanpa sentuh dengan CarPlay, urus emosi dan akses lebih 13 bahasa.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://apps.apple.com/ng/app/imathurat-pro/id6755324401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-navy-900 text-white font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md"
              >
                <Download size={18} />
                <span>{isEN ? 'Download on App Store' : 'Muat Turun di App Store'}</span>
              </a>
              <a
                href="/store"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-warm-100 bg-warm-white text-navy-900 font-medium hover:bg-warm-50 transition-all"
              >
                <span>{isEN ? 'More about our apps' : 'Lagi aplikasi kami'}</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <p className="text-xs text-navy-600/80">
              {isEN
                ? 'Free core content. Optional Premium unlocks full audio, languages and wellness tracking.'
                : 'Kandungan asas percuma. Premium pilihan membuka audio penuh, semua bahasa dan penjejakan emosi.'}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-muted/10 blur-3xl rounded-full -z-10" />
            <div className="rounded-3xl border border-warm-100 bg-gradient-to-br from-warm-white to-warm-50 shadow-sm overflow-hidden">
              <div className="aspect-[9/16] md:aspect-[10/16] max-h-[520px] mx-auto flex items-center justify-center">
                <img
                  src="/assets/IMG_3687.PNG"
                  alt="iMathurat Pro app preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-12 md:py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Why iMathurat Pro?' : 'Kenapa iMathurat Pro?'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Spirituality doesn’t have to be old-fashioned. iMathurat turns daily Islamic protection into a modern, interactive lifestyle tool.'
                : 'Spiritualiti tidak semestinya kuno. iMathurat menjadikan wirid perlindungan harian sebagai alat gaya hidup moden dan interaktif.'}
            </p>
            <p className="text-navy-600 leading-relaxed">
              {isEN
                ? 'Perfect for the busy Muslim who wants consistency in dhikr, emotional wellness, and a beautiful daily Mathurat experience.'
                : 'Sesuai untuk Muslim sibuk yang mahukan konsistensi dzikir, kestabilan emosi dan pengalaman Mathurat yang indah setiap hari.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              isEN
                ? {
                    title: 'Hands-Free CarPlay',
                    desc: 'Listen to Mathurat safely while driving or commuting.',
                  }
                : {
                    title: 'Mod CarPlay Tanpa Sentuh',
                    desc: 'Dengar Mathurat dengan selamat ketika memandu atau berulang-alik.',
                  },
              isEN
                ? {
                    title: 'Wellness Tracking',
                    desc: 'Log your mood, completion and see your spiritual trends.',
                  }
                : {
                    title: 'Jejak Emosi & Konsistensi',
                    desc: 'Catat emosi, rekod bacaan dan lihat perkembangan spiritual anda.',
                  },
              isEN
                ? {
                    title: '13+ Languages',
                    desc: 'From English & Malay to Arabic, Turkish, Urdu, Bengali, and more.',
                  }
                : {
                    title: '13+ Bahasa',
                    desc: 'Daripada Bahasa Melayu & Inggeris hingga Arab, Turki, Urdu, Bengali dan banyak lagi.',
                  },
              isEN
                ? {
                    title: 'Elegant Visual Design',
                    desc: 'Liquid-glass UI that makes dhikr feel calming and premium.',
                  }
                : {
                    title: 'Reka Bentuk Moden',
                    desc: 'Reka bentuk seakan kaca yang menenangkan dan rasa premium semasa berzikir.',
                  },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-warm-100 bg-white/80 p-5 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Everything you need in one Mathurat app.' : 'Semua yang anda perlukan dalam satu aplikasi Mathurat.'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'From Sughra & Kubra to audio, analytics and wellness — iMathurat Pro is built as a complete daily companion.'
                : 'Daripada Sughra & Kubra hingga audio, analitik dan kesejahteraan emosi — iMathurat Pro dibina sebagai teman harian yang lengkap.'}
            </p>

            <ul className="space-y-3 text-sm md:text-base text-navy-700">
              {(isEN
                ? [
                    'Complete morning & evening Mathurat (Sughra & Kubra).',
                    'Audio playback with background and CarPlay support.',
                    'Track your daily consistency, mood and spiritual wellness.',
                    'Translations & transliterations for deeper understanding.',
                    'Global-ready: available in 13+ languages.',
                    'Offline access for core content.',
                  ]
                : [
                    'Lengkap Mathurat pagi & petang (Sughra & Kubra).',
                    'Audio dengan sokongan latar belakang dan CarPlay.',
                    'Jejak konsistensi harian, emosi dan kesihatan spiritual.',
                    'Terjemahan & transliterasi untuk kefahaman lebih mendalam.',
                    'Sesuai untuk pengguna global: lebih 13 bahasa tersedia.',
                    'Akses luar talian untuk kandungan teras.',
                  ]
              ).map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-emerald-muted" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium section */}
          <div className="rounded-3xl border border-warm-100 bg-warm-50/80 p-6 md:p-7 shadow-sm">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-muted mb-3">
              {isEN ? 'Premium' : 'Premium'}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-3">
              {isEN ? 'Unlock iMathurat Pro Premium' : 'Buka Kunci iMathurat Pro Premium'}
            </h3>
            <p className="text-sm text-navy-600 mb-5 leading-relaxed">
              {isEN
                ? 'Go deeper with full audio, all languages, emotion tracking and detailed analytics.'
                : 'Pergi lebih jauh dengan audio penuh, semua bahasa, penjejakan emosi dan analitik terperinci.'}
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-navy-700 mb-6">
              {(isEN
                ? [
                    'Full audio for all Mathurat Pro.',
                    'Unlock all languages & translations.',
                    'Emotion and wellness tracking.',
                    'Weekly & monthly spiritual analytics.',
                  ]
                : [
                    'Audio penuh untuk semua bacaan Mathurat Pro.',
                    'Buka semua bahasa & terjemahan.',
                    'Penjejakan emosi dan kesejahteraan.',
                    'Analitik mingguan & bulanan untuk perkembangan spiritual.',
                  ]
              ).map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-emerald-muted" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs md:text-sm text-navy-600 mb-4">
              {isEN
                ? 'Start your 7-day free trial and experience spiritual growth the modern way.'
                : 'Mulakan percubaan percuma 7 hari dan rasai perkembangan spiritual dengan cara moden.'}
            </p>
            <p className="text-[10px] text-navy-500 leading-relaxed">
              {isEN
                ? 'Terms of Use (EULA): Apple’s standard End User License Agreement applies.'
                : 'Terma Penggunaan (EULA): Perjanjian Lesen Pengguna Akhir standard Apple diguna pakai.'}{' '}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-navy-900"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
            {isEN ? 'Ready to upgrade your daily Mathurat?' : 'Sedia naik taraf amalan Mathurat harian anda?'}
          </h2>
          <p className="text-navy-600 mb-8 leading-relaxed">
            {isEN
              ? 'Make spiritual consistency feel as natural as checking your phone — but far more meaningful.'
              : 'Jadikan konsistensi spiritual semudah memeriksa telefon — tetapi jauh lebih bermakna.'}
          </p>
          <a
            href="https://apps.apple.com/ng/app/imathurat-pro/id6755324401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-navy-900 text-white font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md"
          >
            <Download size={20} />
            <span>{isEN ? 'Get iMathurat Pro' : 'Dapatkan iMathurat Pro'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};


