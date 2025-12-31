import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EcosystemSection from './components/EcosystemSection'
import ValuesSection from './components/ValuesSection'
import EthiqDivider from './components/EthiqDivider'
import RealPeopleSection from './components/RealPeopleSection'
import Footer from './components/Footer'

function App() {
  // Add smooth scroll behavior and intersection observer for animations
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-fade-up, .scroll-fade-in, .scroll-scale-in, .scroll-blur-in, .stagger-children'
    )
    
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-ethiq-main">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main 
        id="main-content" 
        className="flex-1 flex flex-col gap-[120px] md:gap-[180px] pt-[60px]"
        role="main"
      >
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
