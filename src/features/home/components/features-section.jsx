import features from '@data/features.json';

const FeaturesSection = () => {
  if (!features) return null;
  return (
    <section className="bg-darkPink-900 py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <p className="uppercase text-sweetPink-400 text-xs tracking-widest mb-4">FEATURES</p>
        <h2 className="font-heading text-white text-4xl md:text-5xl font-bold mb-4">Easy bookkeeping for your business</h2>
        <p className="text-white text-opacity-70 text-lg max-w-xl mb-20">Our software provides intuitive bookkeeping solutions, allowing you to focus on growing your business rather than crunching numbers.</p>

        {features.map((feature, index) => (
          <div key={feature.id} className={`rounded-2xl border border-white/20 py-6 pr-6 pl-6 md:pl-14 ${index < features.length - 1 ? 'mb-10' : ''}`}>
            <div className={`flex flex-wrap items-center -m-4 ${feature.features.length > 0 ? 'mb-6' : ''}`}>
              <div className="w-full lg:w-1/3 p-4">
                <div className="rounded-full border border-pink-500 w-14 h-14 flex items-center justify-center mb-6">
                  <div className="bg-pinkSecondary-900 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center">
                    <img className="h-6" src={feature.icon} alt="" />
                  </div>
                </div>
                <h3 className="font-heading text-white text-4xl font-bold max-w-xs">{feature.title}</h3>
              </div>
              <div className="w-full lg:w-2/3 p-4">
                <div className={`rounded-xl px-6 md:px-12 py-14 ${feature.gradient}`}>
                  <img className="rounded-xl object-cover w-full h-full" style={{height: '288px'}} src={feature.image} alt="" />
                </div>
              </div>
            </div>
            {feature.features.length > 0 && (
              <ul className="flex flex-wrap justify-between gap-6">
                {feature.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16666 10.8333L5.73222 12.3988C6.70853 13.3752 8.29145 13.3752 9.26774 12.3988L15.8333 5.83325" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                    <span className="text-white text-sm">{featureItem}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;