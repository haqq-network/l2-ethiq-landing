import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold text-white mb-6 leading-tight">
              Welcome to ETHIQ
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              The next generation Layer 2 solution built for scalability, security, and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-haqq-orange hover:bg-haqq-bigfoot-feet text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium text-lg">
                Get Started
              </button>
              <button className="border border-haqq-border hover:border-haqq-orange text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium text-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-clash font-bold text-white text-center mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-haqq-blue/30 border border-haqq-border rounded-xl p-6 hover:border-haqq-orange transition-colors duration-200">
                <div className="w-12 h-12 bg-haqq-seaweed rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
                <p className="text-gray-400">
                  Experience lightning-fast transactions with our optimized Layer 2 architecture.
                </p>
              </div>
              
              <div className="bg-haqq-blue/30 border border-haqq-border rounded-xl p-6 hover:border-haqq-orange transition-colors duration-200">
                <div className="w-12 h-12 bg-haqq-seaweed rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
                <p className="text-gray-400">
                  Built with security as a core principle, ensuring your assets are always protected.
                </p>
              </div>
              
              <div className="bg-haqq-blue/30 border border-haqq-border rounded-xl p-6 hover:border-haqq-orange transition-colors duration-200">
                <div className="w-12 h-12 bg-haqq-seaweed rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
                <p className="text-gray-400">
                  Sustainable blockchain technology that reduces energy consumption significantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-haqq-blue/20 border-y border-haqq-border py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-clash font-bold text-white text-center mb-8">
                About ETHIQ
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                ETHIQ is a cutting-edge Layer 2 solution designed to scale Ethereum while maintaining
                its security guarantees. We're committed to building infrastructure that enables the
                next generation of decentralized applications.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-clash font-bold text-white text-center mb-12">
              Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-haqq-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Advanced Consensus</h3>
                    <p className="text-gray-400">
                      Our innovative consensus mechanism ensures fast finality while maintaining decentralization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-haqq-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Contract Compatibility</h3>
                    <p className="text-gray-400">
                      Full EVM compatibility means your existing contracts work seamlessly.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-haqq-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Optimized Data Availability</h3>
                    <p className="text-gray-400">
                      Efficient data storage solutions that reduce costs without compromising security.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-haqq-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Developer Tools</h3>
                    <p className="text-gray-400">
                      Comprehensive SDKs and documentation to get you building quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-haqq-blue/30 border-y border-haqq-border py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-clash font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join the ETHIQ community and start building the future of decentralized applications today.
              </p>
              <button className="bg-haqq-orange hover:bg-haqq-bigfoot-feet text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium text-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

