const EthiqDivider = () => {
  return (
    <section className="flex flex-col items-center justify-center px-5 w-full h-[58px] md:h-[174px]">
      <div className="flex items-center justify-center gap-[10px] md:gap-[21px] w-full max-w-[1095px]">
        {/* Left Diamond */}
        <div className="relative w-8 h-8 md:w-[72px] md:h-[72px] shrink-0">
          <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
            <path
              d="M36 4L68 36L36 68L4 36L36 4Z"
              stroke="url(#diamond-gradient-left)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M36 12L60 36L36 60L12 36L36 12Z"
              stroke="url(#diamond-gradient-left-inner)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="diamond-gradient-left" x1="0" y1="0" x2="72" y2="72">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              <linearGradient id="diamond-gradient-left-inner" x1="0" y1="0" x2="72" y2="72">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Left Connector Line - Desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-[320px] h-[72px] overflow-hidden">
          <div className="w-full h-0 border-t border-dashed border-white/30" />
        </div>
        
        {/* Mobile: Short connector */}
        <div className="md:hidden flex items-center flex-1 max-w-[147px] h-[34px] overflow-hidden">
          <div className="w-full h-0 border-t border-dashed border-white/20" />
        </div>

        {/* ETHIQ Text - Outline Style */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 235 50" 
            fill="none" 
            className="w-[111px] h-[23px] md:w-[235px] md:h-[50px]"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="url(#ethiq-text-gradient)"
              strokeWidth="1"
              fontSize="40"
              fontFamily="Satoshi, sans-serif"
              fontWeight="500"
              letterSpacing="-0.8"
            >
              ETHIQ
            </text>
            <defs>
              <linearGradient id="ethiq-text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Connector Line - Desktop only */}
        <div className="hidden md:flex items-center flex-1 max-w-[320px] h-[72px] overflow-hidden">
          <div className="w-full h-0 border-t border-dashed border-white/30" />
        </div>

        {/* Right Diamond - Desktop only */}
        <div className="hidden md:block relative w-[72px] h-[72px] shrink-0">
          <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
            <path
              d="M36 4L68 36L36 68L4 36L36 4Z"
              stroke="url(#diamond-gradient-right)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M36 12L60 36L36 60L12 36L36 12Z"
              stroke="url(#diamond-gradient-right-inner)"
              strokeWidth="0.5"
              fill="none"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="diamond-gradient-right" x1="72" y1="0" x2="0" y2="72">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              <linearGradient id="diamond-gradient-right-inner" x1="72" y1="0" x2="0" y2="72">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default EthiqDivider
