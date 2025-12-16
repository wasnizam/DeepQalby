import React, { useState } from 'react';
import { ExternalLink, Download, Check } from 'lucide-react';

type Language = 'en' | 'ms';

export const RuqyahLanding: React.FC = () => {
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
              {isEN ? 'Spiritual Guidance' : 'Bimbingan Spiritual'}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-navy-900 mb-4 leading-[1.05]">
              Ruqyah360
            </h1>
            <p className="text-lg md:text-xl text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Your complete spiritual guidance companion for protection, healing and growth.'
                : 'Teman bimbingan spiritual lengkap anda untuk perlindungan, penyembuhan dan perkembangan rohani.'}
            </p>
            <p className="text-sm md:text-base text-navy-600 mb-8 leading-relaxed">
              {isEN
                ? 'Discover peace, protection and spiritual wellness through authentic ruqyah practices, Quranic guidance and personalized sessions.'
                : 'Capai ketenangan, perlindungan dan kesejahteraan rohani melalui amalan ruqyah yang sahih, panduan al-Quran dan sesi yang dipersonalisasi.'}
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
                ? 'Built for Muslims seeking authentic Islamic guidance, spiritual protection and a structured ruqyah journey.'
                : 'Dibina untuk Muslim yang mencari bimbingan Islam yang sahih, perlindungan rohani dan perjalanan ruqyah yang tersusun.'}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-muted/10 blur-3xl rounded-full -z-10" />
            <div className="rounded-3xl border border-warm-100 bg-gradient-to-br from-warm-white to-warm-50 shadow-sm overflow-hidden">
              <div className="aspect-[9/16] md:aspect-[10/16] max-h-[520px] mx-auto flex items-center justify-center">
                <img
                  src="/assets/2.png"
                  alt="Ruqyah360 app preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-12 md:py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Key features for your spiritual journey' : 'Ciri utama untuk perjalanan spiritual anda'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Ruqyah360 combines authentic Quranic content, guided practice and analytics to support your healing and growth.'
                : 'Ruqyah360 menggabungkan kandungan al-Quran yang sahih, amalan berpandu dan analitik untuk menyokong penyembuhan dan perkembangan anda.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              isEN
                ? {
                    title: 'Personalized Guidance',
                    desc: 'Nine spiritual guidance categories tailored to your needs and intentions.',
                  }
                : {
                    title: 'Bimbingan Dipersonalisasi',
                    desc: 'Sembilan kategori bimbingan spiritual yang disesuaikan dengan keperluan dan niat anda.',
                  },
              isEN
                ? {
                    title: 'Authentic Ruqyah Content',
                    desc: 'Quranic recitations, adhkar, stories and teachings based on authentic sources.',
                  }
                : {
                    title: 'Kandungan Ruqyah Sahih',
                    desc: 'Bacaan al-Quran, zikir, kisah dan pengajaran berasaskan sumber sahih.',
                  },
              isEN
                ? {
                    title: 'Multilingual Support',
                    desc: 'English, Bahasa Melayu and Arabic with easy language switching.',
                  }
                : {
                    title: 'Sokongan Pelbagai Bahasa',
                    desc: 'Bahasa Inggeris, Bahasa Melayu dan Arab dengan pertukaran bahasa yang mudah.',
                  },
              isEN
                ? {
                    title: 'Premium Audio Experience',
                    desc: 'High-quality Quranic audio, 528Hz mode (Premium) and offline downloads.',
                  }
                : {
                    title: 'Pengalaman Audio Premium',
                    desc: 'Audio al-Quran berkualiti tinggi, mod 528Hz (Premium) dan muat turun luar talian.',
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

      {/* Progress & Premium */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Track your healing and growth' : 'Jejak penyembuhan dan perkembangan anda'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Built-in journaling, session history and healing analytics help you see patterns and progress over time.'
                : 'Jurnal, sejarah sesi dan analitik penyembuhan terbina dalam membantu anda melihat corak dan perkembangan dari masa ke masa.'}
            </p>

            <ul className="space-y-3 text-sm md:text-base text-navy-700 mb-4">
              {(isEN
                ? [
                    'Track your sessions, completion history and daily consistency.',
                    'Use the personal reflection journal to record feelings, insights and duas.',
                    'View simple analytics about your healing journey and spiritual routines.',
                    'Receive gentle reminders to stay connected to your spiritual practice.',
                  ]
                : [
                    'Jejak sesi anda, sejarah bacaan dan konsistensi harian.',
                    'Guna jurnal refleksi peribadi untuk catat emosi, ilham dan doa.',
                    'Lihat analitik ringkas tentang perjalanan penyembuhan dan rutin spiritual anda.',
                    'Terima peringatan lembut untuk kekal berhubung dengan amalan spiritual.',
                  ]
              ).map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-emerald-muted" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-navy-600/80">
              {isEN
                ? 'Important: Ruqyah360 supports your spiritual journey only and does not replace medical or professional advice.'
                : 'Penting: Ruqyah360 hanya menyokong perjalanan spiritual anda dan tidak menggantikan nasihat perubatan atau profesional.'}
            </p>
          </div>

          {/* Premium block */}
          <div className="rounded-3xl border border-warm-100 bg-warm-50/80 p-6 md:p-7 shadow-sm">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-muted mb-3">
              {isEN ? 'Premium' : 'Premium'}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-3">
              {isEN ? 'Unlock Ruqyah360 Premium' : 'Buka kunci Ruqyah360 Premium'}
            </h3>
            <p className="text-sm text-navy-600 mb-5 leading-relaxed">
              {isEN
                ? 'Access all 9 guidance categories, advanced tracking, offline audio and smart reminders.'
                : 'Akses semua 9 kategori bimbingan, penjejakan lanjutan, audio luar talian dan peringatan pintar.'}
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-navy-700 mb-6">
              {(isEN
                ? [
                    'All spiritual guidance categories unlocked.',
                    '528Hz Spiritual Enhancement Mode.',
                    'Offline audio downloads for selected sessions.',
                    'Advanced analytics, healing tracker and full journal access.',
                    'Daily auto-reminders and notifications.',
                    'Priority support and future premium content.',
                  ]
                : [
                    'Semua kategori bimbingan spiritual dibuka.',
                    'Mod Peningkatan Spiritual 528Hz.',
                    'Muat turun audio luar talian untuk sesi terpilih.',
                    'Analitik lanjutan, penjejak penyembuhan dan akses jurnal penuh.',
                    'Peringatan automatik harian dan notifikasi.',
                    'Sokongan keutamaan dan kandungan premium masa hadapan.',
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
            {isEN ? 'Ready to begin your ruqyah journey?' : 'Sedia mulakan perjalanan ruqyah anda?'}
          </h2>
          <p className="text-navy-600 mb-8 leading-relaxed">
            {isEN
              ? 'Ruqyah360 is designed to make authentic spiritual guidance accessible, calm and guided — wherever you are.'
              : 'Ruqyah360 direka untuk menjadikan bimbingan spiritual yang sahih lebih mudah dicapai, tenang dan terpimpin — di mana sahaja anda berada.'}
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


