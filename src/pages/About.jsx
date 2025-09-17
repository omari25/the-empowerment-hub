import React, { useState, useEffect } from 'react';
import { Heart, Users, Target, Award, MapPin, Calendar,Quote,CheckCircle,ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';
import theTeam from '../assets/real-boys.jpg'
import ubah from '../assets/ubah.jpg'

const About = () => {
  const [isVisible, setIsVisible] = useState({});

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

  const values = [
    {
      icon: Heart,
      title: "Your Voice Matters",
      description: "We believe every individual has the right to be heard and their opinions valued in community decisions."
    },
    {
      icon: Users,
      title: "Voice for the Voiceless",
      description: "Standing up for those who cannot advocate for themselves, ensuring no one is left behind."
    },
    {
      icon: Target,
      title: "Gender Equality",
      description: "Promoting equal rights and opportunities for all genders while fighting discriminatory practices."
    },
    {
      icon: Award,
      title: "Talent Development",
      description: "Identifying and nurturing talents within our community to help individuals reach their potential."
    }
  ];

  const timeline = [
    {
      date: "April 2025",
      title: "Foundation Established",
      description: "Ubah Abdullahi founded the Empowerment Hub as a youth-led initiative in Garissa."
    },
    {
      date: "May 2025",
      title: "First Campaign Launch",
      description: "Launched our campaign against Gender-Based Violence (GBV) and Female Genital Mutilation (FGM)."
    },
    {
      date: "June 2025",
      title: "Pride of Kids Initiative",
      description: "Started supporting special needs children in local orphanages through dedicated programs."
    },
    {
      date: "July 2025",
      title: "Period Poverty Campaign",
      description: "Initiated our campaign to address period poverty among young girls in Garissa."
    }
  ];

  const achievements = [
    "Successfully launched 3 major community campaigns",
    "Partnered with local CBOs and NGOs for greater impact",
    "Established strong community presence in Garissa",
    "Created sustainable programs for youth development",
    "Built a network of youth advocates and volunteers"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3B175D]/10 to-[#E58E2F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
            About Us
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3B175D] mb-6">
            Empowering Youth, Transforming Communities
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Founded in April 2025, the Empowerment Hub is a youth-led initiative dedicated to 
            addressing the needs and interests of young people living in Garissa, Kenya.
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Founded April 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Garissa, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="our-story"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['our-story'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#3B175D] mb-6">
                Our Story Begins with Purpose
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                The Empowerment Hub was born from a vision to create meaningful change in Garissa. 
                Founded by Ubah Abdullahi, a young, ambitious healthcare worker who was raised in 
                the heart of Garissa, our organization represents the voices and dreams of young 
                people who refuse to accept the status quo.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Ubah's journey as a member of the Adopt a School Foundation and her work with 
                various Community-Based Organizations like Boresha Jamii Initiative and Pride Kids 
                shaped her understanding of community needs and the power of collective action.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Today, we stand as a beacon of hope, running diverse programs from grassroots 
                community initiatives to individual empowerment projects, always guided by our 
                core belief that "your voice matters."
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#E58E2F] text-white font-semibold rounded-lg hover:bg-[#E58E2F]/90 transition-all duration-300"
              >
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="w-full h-96 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={theTeam}
                    alt="Community Impact"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        id="founder-section"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['founder-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driven by passion and guided by purpose, Ubah Abdullahi leads our mission 
              to empower youth and transform communities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-1">
              <div className="w-full h-80 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={ubah}
                  alt="Ubah Abdullahi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Founder Bio */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Quote className="h-8 w-8 text-[#E58E2F] mb-4" />
                
                <h3 className="text-2xl font-bold text-[#3B175D] mb-4">
                  Ubah Abdullahi
                </h3>
                
                <p className="text-[#E58E2F] font-semibold mb-4">
                  Founder & Executive Director
                </p>
                
                <p className="text-gray-600 mb-4">
                  A young, ambitious healthcare worker raised in Garissa, Ubah has dedicated her 
                  life to serving her community. As a member of the Adopt a School Foundation, 
                  an NGO fighting for women's rights in Kenya, she brings extensive experience 
                  in advocacy and community development.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Her previous work with Community-Based Organizations including Boresha Jamii 
                  Initiative and Pride Kids has equipped her with deep insights into community 
                  needs and effective grassroots mobilization strategies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#3B175D] mb-2">Background</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Healthcare Professional</li>
                      <li>• Women's Rights Advocate</li>
                      <li>• Community Organizer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B175D] mb-2">Affiliations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Adopt a School Foundation</li>
                      <li>• Boresha Jamii Initiative</li>
                      <li>• Pride Kids</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section
        id="our-values"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['our-values'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
              Our Core Values
            </span>
            
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              What We Stand For
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide every decision we make and every action we take in service 
              of our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#3B175D]/5 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#E58E2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[#E58E2F]" />
                </div>
                
                <h3 className="text-lg font-bold text-[#3B175D] mb-3">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['timeline'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Our Journey So Far
            </h2>
            
            <p className="text-lg text-gray-600">
              From inception to impact, here's how we've grown and evolved since our founding.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#E58E2F]/20"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E58E2F] rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="inline-block px-3 py-1 bg-[#3B175D]/10 text-[#3B175D] text-sm font-semibold rounded-full mb-2">
                      {item.date}
                    </span>
                    
                    <h3 className="text-lg font-bold text-[#3B175D] mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['achievements'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#3B175D] mb-6">
                Our Achievements
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                In our short time since founding, we've made significant strides in 
                community empowerment and youth development. Here are some of our 
                key accomplishments.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-[#E58E2F] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3B175D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-500">Achievement Gallery</p>
                  <p className="text-sm text-gray-400 mt-1">Add photos of your accomplishments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;