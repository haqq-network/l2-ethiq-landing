import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20 flex items-center justify-center">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-clash font-bold text-white mb-6 leading-tight">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're building something amazing. Stay tuned for updates.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

