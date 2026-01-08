import GradientBorderCard from './GradientBorderCard'

const EcosystemSection = () => {
  return (
    <section 
      className="flex flex-col items-center px-5 w-full"
      id="about"
      aria-labelledby="ecosystem-title"
    >
      <div className="max-w-[980px] w-full relative md:h-[363px]">
        {/* Section Title */}
        <div className="md:absolute md:top-[50.5px] md:left-0 md:right-0 md:-translate-y-1/2 flex flex-col items-center justify-center scroll-fade-up">
          <h2 
            id="ecosystem-title"
            className="gradient-text-section font-medium text-[28px] md:text-[40px] text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.2] max-w-[251px] md:max-w-none"
          >
            <span className="block">One Ecosystem. One Value Engine.</span>
            <span className="block">Shared Success.</span>
          </h2>
        </div>

        {/* Description Card - Desktop */}
        <GradientBorderCard
          className="hidden md:flex md:absolute md:top-[155px] md:left-0 w-full h-[208px] scroll-scale-in hover-glow"
          innerClassName="flex items-center p-5"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <p className="gradient-text-paragraph text-[20px] text-center tracking-[-0.8px] leading-[1.36] w-[690px]">
              Ethiq is a Layer 2 blockchain built on Ethereum. It is designed with a unified value layer within the Haqq ecosystem, aiming to create a shared economic engine that channels value back to the community.
             </p>
          </div>
        </GradientBorderCard>

        {/* Description - Mobile (no card) */}
        <div className="md:hidden mt-8 scroll-fade-up">
          <div className="flex flex-col items-center justify-center h-[93px]">
            <p className="text-[14px] text-ethiq-muted text-center tracking-[-0.56px] leading-[1.36] w-[307px]">
              Ethiq is a Layer 2 blockchain built on Ethereum. It is designed with a unified value layer within the Haqq ecosystem, aiming to create a shared economic engine that channels value back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection
