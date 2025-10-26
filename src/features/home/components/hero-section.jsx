import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-14">
      <img className="hidden lg:block absolute left-16 xl:left-36 2xl:left-56 3xl:left-96 top-56" src="/images/hero-stars-pattern-1.svg" alt="Decorative star pattern" />
      <img className="hidden lg:block absolute right-4 xl:right-36 2xl:right-56 3xl:right-96 top-56" src="/images/hero-stars-pattern-2.svg" alt="Decorative star pattern" />

      <div className="relative z-50">
        <h1 className="font-heading text-white text-center text-4xl sm:text-5xl md:text-7xl font-bold max-w-4xl mx-auto mb-6">
          Simplifying tax management for your business needs
        </h1>
        <p className="text-center text-white max-w-xl mx-auto text-lg mb-12">
          From effortless transaction tracking to insightful financial reports, take control of your finances with precision and ease.
        </p>
        <div className="mb-40 text-center">
          <button className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
            <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-white/80 group-focus:bg-white/80 rounded-full transition duration-200">
              <span className="text-pinkSecondary-900">Get started for free</span>
            </div>
          </button>
        </div>
        <img className="w-full object-cover" src="/images/hero-dashboard-pink-2.png" alt="EasyTax dashboard interface preview" />
      </div>
    </div>
  );
};

export default HeroSection;