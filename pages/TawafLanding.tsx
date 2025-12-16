import React, { useState } from 'react';
import { ExternalLink, Download, Check, Share2 } from 'lucide-react';

type Language = 'en' | 'ms';

export const TawafLanding: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const isEN = lang === 'en';

  const appStoreUrl = 'https://apps.apple.com/ng/app/tawaf-counter/id6447226579';

  const handleShare = async () => {
    try {
      const shareData = {
        title: 'Tawaf Counter',
        text: isEN
          ? 'Check out Tawaf Counter – the ultimate Tawaf companion for Umrah and Hajj.'
          : 'Jom cuba Tawaf Counter – teman Tawaf terbaik untuk Umrah dan Haji.',
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert(
          isEN
            ? 'Link copied to clipboard. You can share it anywhere.'
            : 'Pautan disalin. Anda boleh kongsikannya di mana-mana.'
        );
      } else {
        alert(
          isEN
            ? 'Sharing is not supported on this device. Please copy the URL from the address bar.'
            : 'Perkongsian tidak disokong pada peranti ini. Sila salin URL dari bar alamat.'
        );
      }
    } catch {
      // ignore share errors (e.g. user cancelled)
    }
  };

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
              {isEN ? 'Tawaf Companion' : 'Teman Tawaf Anda'}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-navy-900 mb-4 leading-[1.05]">
              Tawaf Counter
            </h1>
            <p className="text-lg md:text-xl text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'The ultimate Tawaf companion for Umrah, Hajj and regular Tawaf — combining classical guidance with modern technology.'
                : 'Teman Tawaf terbaik untuk Umrah, Haji dan Tawaf harian — menggabungkan panduan klasik dengan teknologi moden.'}
            </p>
            <p className="text-sm md:text-base text-navy-600 mb-8 leading-relaxed">
              {isEN
                ? 'Track your rounds, Safa–Marwa, duas, prayer times and weather in Mecca — all in one beautiful, intuitive app.'
                : 'Jejak pusingan Tawaf, Safa–Marwa, doa, waktu solat dan cuaca di Mekah — semuanya dalam satu aplikasi yang cantik dan mudah digunakan.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={appStoreUrl}
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
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-warm-100 bg-white text-navy-900 font-medium hover:bg-warm-50 transition-all"
              >
                <Share2 size={16} />
                <span>{isEN ? 'Share this page' : 'Kongsi halaman ini'}</span>
              </button>
            </div>

            <p className="text-xs text-navy-600/80">
              {isEN
                ? 'Trusted by pilgrims worldwide for Umrah, Hajj and regular Tawaf — with offline-friendly tools, reminders and complete duas.'
                : 'Dipercayai jemaah seluruh dunia untuk Umrah, Haji dan Tawaf harian — dengan alat mesra luar talian, peringatan dan doa yang lengkap.'}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-muted/10 blur-3xl rounded-full -z-10" />
            <div className="rounded-3xl border border-warm-100 bg-gradient-to-br from-warm-white to-warm-50 shadow-sm overflow-hidden">
              <div className="aspect-[9/16] md:aspect-[10/16] max-h-[520px] mx-auto flex items-center justify-center">
                <img
                  src="/assets/4.png"
                  alt="Tawaf Counter app preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="px-6 py-12 md:py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'Core features for your Tawaf journey' : 'Ciri teras untuk perjalanan Tawaf anda'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Designed specifically for pilgrims performing Umrah, Hajj or regular Tawaf — so you can focus on worship, not counting.'
                : 'Direka khusus untuk jemaah yang menunaikan Umrah, Haji atau Tawaf harian — supaya anda boleh fokus kepada ibadah, bukan kiraan.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              isEN
                ? {
                    title: '7-Round Tawaf Counter',
                    desc: 'Visual progress circle, automatic reset on completion and real-time tracking.',
                  }
                : {
                    title: 'Kaunter Tawaf 7 Pusingan',
                    desc: 'Bulatan progres visual, reset automatik selepas selesai dan jejak masa nyata.',
                  },
              isEN
                ? {
                    title: 'Safa–Marwa Counter',
                    desc: 'Complete Sai tracking with visual rounds and clear step-by-step guidance.',
                  }
                : {
                    title: 'Kaunter Sai Safa–Marwa',
                    desc: 'Penjejakan Sai lengkap dengan visual pusingan dan panduan langkah demi langkah.',
                  },
              isEN
                ? {
                    title: 'Prayer Times & Weather',
                    desc: 'Live Mecca prayer times, countdown and weather forecasts for better planning.',
                  }
                : {
                    title: 'Waktu Solat & Cuaca',
                    desc: 'Waktu solat Mekah secara langsung, kiraan turun dan ramalan cuaca untuk perancangan lebih baik.',
                  },
              isEN
                ? {
                    title: 'Smart Geofencing',
                    desc: "Location-based Tawaf Wida' reminders so you never miss your farewell Tawaf.",
                  }
                : {
                    title: 'Geofencing Pintar',
                    desc: "Peringatan Tawaf Wida' berasaskan lokasi supaya anda tidak terlepas Tawaf perpisahan.",
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

      {/* Duas, Planner & Languages */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
              {isEN ? 'More than just counting rounds' : 'Lebih daripada sekadar mengira pusingan'}
            </h2>
            <p className="text-navy-600 mb-6 leading-relaxed">
              {isEN
                ? 'Tawaf Counter includes complete duas, planning tools and multi-language support so your entire Tawaf experience is guided.'
                : 'Tawaf Counter merangkumi doa lengkap, alat perancangan dan sokongan pelbagai bahasa agar keseluruhan pengalaman Tawaf anda terpimpin.'}
            </p>

            <ul className="space-y-3 text-sm md:text-base text-navy-700">
              {(isEN
                ? [
                    'Authentic duas for all 7 Tawaf rounds with Arabic, transliteration and translations.',
                    'Easy-to-read layout with adjustable font sizes for different lighting conditions.',
                    'Plan Tawaf sessions in advance, set reminders and view your history.',
                    'Detailed progress statistics and historical insights across your trips.',
                    'Available in 9 languages — English, Arabic, Malay, Indonesian, Turkish, Spanish, French, Chinese and German.',
                    'Offline-friendly core features so you can continue even with weak connectivity.',
                  ]
                : [
                    'Doa-doa sahih untuk semua 7 pusingan Tawaf dengan Arab, transliterasi dan terjemahan.',
                    'Susun atur mudah dibaca dengan saiz tulisan boleh laras untuk pelbagai keadaan cahaya.',
                    'Rancang sesi Tawaf lebih awal, tetapkan peringatan dan lihat sejarah anda.',
                    'Statistik perkembangan terperinci dan pandangan sejarah sepanjang perjalanan anda.',
                    'Tersedia dalam 9 bahasa — Inggeris, Arab, Melayu, Indonesia, Turki, Sepanyol, Perancis, Cina dan Jerman.',
                    'Ciri teras mesra luar talian supaya anda boleh terus guna walaupun sambungan lemah.',
                  ]
              ).map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-emerald-muted" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience / UX block */}
          <div className="rounded-3xl border border-warm-100 bg-warm-50/80 p-6 md:p-7 shadow-sm">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-emerald-muted mb-3">
              {isEN ? 'Pilgrim Experience' : 'Pengalaman Jemaah'}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-3">
              {isEN ? 'Built for real pilgrims on the ground' : 'Dibina untuk jemaah sebenar di lapangan'}
            </h3>
            <p className="text-sm text-navy-600 mb-5 leading-relaxed">
              {isEN
                ? 'From smooth animations to intuitive navigation, Tawaf Counter is designed to stay out of the way so you can stay present in worship.'
                : 'Daripada animasi yang lancar hingga navigasi yang intuitif, Tawaf Counter direka agar tidak mengganggu supaya anda kekal fokus pada ibadah.'}
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-navy-700 mb-4">
              {(isEN
                ? [
                    'Intuitive navigation and clean layout.',
                    'Accessibility-friendly design choices.',
                    'Regular updates and improvements based on real pilgrim feedback.',
                  ]
                : [
                    'Navigasi yang intuitif dan susun atur yang bersih.',
                    'Reka bentuk mesra aksesibiliti.',
                    'Kemas kini dan penambahbaikan berkala berdasarkan maklum balas jemaah sebenar.',
                  ]
              ).map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-emerald-muted" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-navy-600">
              {isEN
                ? 'Perfect for Umrah and Hajj pilgrims, regular Tawaf performers and anyone seeking authentic, structured Tawaf guidance.'
                : 'Sesuai untuk jemaah Umrah dan Haji, mereka yang sering bertawaf dan sesiapa yang mencari panduan Tawaf yang autentik dan tersusun.'}
            </p>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
            {isEN ? 'Ready for your next Tawaf?' : 'Sedia untuk Tawaf seterusnya?'}
          </h2>
          <p className="text-navy-600 mb-8 leading-relaxed">
            {isEN
              ? 'Let Tawaf Counter handle the tracking, reminders and duas — so your heart can stay with the House of Allah.'
              : 'Biarkan Tawaf Counter mengurus kiraan, peringatan dan doa — supaya hati anda kekal bersama Baitullah.'}
          </p>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-navy-900 text-white font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md"
          >
            <Download size={20} />
            <span>{isEN ? 'Get Tawaf Counter' : 'Dapatkan Tawaf Counter'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};


