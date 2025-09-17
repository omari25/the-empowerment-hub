import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/about#our-story' },
      { name: 'Leadership', path: '/about#founder-section' },
      { name: 'Values', path: '/about#our-values' }
    ],
    services: [
      { name: 'Youth Development', path: '/services' },
      { name: 'Rights Advocacy', path: '/services' },
      { name: 'Talent Support', path: '/services' },
      { name: 'Community Health', path: '/services' }
    ],
    projects: [
      { name: 'All Projects', path: '/projects' },
      { name: 'GBV Campaign', path: '/projects' },
      { name: 'Pride of Kids', path: '/projects' },
      { name: 'Period Poverty', path: '/projects' }
    ],
    getInvolved: [
      { name: 'Volunteer', path: '/contact' },
      { name: 'Partnership', path: '/contact' },
      { name: 'Donate', path: '/contact' },
      { name: 'Contact Us', path: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-700' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Garissa Town, Garissa County, Kenya'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+254 XXX XXX XXX'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@empowermenthub.org'
    }
  ];

  return (
    <footer className="bg-[#3B175D] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#E58E2F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EH</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">Empowerment Hub</h1>
                <p className="text-[#E58E2F] text-sm font-medium">Youth Initiative</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              A youth-led initiative bringing out the needs and interests of young people 
              living in Garissa, Kenya. Voice for the voiceless, promoting rights, 
              gender equality, and talent development.
            </p>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <item.icon className="h-4 w-4 text-[#E58E2F] mr-3 flex-shrink-0" />
                  <span className="text-sm">{item.content}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20 transform hover:scale-110`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Organization</h3>
            <ul className="space-y-2">
              {footerLinks.organization.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#E58E2F] transition-colors duration-300 text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#E58E2F] transition-colors duration-300 text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-4 mt-8">Projects</h3>
            <ul className="space-y-2">
              {footerLinks.projects.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#E58E2F] transition-colors duration-300 text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#E58E2F] transition-colors duration-300 text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-bold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get our monthly newsletter with project updates and community news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#E58E2F]"
                />
                <button className="px-4 py-2 bg-[#E58E2F] hover:bg-[#E58E2F]/90 rounded-r-lg transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Strip */}
      <div className="bg-[#E58E2F] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white font-semibold text-lg flex items-center justify-center">
              <Heart className="h-5 w-5 mr-2" />
              "Your Voice Matters" - Empowering Youth, Transforming Communities
              <Heart className="h-5 w-5 ml-2" />
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              <p>© {currentYear} The Empowerment Hub. All rights reserved.</p>
              <p className="mt-1">Founded in April 2025 by Ubah Abdullahi</p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#E58E2F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E58E2F] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[#E58E2F] transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Recognition */}
            <div className="text-gray-300 text-sm text-center md:text-right">
              <p>Registered Community-Based Organization</p>
              <div className="flex items-center justify-center md:justify-end mt-1">
                <span className="mr-2">Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span className="ml-2">for our community</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#E58E2F] hover:bg-[#E58E2F]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowRight className="h-5 w-5 -rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;