const HowItWorksSection = () => {
  return (
    <section className="bg-darkPink-900 py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-center text-white text-4xl md:text-5xl font-bold mb-20">How it works</h2>
        <img className="rounded-3xl w-full object-cover mb-16" style={{height: '600px'}} src="/images/how-it-works-step-pink-1.png" alt="Step-by-step guide showing how EasyTax works" />

        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/3 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 rounded-full p-px w-6 h-6">
                <div className="bg-pinkSecondary-900 rounded-full p-1">
                  <p className="text-white text-center text-xs font-semibold">1</p>
                </div>
              </div>
              <p className="text-white text-lg font-semibold">Input Transactions</p>
            </div>
            <p className="text-white text-opacity-70 max-w-xs">Record your financial transactions such as receipts, and other relevant documents.</p>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 rounded-full p-px w-6 h-6">
                <div className="bg-pinkSecondary-900 rounded-full p-1">
                  <p className="text-white text-center text-xs font-semibold">2</p>
                </div>
              </div>
              <p className="text-white text-lg font-semibold">Categorization</p>
            </div>
            <p className="text-white text-opacity-70 max-w-xs">Automatically categorizes and organizes the recorded transactions, such as income and expenses.</p>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="bg-gradient-to-b from-pink-300 via-pink-700 to-darkPink-900 rounded-full p-px w-6 h-6">
                <div className="bg-pinkSecondary-900 rounded-full p-1">
                  <p className="text-white text-center text-xs font-semibold">3</p>
                </div>
              </div>
              <p className="text-white text-lg font-semibold">Generate Reports</p>
            </div>
            <p className="text-white text-opacity-70 max-w-xs">Generate financial reports, such as income statements, balance sheets, and cash flow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;