const Footer = () => {
  return (
    <footer className="bg-haqq-black border-t border-haqq-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-clash font-bold text-white mb-4">ETHIQ</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Building the future of decentralized applications with innovative Layer 2 solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-haqq-orange transition-colors duration-200 text-sm"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-haqq-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ETHIQ. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-haqq-orange transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-haqq-orange transition-colors duration-200 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

