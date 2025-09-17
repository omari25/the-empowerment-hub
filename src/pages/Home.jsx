import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Award,ChevronLeft,ChevronRight,Play} from 'lucide-react';
import outreach from '../assets/outreach.jpg'
import schoolChildern from '../assets/childern.jpg'
import teamMembers from '../assets/team.jpg'
import ubahMwenyewe from '../assets/the-hub.jpg'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero slider content
  const heroSlides = [
    {
      title: "Empowering Youth in Garissa",
      subtitle: "Your Voice Matters",
      description: "A youth-led initiative bringing out the needs and interests of young people living in Garissa, Kenya.",
      cta: "Join Our Movement",
      image: outreach
    },
    {
      title: "Fighting for Gender Equality",
      subtitle: "Rights for Every Individual",
      description: "Standing against barbaric cultures and promoting equal opportunities for all community members.",
      cta: "Learn More",
      image: schoolChildern
    },
    {
      title: "Voice for the Voiceless",
      subtitle: "Community Empowerment",
      description: "From grassroots level initiatives to showcasing talents, we believe every voice deserves to be heard.",
      cta: "Get Involved",
      image: teamMembers
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const stats = [
    { number: "500+", label: "Youth Empowered", icon: Users },
    { number: "15+", label: "Projects Completed", icon: Target },
    { number: "3", label: "Major Campaigns", icon: Heart },
    { number: "100%", label: "Community Focused", icon: Award }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-8">
        <div className="absolute inset-0 bg-[#3B175D]/10"></div>
        
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B175D]/20 to-[#E58E2F]/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-4">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B175D] mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-[#3B175D] text-white font-semibold rounded-lg hover:bg-[#3B175D]/90 transition-all duration-300 transform hover:scale-105"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#E58E2F] text-[#E58E2F] font-semibold rounded-lg hover:bg-[#E58E2F] hover:text-white transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="relative">
              <div className="relative">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#E58E2F] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#3B175D] rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
          
          {/* Slide Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-[#3B175D]" />
            </button>
            
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#3B175D]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-[#3B175D]" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`text-center p-6 rounded-lg bg-gray-50 hover:bg-[#3B175D]/5 transition-all duration-500 transform ${
                  isVisible[`stat-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#E58E2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#E58E2F]" />
                </div>
                <h3 className="text-3xl font-bold text-[#3B175D] mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section
        id="about-preview"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['about-preview'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              
              <h2 className="text-4xl font-bold text-[#3B175D] mb-6">
                Founded with Purpose, Driven by Passion
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                The Empowerment Hub was founded in April 2025 by Ubah Abdullahi, a young ambitious 
                lady raised in Garissa. As a healthcare worker and advocate for women's rights, 
                she established this youth-led initiative to address the critical needs of young people 
                in our community.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                We are strong believers that "your voice matters" and work tirelessly to promote 
                individual rights, gender equality, and talent development while fighting against 
                harmful traditional practices.
              </p>
              
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#3B175D] text-white font-semibold rounded-lg hover:bg-[#3B175D]/90 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img
                src={ubahMwenyewe}
                alt="Founder Ubah Abdullahi"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        id="services-preview"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['services-preview'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          
          <h2 className="text-4xl font-bold text-[#3B175D] mb-6">
            How We Empower Our Community
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From community-level initiatives to individual empowerment programs, 
            we provide comprehensive services that address the real needs of young people in Garissa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Youth Development",
                description: "Comprehensive programs designed to develop leadership skills and personal growth among young people in our community."
              },
              {
                title: "Advocacy & Rights",
                description: "Fighting for individual rights, gender equality, and standing as a voice for those who cannot speak for themselves."
              },
              {
                title: "Talent Support",
                description: "Identifying, showcasing, and supporting talented individuals to help them reach their full potential."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-[#3B175D]/5 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#E58E2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-[#E58E2F] rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-[#3B175D] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-[#E58E2F] text-white font-semibold rounded-lg hover:bg-[#E58E2F]/90 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;