import React, { useState, useEffect } from 'react';
import { Users, Heart, Megaphone, Star, BookOpen, Shield, ArrowRight,CheckCircle,Phone,Mail,Calendar, Target, MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(0);

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

  const services = [
    {
      id: 1,
      icon: Users,
      title: "Youth Development Programs",
      subtitle: "Building Tomorrow's Leaders",
      description: "Comprehensive leadership development and skill-building programs designed specifically for young people in Garissa.",
      features: [
        "Leadership training workshops",
        "Mentorship programs",
        "Skill development sessions",
        "Personal growth coaching",
        "Career guidance and counseling"
      ],
      benefits: [
        "Enhanced leadership capabilities",
        "Improved self-confidence",
        "Better career prospects",
        "Strong peer networks"
      ],
      targetAudience: "Youth aged 15-30 in Garissa County",
      duration: "3-6 months per program"
    },
    {
      id: 2,
      icon: Shield,
      title: "Rights Advocacy & Protection",
      subtitle: "Voice for the Voiceless",
      description: "Dedicated advocacy services fighting for individual rights, gender equality, and protection against discrimination.",
      features: [
        "Legal awareness workshops",
        "Gender equality advocacy",
        "Anti-GBV campaigns",
        "Human rights education",
        "Community sensitization programs"
      ],
      benefits: [
        "Increased legal awareness",
        "Reduced discrimination",
        "Safer communities",
        "Empowered individuals"
      ],
      targetAudience: "All community members, with focus on vulnerable groups",
      duration: "Ongoing advocacy and support"
    },
    {
      id: 3,
      icon: Star,
      title: "Talent Development & Showcasing",
      subtitle: "Nurturing Hidden Potential",
      description: "Programs designed to identify, develop, and showcase talents within our community across various fields.",
      features: [
        "Talent identification drives",
        "Skills training workshops",
        "Performance opportunities",
        "Creative arts programs",
        "Sports development initiatives"
      ],
      benefits: [
        "Recognition of abilities",
        "Enhanced skills",
        "Performance opportunities",
        "Career pathways"
      ],
      targetAudience: "Talented individuals of all ages",
      duration: "Flexible based on talent area"
    },
    {
      id: 4,
      icon: Heart,
      title: "Community Health Initiatives",
      subtitle: "Caring for Our People",
      description: "Health-focused programs leveraging our founder's healthcare background to address community health needs.",
      features: [
        "Health awareness campaigns",
        "Maternal health support",
        "Mental health advocacy",
        "Hygiene education programs",
        "Healthcare access facilitation"
      ],
      benefits: [
        "Improved health outcomes",
        "Better health awareness",
        "Reduced health risks",
        "Enhanced quality of life"
      ],
      targetAudience: "All community members with focus on women and children",
      duration: "Ongoing health support services"
    },
    {
      id: 5,
      icon: BookOpen,
      title: "Educational Support Programs",
      subtitle: "Knowledge is Power",
      description: "Educational initiatives supporting academic achievement and literacy development across all age groups.",
      features: [
        "Scholarship programs",
        "Tutoring services",
        "Adult literacy classes",
        "Educational resource provision",
        "School support initiatives"
      ],
      benefits: [
        "Improved academic performance",
        "Increased literacy rates",
        "Better educational opportunities",
        "Reduced school dropout rates"
      ],
      targetAudience: "Students and adults seeking educational support",
      duration: "Academic year-based programs"
    },
    {
      id: 6,
      icon: Megaphone,
      title: "Community Mobilization",
      subtitle: "Uniting for Change",
      description: "Grassroots mobilization services to organize communities around important social and development issues.",
      features: [
        "Community organizing",
        "Awareness campaigns",
        "Stakeholder engagement",
        "Resource mobilization",
        "Advocacy coordination"
      ],
      benefits: [
        "Stronger community bonds",
        "Collective action capability",
        "Increased civic participation",
        "Sustainable development"
      ],
      targetAudience: "Community leaders and active citizens",
      duration: "Project-based mobilization"
    }
  ];

  const ActiveIcon = services[activeService].icon;

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with understanding your specific needs and challenges."
    },
    {
      step: "02",
      title: "Program Design",
      description: "Custom program development tailored to your requirements and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional execution with continuous monitoring and support."
    },
    {
      step: "04",
      title: "Evaluation & Follow-up",
      description: "Impact assessment and ongoing support to ensure lasting change."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3B175D]/10 to-[#E58E2F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3B175D] mb-6">
            Comprehensive Community Empowerment Services
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From youth development to rights advocacy, we provide holistic services 
            that address the diverse needs of our community in Garissa and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#3B175D] text-white font-semibold rounded-lg hover:bg-[#3B175D]/90 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a
              href="#services-overview"
              className="inline-flex items-center px-8 py-4 border-2 border-[#E58E2F] text-[#E58E2F] font-semibold rounded-lg hover:bg-[#E58E2F] hover:text-white transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section
        id="services-overview"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['services-overview'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive services across six key areas to ensure 
              holistic community development and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setActiveService(index)}
              >
                <div className="w-16 h-16 bg-[#E58E2F]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#E58E2F]/20 transition-colors">
                  <service.icon className="h-8 w-8 text-[#E58E2F]" />
                </div>
                
                <h3 className="text-xl font-bold text-[#3B175D] mb-2">
                  {service.title}
                </h3>
                
                <p className="text-[#E58E2F] font-semibold text-sm mb-3">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center text-[#3B175D] font-medium text-sm group-hover:text-[#E58E2F] transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section
        id="service-details"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['service-details'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Service Navigation */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeService === index
                        ? 'bg-[#3B175D] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#3B175D]/10 hover:text-[#3B175D]'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Service Details */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Service Information */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#E58E2F]/10 rounded-lg flex items-center justify-center mr-4">
                      <ActiveIcon className="h-6 w-6 text-[#E58E2F]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#3B175D]">
                        {services[activeService].title}
                      </h3>
                      <p className="text-[#E58E2F] font-semibold">
                        {services[activeService].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    {services[activeService].description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#3B175D] mb-3">Target Audience</h4>
                      <p className="text-gray-600 text-sm">
                        {services[activeService].targetAudience}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[#3B175D] mb-3">Duration</h4>
                      <p className="text-gray-600 text-sm">
                        {services[activeService].duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features and Benefits */}
                <div>
                  <div className="mb-8">
                    <h4 className="font-bold text-[#3B175D] mb-4">What We Offer</h4>
                    <ul className="space-y-2">
                      {services[activeService].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#E58E2F] flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#3B175D] mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {services[activeService].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="h-5 w-5 text-[#E58E2F] flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-[#E58E2F] text-white font-semibold rounded-lg hover:bg-[#E58E2F]/90 transition-all duration-300"
                    >
                      Request This Service
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="our-process"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['our-process'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
              How We Work
            </span>
            
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Our Service Process
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure every service we provide 
              delivers maximum impact and lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-[#E58E2F]/20 z-0"></div>
                )}
                
                {/* Step Content */}
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-[#3B175D] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#3B175D] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section
        id="impact-stats"
        data-animate
        className={`py-20 bg-[#3B175D] text-white transition-all duration-1000 ${
          isVisible['impact-stats'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Service Impact
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Since our founding, we've made significant strides in community empowerment 
              through our comprehensive service offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Individuals Served", icon: Users },
              { number: "15+", label: "Active Programs", icon: Star },
              { number: "6", label: "Service Areas", icon: Target },
              { number: "100%", label: "Community Focused", icon: Heart }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#E58E2F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#E58E2F]" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section
        id="service-areas"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['service-areas'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#3B175D] mb-6">
                Where We Serve
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Our services are primarily focused on Garissa County, with expanding 
                reach to neighboring communities. We believe in grassroots impact 
                that starts locally and grows regionally.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#E58E2F] rounded-full mr-3"></div>
                  <span className="text-gray-700">Garissa Town (Primary Hub)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#3B175D] rounded-full mr-3"></div>
                  <span className="text-gray-700">Rural Garissa Communities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">Neighboring Counties (Planned)</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="font-bold text-[#3B175D] mb-4">Service Delivery Methods</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">On-site Services</h4>
                    <p className="text-sm text-gray-600">Direct community engagement and face-to-face programs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Outreach Programs</h4>
                    <p className="text-sm text-gray-600">Mobile services reaching remote communities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3B175D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-500">Service Area Map</p>
                  <p className="text-sm text-gray-400 mt-1">Add map showing Garissa service areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['testimonials'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been transformed through our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Community Member",
                role: "Youth Program Participant",
                testimonial: "The leadership training program completely changed my perspective on what I can achieve. I now lead initiatives in my community with confidence."
              },
              {
                name: "Local Leader",
                role: "Community Organizer",
                testimonial: "The advocacy work has brought real change to our area. We've seen a significant reduction in harmful practices and increased awareness of rights."
              },
              {
                name: "Program Beneficiary",
                role: "Talent Development Program",
                testimonial: "They helped me discover and develop my artistic talents. Now I have opportunities I never thought possible for someone from my background."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#3B175D] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3B175D]">{testimonial.name}</h4>
                    <p className="text-sm text-[#E58E2F]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;