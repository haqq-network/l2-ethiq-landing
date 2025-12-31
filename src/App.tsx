import Header from './components/Header'
import Hero from './components/Hero'
import EcosystemSection from './components/EcosystemSection'
import ValuesSection from './components/ValuesSection'
import EthiqDivider from './components/EthiqDivider'
import RealPeopleSection from './components/RealPeopleSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ethiq-main">
      <Header />
      
      <main className="flex-1 flex flex-col gap-[120px] md:gap-[180px] pt-[60px]">
        {/* Hero Section */}
        <Hero />
        
        {/* One Ecosystem Section */}
        <EcosystemSection />
        
        {/* Values Section with title "A Shared Economic Engine Connects" */}
        <ValuesSection />
        
        {/* ETHIQ Divider */}
        <EthiqDivider />
        
        {/* Real People Section + Video Section */}
        <RealPeopleSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
