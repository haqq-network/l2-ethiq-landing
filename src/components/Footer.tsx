const Footer = () => {
  return (
    <footer className="bg-haqq-black border-t border-haqq-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center">
          <h3 className="text-xl font-clash font-bold text-white mb-4">ETHIQ</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
            Building the future of decentralized applications with innovative Layer 2 solutions.
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ETHIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

