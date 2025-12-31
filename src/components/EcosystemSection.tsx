const EcosystemSection = () => {
  return (
    <section className="flex flex-col items-center px-5 w-full">
      <div className="max-w-[980px] w-full">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="gradient-text-section font-medium text-[28px] md:text-[40px] text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.2] max-w-[251px] md:max-w-none">
            <span className="block">One Ecosystem. One Value Engine.</span>
            <span className="block">Shared Success.</span>
          </h2>
        </div>

        {/* Description Card - Desktop */}
        <div className="hidden md:block card p-5 mt-[50px]">
          <div className="flex flex-col items-center justify-center h-[208px]">
            <p className="gradient-text-paragraph text-[20px] text-center tracking-[-0.8px] leading-[1.36] max-w-[690px]">
              Ethiq is a Layer 2 blockchain built on Ethereum and part of the Superchain. It is designed to be the unified value layer for the Haqq ecosystem, aiming to create a shared economic engine that channels value back to the community.
            </p>
          </div>
        </div>

        {/* Description - Mobile (no card) */}
        <div className="md:hidden mt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[14px] text-ethiq-text-muted text-center tracking-[-0.56px] leading-[1.36] max-w-[307px]">
              Ethiq is a Layer 2 blockchain built on Ethereum and part of the Superchain. It is designed to be the unified value layer for the Haqq ecosystem, aiming to create a shared economic engine that channels value back to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection
