import { Link } from 'react-router-dom';

/**
 * Main site footer with links and branding for EasyTax
 */
function Footer() {
  return (
    <footer className="bg-darkPink-900 py-20">
      <div className="container mx-auto px-4">
        <div className="pb-20 border-b border-white/30 mb-10">
          <div className="flex flex-wrap justify-between -m-4">
            <div className="w-full lg:w-1/6 p-4">
              <Link className="inline-block" to="/">
                <img className="h-16" src="/images/logo-white.svg" alt="EasyTax Logo" />
              </Link>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
              <ul className="flex flex-col gap-6">
                <li>
                  <a className="text-white hover:text-opacity-70 text-xl transition duration-200" href="#">Features</a>
                </li>
                <li>
                  <a className="text-white hover:text-opacity-70 text-xl transition duration-200" href="#">How it works</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" to="/pricing">Pricing</Link>
                </li>
                <li>
                  <a className="text-white hover:text-opacity-70 text-xl transition duration-200" href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" to="/about">About</Link>
                </li>
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" to="/contact">Contact Us</Link>
                </li>
                <li>
                  <a className="text-white hover:text-opacity-70 text-xl transition duration-200" href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-6">
          <p className="text-white">© Easy Tax. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#">
              <img src="/images/social-twitter-x-logo.svg" alt="Follow us on X (Twitter)" />
            </a>
            <a href="#">
              <img src="/images/social-linkedin-logo.svg" alt="Follow us on LinkedIn" />
            </a>
            <a href="#">
              <img src="/images/social-instagram-logo.svg" alt="Follow us on Instagram" />
            </a>
            <a href="#">
              <img src="/images/social-facebook-logo.svg" alt="Follow us on Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;