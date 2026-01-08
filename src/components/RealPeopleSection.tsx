import { useState, useCallback, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const RealPeopleSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const isMobile = useIsMobile()

  const handlePlayVideo = useCallback(() => {
    setIsVideoPlaying(true)
  }, [])

  const handleCloseVideo = useCallback(() => {
    setIsVideoPlaying(false)
  }, [])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoPlaying) {
        handleCloseVideo()
      }
    }

    if (isVideoPlaying) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isVideoPlaying, handleCloseVideo])

  return (
    <>
      {/* Title Section */}
      <section 
        className="flex flex-col items-center px-5 w-full"
        id="ecosystem"
        aria-labelledby="real-people-title"
      >
        {/* Section Title */}
        <h2 
          id="real-people-title"
          className="gradient-text-section font-medium text-[28px] md:text-[40px] text-center tracking-[-0.56px] md:tracking-[-0.8px] leading-[1.2] w-[307px] md:w-[724px] md:h-[107px] flex items-center justify-center scroll-fade-up"
        >
          Real People. Real Apps. Real Value.
        </h2>

        {/* Description - Desktop */}
        <div className="hidden md:flex max-w-[980px] w-full p-5 h-[121px] items-center scroll-fade-up">
          <div className="flex flex-col items-center justify-center w-full">
            <p className="gradient-text-paragraph text-[20px] text-center tracking-[-0.8px] leading-[1.36] w-[768px]">
              Ethiq is an integral part of the Haqq ecosystem. Together with Haqq Network, Firoza Finance, BarakaFi, Deenar Gold, and other applications, it aims to generate economic value for its users.
            </p>
          </div>
        </div>

        {/* Description - Mobile */}
        <div className="md:hidden mt-8 h-[73px] scroll-fade-up">
          <div className="flex flex-col items-center justify-center h-[70px] w-[307px]">
            <p className="text-[14px] text-ethiq-muted text-center tracking-[-0.56px] leading-[1.36] w-[273px]">
              Ethiq is an integral part of the Haqq ecosystem. Together with Haqq Network, Firoza Finance, BarakaFi, Deenar Gold, and other applications, it aims to generate economic value for its users.  
            </p>
          </div>
        </div>

      </section>

      {/* Video Section */}
      <section 
        className="flex flex-col items-center px-5 w-full md:pb-[160px]"
        aria-label="Video section"
      >
        <div className="max-w-[980px] w-full">
          {/* Mobile Video */}
          <div className="md:hidden flex flex-col gap-6 items-center p-5 rounded-2xl w-full scroll-scale-in">
            <div 
              className="relative w-full rounded-lg overflow-hidden cursor-pointer"
              style={{ aspectRatio: '16/9' }}
              onClick={handlePlayVideo}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handlePlayVideo()}
              aria-label="Play video"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DOJ_eWvaBGY"
                title="ETHIQ Introduction Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop Video Card */}
          <div className="hidden md:flex bg-ethiq-card p-5 rounded-2xl w-full items-center justify-center scroll-scale-in hover-glow">
            <div 
              className="relative w-[940px] h-[529px] rounded-lg overflow-hidden"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DOJ_eWvaBGY"
                title="ETHIQ Introduction Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseVideo}
          role="dialog"
          aria-modal="true"
          aria-label="Video player modal"
        >
          <div
            className="relative w-full max-w-[1200px] aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Close video modal"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DOJ_eWvaBGY?autoplay=1"
              title="ETHIQ Introduction Video - Fullscreen"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default RealPeopleSection
