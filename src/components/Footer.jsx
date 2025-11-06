import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaCar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsShieldCheck, BsCreditCard, BsAward } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Buy Cars": [
      "Used Cars in Chandigarh",
      "Used Cars in Mohali", 
      "Used Cars in Panchkula",
      "Luxury Cars",
      "Budget Cars",
      "Electric Cars"
    ],
    "Sell Cars": [
      "Sell Your Car",
      "Car Valuation",
      "Instant Quote",
      "Upload Photos",
      "Seller Guidelines",
      "Success Stories"
    ],
    "Services": [
      "Car Inspection",
      "Documentation",
      "Insurance",
      "Financing",
      "Extended Warranty",
      "Service Centers"
    ],
    "Company": [
      "About Us",
      "Careers",
      "Press",
      "Investor Relations",
      "Contact Us",
      "Testimonials"
    ]
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-600" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-500" }
  ];

  const trustFeatures = [
    { icon: BsShieldCheck, title: "Verified Sellers", desc: "All sellers are verified" },
    { icon: BsCreditCard, title: "Secure Payment", desc: "Safe & secure transactions" },
    { icon: BsAward, title: "Quality Assured", desc: "Premium quality vehicles" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center mb-6">
                <img
                  src="https://cdn.prod.website-files.com/66edec51647acd90172d2445/66f1892f914c8e371c1952cd_logo-web-icon-cartech-x-webflow-template.svg"
                  alt="Car Bazaar"
                  className="h-10 w-auto mr-3"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Car Bazaar
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect car. We connect buyers and sellers 
                with transparency, quality, and exceptional service at the heart of everything we do.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <FaPhone className="mr-3 text-blue-400" size={14} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope className="mr-3 text-blue-400" size={14} />
                  <span>info@carbazaar.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <FaMapMarkerAlt className="mr-3 text-blue-400" size={14} />
                  <span>Chandigarh, Punjab, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-gray-800 rounded-full ${social.color} hover:scale-110 transform transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                        >
                          <IoIosArrowForward className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-700">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors">
                  <feature.icon className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter & Apps Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest car deals and market insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Download Our App
              </h3>
              <p className="text-gray-400 mb-6">
                Browse cars on the go with our mobile app available on all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <FaApple className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <FaGooglePlay className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Car Bazaar. All rights reserved. | 
                <a href="#" className="hover:text-white mx-2 transition-colors">Privacy Policy</a> | 
                <a href="#" className="hover:text-white mx-2 transition-colors">Terms of Service</a> | 
                <a href="#" className="hover:text-white mx-2 transition-colors">Cookie Policy</a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with ❤️ in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;