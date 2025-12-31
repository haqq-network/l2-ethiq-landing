const EthiqDivider = () => {
  return (
    <section className="flex flex-col items-center justify-center px-5 w-full h-[58px] md:h-[174px]">
      <div className="flex items-center justify-center gap-[10px] md:gap-[21px] w-full max-w-[1095px]">
        {/* Left Diamond */}
        <div className="relative w-8 h-8 md:w-[72px] md:h-[72px] shrink-0">
          <img 
            src="/assets/images/diamond-outer.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full"
          />
          <img 
            src="/assets/images/diamond-inner.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full"
          />
          <img 
            src="/assets/images/diamond-fill.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Left Connector Line - Desktop */}
        <div className="hidden md:flex flex-1 h-[1px] items-center shrink-0">
          <div className="w-full h-[1px] bg-gradient-to-r from-white/60 to-white/20" />
        </div>
        
        {/* Left Connector Line - Mobile */}
        <div className="md:hidden flex flex-1 h-[1px] items-center shrink-0">
          <div className="w-full h-[1px] bg-gradient-to-r from-white/60 to-white/20" />
        </div>

        {/* ETHIQ Text */}
        <div className="relative shrink-0 h-[23px] w-[111px] md:h-[50px] md:w-[235px]">
          <img 
            src="/assets/images/ethiq-text.svg" 
            alt="ETHIQ" 
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Right Connector Line - Desktop only */}
        <div className="hidden md:flex flex-1 h-[1px] items-center shrink-0">
          <div className="w-full h-[1px] bg-gradient-to-l from-white/60 to-white/20" />
        </div>

        {/* Right Diamond - Desktop only */}
        <div className="hidden md:block relative w-[72px] h-[72px] shrink-0">
          <img 
            src="/assets/images/diamond-outer.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full"
          />
          <img 
            src="/assets/images/diamond-inner.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full"
          />
          <img 
            src="/assets/images/diamond-fill.svg" 
            alt="" 
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default EthiqDivider
