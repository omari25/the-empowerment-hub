import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock,Send,MessageCircle,Users,Heart,CheckCircle,Facebook,Twitter,Instagram,Linkedin,ArrowRight} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [formStatus, setFormStatus] = useState('');

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Garissa Town", "Garissa County, Kenya"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+254 708 418 264", "+254 720 025 523"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["empowermenthub42@gmail.com", "wardahubah9@gmail.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      action: "Visit Us"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'services', label: 'Request Services' },
    { value: 'donation', label: 'Donation & Support' },
    { value: 'media', label: 'Media & Press' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' }
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Join Our Team",
      description: "Become a volunteer and help us make a difference",
      action: "Apply Now",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Support our programs and community initiatives",
      action: "Donate",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "Request Services",
      description: "Get information about our community services",
      action: "Learn More",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3B175D]/10 to-[#E58E2F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3B175D] mb-6">
            Connect With The Empowerment Hub
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to join our mission, request our services, or learn more about our work? 
            We'd love to hear from you. Let's create positive change together.
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3B175D] mb-1">24hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E58E2F] mb-1">100%</div>
              <div className="text-sm text-gray-600">Inquiries Answered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3B175D] mb-1">7 Days</div>
              <div className="text-sm text-gray-600">Weekly Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section
        id="contact-info"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['contact-info'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our team. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#E58E2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-[#E58E2F]" />
                </div>
                
                <h3 className="text-lg font-bold text-[#3B175D] mb-3">
                  {info.title}
                </h3>
                
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                
                <button className="text-[#E58E2F] font-semibold text-sm hover:text-[#E58E2F]/80 transition-colors">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['contact-form'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#3B175D] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  All fields marked with an asterisk (*) are required.
                </p>
              </div>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone and Inquiry Type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full px-8 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'sending'
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-[#3B175D] text-white hover:bg-[#3B175D]/90 transform hover:scale-105'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-bold text-[#3B175D] mb-6">
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mr-4`}>
                          <action.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-1">{action.title}</h4>
                          <p className="text-gray-600 text-sm">{action.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#E58E2F] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#3B175D] mb-4">
                  Visit Our Office
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#E58E2F] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Main Office</p>
                      <p className="text-gray-600 text-sm">Garissa Town, Garissa County, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#E58E2F] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Office Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] font-semibold rounded-lg hover:bg-[#E58E2F]/20 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-red-800 mb-3">
                  Emergency Support
                </h3>
                <p className="text-red-700 text-sm mb-4">
                  For urgent community issues or crisis situations requiring immediate attention:
                </p>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-red-600 mr-2" />
                  <span className="font-semibold text-red-800">+254 708 418 264</span>
                </div>
                <p className="text-red-600 text-xs mt-2">Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="map-section"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['map-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Find Us in Garissa
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Garissa Town, we're easily accessible to serve our community.
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B175D] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-400">Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section
        id="social-newsletter"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['social-newsletter'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-[#3B175D] mb-6">
                Follow Our Journey
              </h2>
              
              <p className="text-gray-600 mb-8">
                Stay connected with us on social media for the latest updates on our projects, 
                events, and community impact stories.
              </p>
              
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#3B175D] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="font-bold text-[#3B175D] mb-2">
                  Weekly Community Updates
                </h3>
                <p className="text-gray-600 text-sm">
                  Get insights into our latest activities, success stories, and upcoming events 
                  delivered straight to your social media feed.
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-[#3B175D] mb-4">
                Stay Informed
              </h2>
              
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for monthly updates, project highlights, 
                volunteer opportunities, and exclusive insights into our community work.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    className="mt-1 mr-3 text-[#3B175D] focus:ring-[#3B175D]"
                  />
                  <label htmlFor="newsletter-consent" className="text-sm text-gray-600">
                    I agree to receive newsletters and updates from The Empowerment Hub. 
                    You can unsubscribe at any time.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#E58E2F] text-white font-semibold rounded-lg hover:bg-[#E58E2F]/90 transition-all duration-300 flex items-center justify-center"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>No spam, only valuable community updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq-section"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['faq-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our organization and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How can I volunteer with the Empowerment Hub?",
                answer: "We welcome volunteers from all backgrounds! You can apply through our contact form, specifying your areas of interest and availability. We'll match you with suitable opportunities based on our current projects and your skills."
              },
              {
                question: "Do you provide services outside of Garissa County?",
                answer: "Currently, our primary focus is Garissa County, but we're expanding our reach. We occasionally work in neighboring areas for specific projects. Contact us to discuss your location and needs."
              },
              {
                question: "How can organizations partner with you?",
                answer: "We're always open to partnerships that align with our mission. Please reach out through our partnership inquiry option in the contact form, and include details about your organization and proposed collaboration."
              },
              {
                question: "Are your services free of charge?",
                answer: "Most of our community services are provided free of charge, funded through donations and grants. Some specialized programs may have minimal fees to ensure sustainability, but we never let cost be a barrier to access."
              },
              {
                question: "How can I request services for my community?",
                answer: "Use our contact form with 'Request Services' as the inquiry type. Provide details about your community's needs, location, and the type of support you're seeking. We'll assess the request and get back to you within 24 hours."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-[#3B175D] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Didn't find what you're looking for?
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-[#3B175D] text-white font-semibold rounded-lg hover:bg-[#3B175D]/90 transition-all duration-300">
              Ask a Question
              <MessageCircle className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;