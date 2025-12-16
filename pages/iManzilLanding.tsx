import React, { useState } from 'react';
import { ExternalLink, Download, Check } from 'lucide-react';

type Language = 'en' | 'ms';

export const IManzilLanding: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const isEN = lang === 'en';

  const appStoreUrl = '#'; // Replace with real App Store URL when ready

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
              {isEN ? 'Daily Protection' : 'Perlindungan Harian'}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-navy-900 mb-4 leading-[1.05]">
              iManzil Pro
            </h1>
            <p className="text-lg md:text-xl text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Your companion for Manzil. Seven languages, offline audio, guided reading, tafsir, reminders, and progress tracking.'
                : 'Teman anda untuk bacaan Manzil. 7 bahasa, audio luar talian, bacaan berpandu, tafsir, peringatan dan penjejakan kemajuan.'}
            </p>
            <p className="text-sm md:text-base text-navy-600 mb-8 leading-relaxed">
              {isEN
                ? 'Designed to help you stay consistent every day. Everything you need to recite Manzil and Surah Yasin in one place.'
                : 'Direka untuk bantu anda kekal konsisten setiap hari. Semua yang anda perlukan untuk baca Manzil dan Surah Yasin dalam satu tempat.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-navy-600 text-white font-medium cursor-not-allowed opacity-80"
              >
                <Download size={18} />
                <span>{isEN ? 'Coming Soon to App Store' : 'Akan Datang di App Store'}</span>
              </button>
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
                ? 'Build a steady daily practice with Manzil and Yasin, supported by translations, tafsir, audio and reminders.'
                : 'Bina amalan harian yang konsisten dengan Manzil dan Yasin, disokong terjemahan, tafsir, audio dan peringatan.'}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-muted/10 blur-3xl rounded-full -z-10" />
            <div className="rounded-3xl border border-warm-100 bg-gradient-to-br from-warm-white to-warm-50 shadow-sm overflow-hidden">
              <div className="aspect-[9/16] md:aspect-[10/16] max-h-[520px] mx-auto flex items-center justify-center">
                <img
                  src="/assets/1.png"
                  alt="iManzil Pro app preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manzil Pro */}
      <section className="px-6 py-12 md:py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Why people choose iManzil Pro' : 'Mengapa orang memilih iManzil Pro'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Manzil Pro brings everything you need to recite Manzil and Surah Yasin in one place. Spiritual protection, understanding and consistency in your daily routine.'
                : 'iManzil Pro menghimpunkan semua yang anda perlukan untuk membaca Manzil dan Surah Yasin dalam satu aplikasi. Perlindungan, kefahaman dan konsistensi dalam rutin harian anda.'}
            </p>
            <p className="text-navy-600 leading-relaxed">
              {isEN
                ? 'Perfect for daily readers, students of Quran and anyone seeking a structured way to maintain Manzil and Yasin.'
                : 'Sesuai untuk pembaca harian, pelajar al-Quran dan sesiapa yang mahukan cara tersusun untuk mengekalkan bacaan Manzil dan Yasin.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              isEN
                ? {
                    title: 'Complete Manzil & Yasin',
                    desc: 'All 20 Manzil cards and full Surah Yasin with multiple reading modes.',
                  }
                : {
                    title: 'Lengkap Manzil & Yasin',
                    desc: 'Semua 20 kad Manzil dan Surah Yasin penuh dengan beberapa cara bacaan.',
                  },
              isEN
                ? {
                    title: '7 Languages',
                    desc: 'English, Malay, Indonesian, Turkish, Urdu, French, Spanish with transliteration.',
                  }
                : {
                    title: '7 Bahasa',
                    desc: 'Bahasa Melayu, Inggeris, Indonesia, Turki, Urdu, Perancis, Sepanyol dengan transliterasi.',
                  },
              isEN
                ? {
                    title: 'Offline Audio',
                    desc: 'High-quality recitations from Mishary Alafasy with download support.',
                  }
                : {
                    title: 'Audio Luar Talian',
                    desc: 'Bacaan berkualiti tinggi daripada Mishary Alafasy dengan sokongan muat turun.',
                  },
              isEN
                ? {
                    title: 'Reminders & Tracking',
                    desc: 'Smart reminders, streaks, stats and achievements to keep you consistent.',
                  }
                : {
                    title: 'Peringatan & Statistik',
                    desc: 'Peringatan pintar, streak, statistik dan lencana pencapaian untuk bantu anda konsisten.',
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

      {/* Features at a glance */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Features at a glance' : 'Ciri-ciri utama sekilas pandang'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'From recitation, understanding and reminders to widgets and privacy — iManzil Pro is built as a complete Manzil companion.'
                : 'Daripada bacaan, kefahaman dan peringatan hingga widget dan privasi — iManzil Pro dibina sebagai teman Manzil yang lengkap.'}
            </p>

            <ul className="space-y-3 text-sm md:text-base text-navy-700">
              {(isEN
                ? [
                    'All 20 Manzil cards and full Surah Yasin (83 verses).',
                    'Normal Yasin, Yasin 41 (single intention) and Yasin 7 Mubin with clear guidance.',
                    'Rasm Uthmani Arabic text with adjustable font sizes.',
                    'Bookmarks, full reading history and 30 daily protection duas.',
                    'Reading statistics, streaks, completion rate and activity heatmaps.',
                    'Home screen widgets, daily verse and streak widgets for quick access.',
                    'Privacy-first: no registration, no data tracking.',
                  ]
                : [
                    'Semua 20 kad Manzil dan Surah Yasin penuh (83 ayat).',
                    'Yasin biasa, Yasin 41 (hajat tunggal) dan Yasin 7 Mubin dengan panduan jelas.',
                    'Teks Arab Rasm Uthmani dengan saiz font boleh laras.',
                    'Penanda buku, sejarah bacaan penuh dan 30 doa perlindungan harian.',
                    'Statistik bacaan, streak, kadar siap dan peta haba aktiviti.',
                    'Widget skrin utama, ayat harian dan widget streak untuk akses pantas.',
                    'Utamakan privasi: tiada pendaftaran, tiada penjejakan data.',
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
              {isEN ? 'Unlock the full Manzil Pro experience' : 'Buka pengalaman penuh Manzil Pro'}
            </h3>
            <p className="text-sm text-navy-600 mb-5 leading-relaxed">
              {isEN
                ? 'Premium gives you complete tafsir, offline audio downloads, widgets, full statistics and more.'
                : 'Premium memberi anda tafsir lengkap, audio luar talian, semua widget, statistik penuh dan banyak lagi.'}
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-navy-700 mb-6">
              {(isEN
                ? [
                    'Complete Ibn Kathir tafsir in 7 languages.',
                    'Offline audio downloads for Manzil and Yasin.',
                    'All widgets and smart reminders.',
                    'Full statistics, achievements and advanced Yasin methods.',
                    'Multiple translations and unlimited bookmarks.',
                    'Ad-free experience.',
                  ]
                : [
                    'Tafsir Ibn Kathir lengkap dalam 7 bahasa.',
                    'Muat turun audio luar talian untuk Manzil dan Yasin.',
                    'Semua widget dan peringatan pintar.',
                    'Statistik penuh, pencapaian dan kaedah Yasin lanjutan.',
                    'Pelbagai terjemahan dan penanda buku tanpa had.',
                    'Pengalaman tanpa iklan.',
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
            {isEN ? 'Ready to deepen your Manzil and Yasin practice?' : 'Sedia mendalami amalan Manzil dan Yasin anda?'}
          </h2>
          <p className="text-navy-600 mb-8 leading-relaxed">
            {isEN
              ? 'iManzil Pro is built to help you stay consistent, understand more and feel spiritually protected every day.'
              : 'iManzil Pro dibina untuk bantu anda kekal konsisten, lebih faham dan rasa lebih terlindung setiap hari.'}
          </p>
          <button
            disabled
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-navy-600 text-white font-medium cursor-not-allowed opacity-80"
          >
            <Download size={20} />
            <span>{isEN ? 'Coming Soon to App Store' : 'Akan Datang di App Store'}</span>
          </button>
        </div>
      </section>
    </div>
  );
};


