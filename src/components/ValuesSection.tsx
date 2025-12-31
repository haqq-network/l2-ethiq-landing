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
    <section className="flex flex-col items-center px-5 w-full md:w-[1280px] md:mx-auto md:pb-[180px]">
      {/* Section Title */}
      <h2 className="gradient-text-section font-medium text-[28px] md:text-[40px] text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.2] w-[307px] md:w-full md:h-[52px] flex items-end justify-center">
        A Shared Economic Engine Connects
      </h2>

      {/* Connection Visualization - Desktop */}
      <div className="hidden md:block w-full h-[157px] my-10 relative">
        <img 
          src="/assets/images/connection-animation.svg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* Value Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-[31px] items-center justify-center w-full mt-8 md:mt-0">
        {values.map((value) => (
          <div
            key={value.title}
            className="card flex flex-col items-center justify-center gap-6 p-10 w-full md:w-[250px] h-[138px]"
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
            <h3 className="font-medium md:font-normal text-[20px] text-white text-center tracking-[-0.4px] leading-none w-full">
              {value.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValuesSection
