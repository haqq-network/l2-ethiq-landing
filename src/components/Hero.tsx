import videoBgWebm from '../assets/bg_1_blue_below.webm'
import videoBgMp4 from '../assets/bg_1_blue_below_.mp4'

const Hero = () => {
  return (
    <header className="relative flex flex-col items-center justify-center h-[586px] md:h-[861px] pt-[120px] md:pt-0 px-5 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBgWebm} type="video/webm" />
          <source src={videoBgMp4} type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center gap-9 max-w-[480px] md:max-w-none w-full pb-[60px] md:pb-0">
        {/* Header Text */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full text-center">
            <h1 className="gradient-text-hero font-medium text-[36px] md:text-[80px] leading-[1.2] md:leading-normal mb-0 tracking-[-0.72px] md:tracking-[-1.6px]">
              ETHIQ
            </h1>
            <h2 className="gradient-text-hero font-medium text-[36px] md:text-[64px] leading-[1.2] md:leading-normal tracking-[-0.72px] md:tracking-[-1.6px]">
              Ethics is the new primitive.
            </h2>
          </div>
        </div>

        {/* Subtitle - Mobile (before buttons) */}
        <div className="md:hidden flex flex-col items-center w-full">
          <p className="text-[14px] text-ethiq-muted text-center tracking-[-0.28px] leading-[1.2]">
            Secured by Ethereum.
            <br />
            Built on Superchain.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-9 md:gap-4 items-center w-full md:w-auto">
          <a 
            href="#bridge" 
            className="btn-primary w-full md:w-auto"
          >
            <span className="font-medium text-[14px] text-black leading-none">→</span>
            <span className="font-medium text-[14px] text-black leading-none">Bridge to Ethiq</span>
          </a>
          <a 
            href="#build" 
            className="btn-secondary w-full md:w-[174px]"
          >
            <span className="font-medium text-[14px] text-white leading-none">→</span>
            <span className="font-medium text-[14px] text-white leading-none">Start building</span>
          </a>
        </div>

        {/* Subtitle - Desktop (after buttons) */}
        <div className="hidden md:flex flex-col items-center w-full">
          <p className="text-[18px] text-ethiq-muted text-center tracking-[-0.36px] leading-[1.2]">
            Secured by Ethereum. Built on Superchain.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Hero
