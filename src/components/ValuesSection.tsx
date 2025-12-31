const ValuesSection = () => {
  const values = [
    {
      icon: '/assets/icons/infrastructure.svg',
      title: 'Infrastructure',
      rotation: 'rotate-[270deg]',
    },
    {
      icon: '/assets/icons/apps.svg',
      title: 'Apps',
      rotation: 'rotate-[270deg]',
    },
    {
      icon: '/assets/icons/users.svg',
      title: 'Users',
      rotation: 'rotate-[270deg]',
    },
    {
      icon: '/assets/icons/value-flows.svg',
      title: 'Value flows',
      rotation: 'rotate-[90deg]',
    },
  ]

  return (
    <section className="flex flex-col items-center px-5 w-full">
      {/* Section Title */}
      <h2 className="gradient-text-section font-medium text-[28px] md:text-[40px] text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.2] max-w-[307px] md:max-w-none mb-8 md:mb-0">
        A Shared Economic Engine Connects
      </h2>

      {/* Connection Visualization - Desktop */}
      <div className="hidden md:flex items-center justify-center w-full max-w-[1240px] h-[157px] mb-10">
        <div className="flex items-center gap-1">
          {/* Animated dots flowing left to right */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-1"
            >
              <div 
                className="w-[6px] h-[6px] rounded-full bg-white/30 animate-pulse"
                style={{ 
                  animationDelay: `${i * 50}ms`,
                  opacity: Math.max(0.1, 0.5 - Math.abs(i - 15) * 0.03)
                }}
              />
              <div 
                className="w-1 h-1 rounded-full bg-white/15"
                style={{ opacity: Math.max(0.05, 0.3 - Math.abs(i - 15) * 0.02) }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Value Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-[31px] items-center justify-center w-full max-w-[1095px]">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="card flex flex-col items-center justify-center gap-6 p-10 w-full md:w-[250px] h-[138px] border-[0.5px] border-transparent hover:border-white/10 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-[42px] h-[42px]">
              <div className={value.rotation}>
                <img
                  src={value.icon}
                  alt=""
                  className="w-[42px] h-[42px]"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-medium text-[20px] text-white text-center tracking-[-0.4px] leading-none">
              {value.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValuesSection
