import { useState } from 'react'

const RealPeopleSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
  }

  return (
    <section className="flex flex-col items-center px-5 w-full">
      {/* Section Title */}
      <h2 className="gradient-text-section font-medium text-[28px] md:text-[40px] text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.2] max-w-[307px] md:max-w-[724px]">
        Real People. Real Apps. Real Value.
      </h2>

      {/* Description */}
      <div className="max-w-[980px] w-full p-5 mt-4 md:mt-0">
        <div className="flex flex-col items-center justify-center h-auto md:h-[121px]">
          <p className="text-[14px] md:text-[20px] text-ethiq-text-muted md:gradient-text-paragraph text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.36] max-w-[273px] md:max-w-[768px]">
            Ethiq is an integral part of the Haqq ecosystem. By uniting with Haqq Network, Firoza Finance, BarakaFi, and others, it aims to generate economic value for its users.
          </p>
        </div>
      </div>

      {/* Play Button */}
      <button
        onClick={handlePlayVideo}
        className="btn-primary w-full md:w-[174px] mt-4 md:mt-0"
      >
        <span className="text-[14px] font-medium">Play Video</span>
      </button>

      {/* Video Section */}
      <div className="w-full max-w-[980px] mt-8 md:mt-[160px]">
        <div className="card p-5 bg-[#141414]">
          <div 
            className="relative w-full rounded-lg overflow-hidden cursor-pointer"
            style={{ aspectRatio: '295/546' }}
            onClick={handlePlayVideo}
          >
            {/* Video Placeholder / Thumbnail */}
            <div className="absolute inset-0 opacity-[0.32] md:opacity-[0.32]">
              <img
                src="/assets/images/video-placeholder.jpg"
                alt="Video thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Play overlay */}
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          <div
            className="relative w-full max-w-[1200px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DOJ_eWvaBGY?autoplay=1"
              title="ETHIQ Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default RealPeopleSection
