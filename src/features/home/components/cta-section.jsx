const CTASection = () => {
  return (
    <section className="bg-darkPink-900 py-28">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl w-full px-7 md:px-14 py-20 bg-gradient-to-t from-pink-300 via-pink-700 to-darkPink-900 relative h-96">
          <div className="relative z-50 flex flex-col justify-center items-start h-full">
            <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-10 max-w-md md:max-w-xl">
              Want to learn how to build templates like this one?
            </h1>
            <a className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full" href="https://www.pixelrocket.store">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
              <div className="relative z-50 flex items-center py-3 px-5 bg-white group-hover:bg-white/80 group-focus:bg-white/80 rounded-full transition duration-200">
                <span className="text-pinkSecondary-900">Visit Pixel Rocket</span>
              </div>
            </a>
          </div>
          <img className="absolute right-0 top-0 object-cover h-full rounded-3xl" src="/images/cta-illustration-pink.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;