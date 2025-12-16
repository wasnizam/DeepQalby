import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ImageProps {
  title: string;
  imageSrc: string;
}

const HeroImage: React.FC<ImageProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative flex-shrink-0 w-[280px] md:w-[320px] snap-center transition-transform hover:-translate-y-2 duration-300">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-auto bg-transparent drop-shadow-2xl" 
      />
    </div>
  );
};

export const Hero: React.FC = () => {
  const images = [
    {
      title: "Salam, Nizam",
      imageSrc: "https://raw.githubusercontent.com/wasnizam/DeepQalby/main/assets/1.png"
    },
    {
      title: "Quran Reader",
      imageSrc: "https://raw.githubusercontent.com/wasnizam/DeepQalby/main/assets/2.png"
    },
    {
      title: "Prayer Times",
      imageSrc: "https://raw.githubusercontent.com/wasnizam/DeepQalby/main/assets/3.png"
    },
    {
      title: "Impact",
      imageSrc: "https://raw.githubusercontent.com/wasnizam/DeepQalby/main/assets/4.png"
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-navy-900 mb-6 leading-[1.1]">
          Purpose-driven <br className="hidden md:block" /> digital products.
        </h1>
        <p className="text-lg md:text-xl text-navy-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          DeepQalby is a product studio. We build our own FaithTech platforms and help founders ship exceptional mobile apps and SaaS.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/services" 
            className="w-full sm:w-auto px-8 py-3.5 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
          >
            Build with DeepQalby
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link 
            to="/products" 
            className="w-full sm:w-auto px-8 py-3.5 bg-warm-white text-navy-900 border border-warm-100 rounded-full font-medium hover:bg-warm-50 transition-all flex items-center justify-center"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

      {/* Images Scrollable Container */}
      <div className="w-full overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory px-6">
        <div className="min-w-fit flex gap-6 md:gap-10 justify-start md:justify-center mx-auto max-w-fit items-start">
          {images.map((img, index) => (
            <HeroImage key={index} {...img} />
          ))}
        </div>
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-900/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};