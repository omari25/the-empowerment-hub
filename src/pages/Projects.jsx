import React, { useState, useEffect } from 'react';
import { Shield, Heart, Users, Calendar, MapPin, Target, TrendingUp, Award, ArrowRight, Filter, Search, Eye, ExternalLink} from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "Campaign Against GBV and FGM",
      category: "advocacy",
      status: "completed",
      date: "May 2025",
      location: "Garissa County",
      description: "A comprehensive awareness campaign targeting Gender-Based Violence and Female Genital Mutilation in our communities.",
      fullDescription: "This groundbreaking campaign addressed critical human rights violations affecting women and girls in Garissa County. Through community dialogues, educational workshops, and stakeholder engagement, we successfully raised awareness about the harmful effects of GBV and FGM while promoting alternative cultural practices that respect human dignity.",
      objectives: [
        "Raise awareness about the dangers of GBV and FGM",
        "Engage traditional leaders in dialogue",
        "Provide support resources for survivors",
        "Promote alternative cultural practices"
      ],
      impact: [
        "Reached over 1,000 community members",
        "Trained 50+ community advocates",
        "Established 3 support groups",
        "Reduced reported cases by 30% in target areas"
      ],
      partners: ["Local Chiefs", "Women Groups", "Health Centers", "Religious Leaders"],
      image: "gbv-campaign.jpg"
    },
    {
      id: 2,
      title: "Pride of Kids Initiative",
      category: "social",
      status: "ongoing",
      date: "June 2025 - Present",
      location: "Local Orphanages",
      description: "Supporting special needs children in orphanages through dedicated care programs and resource provision.",
      fullDescription: "The Pride of Kids Initiative focuses on providing specialized care and support for children with special needs in local orphanages. This comprehensive program includes educational support, medical care coordination, skill development activities, and emotional support services designed to help these vulnerable children reach their full potential.",
      objectives: [
        "Provide specialized care for special needs children",
        "Ensure access to quality education and healthcare",
        "Develop life skills and independence",
        "Create supportive community networks"
      ],
      impact: [
        "Supporting 25+ special needs children",
        "Provided educational materials and tools",
        "Facilitated medical consultations",
        "Trained caregivers in specialized care techniques"
      ],
      partners: ["Local Orphanages", "Healthcare Providers", "Special Education Teachers", "Volunteer Caregivers"],
      image: "pride-kids.jpg"
    },
    {
      id: 3,
      title: "Period Poverty Campaign",
      category: "health",
      status: "completed",
      date: "July 2025",
      location: "Schools in Garissa",
      description: "Addressing period poverty among young girls to ensure continued education and dignity.",
      fullDescription: "This vital campaign tackled the issue of period poverty that was preventing many girls from attending school regularly. Through the distribution of sanitary products, education about menstrual health, and the establishment of support systems, we worked to ensure that menstruation doesn't become a barrier to education and personal dignity.",
      objectives: [
        "Distribute free sanitary products to girls in need",
        "Educate about menstrual health and hygiene",
        "Establish sustainable support systems in schools",
        "Reduce school absenteeism due to menstruation"
      ],
      impact: [
        "Reached 500+ girls across 10 schools",
        "Distributed 2,000+ sanitary product packages",
        "Conducted 20+ educational sessions",
        "Improved school attendance by 40% in target schools"
      ],
      partners: ["Local Schools", "Parent Associations", "Health Workers", "Women's Groups"],
      image: "period-poverty.jpg"
    },
    {
      id: 4,
      title: "Youth Leadership Development Program",
      category: "development",
      status: "ongoing",
      date: "April 2025 - Present",
      location: "Garissa Youth Centers",
      description: "Comprehensive leadership training program for young people in Garissa County.",
      fullDescription: "Our flagship youth development program focuses on building the next generation of community leaders. Through intensive workshops, mentorship opportunities, and practical leadership experiences, young people develop the skills, confidence, and networks needed to create positive change in their communities.",
      objectives: [
        "Develop leadership skills among youth",
        "Create peer mentorship networks",
        "Provide practical leadership experience",
        "Foster civic engagement and community participation"
      ],
      impact: [
        "Trained 150+ young leaders",
        "Established 5 youth leadership groups",
        "Facilitated 30+ community projects",
        "Created employment opportunities for 20+ youth"
      ],
      partners: ["Youth Centers", "Local Government", "Business Community", "Educational Institutions"],
      image: "youth-leadership.jpg"
    },
    {
      id: 5,
      title: "Community Health Awareness Drive",
      category: "health",
      status: "planned",
      date: "October 2025",
      location: "Rural Garissa",
      description: "Comprehensive health education and screening program for underserved rural communities.",
      fullDescription: "This upcoming initiative aims to address healthcare gaps in rural Garissa through mobile health clinics, health education sessions, and community health worker training. The program will focus on preventive care, early detection of common diseases, and building sustainable healthcare knowledge within communities.",
      objectives: [
        "Provide free health screenings in rural areas",
        "Educate communities about preventive healthcare",
        "Train community health workers",
        "Establish health monitoring systems"
      ],
      impact: [
        "Target: 1,000+ rural residents",
        "Goal: Train 30 community health workers",
        "Establish 5 health monitoring posts",
        "Improve health literacy by 50%"
      ],
      partners: ["Rural Health Centers", "Community Health Workers", "Mobile Health Units", "Traditional Healers"],
      image: "health-awareness.jpg"
    },
    {
      id: 6,
      title: "Talent Showcase Festival",
      category: "development",
      status: "planned",
      date: "December 2025",
      location: "Garissa Cultural Center",
      description: "Annual festival celebrating and showcasing diverse talents from across Garissa County.",
      fullDescription: "The Talent Showcase Festival is designed to identify, celebrate, and provide platforms for talented individuals across various disciplines including arts, sports, technology, and entrepreneurship. This annual event will serve as a launching pad for emerging talents while celebrating the rich cultural diversity of our community.",
      objectives: [
        "Identify and showcase local talents",
        "Provide performance and exhibition platforms",
        "Connect talents with opportunities",
        "Celebrate cultural diversity and creativity"
      ],
      impact: [
        "Target: 200+ participating talents",
        "Expected audience: 2,000+ people",
        "Create networking opportunities",
        "Establish talent development pathways"
      ],
      partners: ["Cultural Organizations", "Local Artists", "Business Sponsors", "Media Partners"],
      image: "talent-festival.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'advocacy', name: 'Rights Advocacy', count: projects.filter(p => p.category === 'advocacy').length },
    { id: 'health', name: 'Health & Wellness', count: projects.filter(p => p.category === 'health').length },
    { id: 'social', name: 'Social Impact', count: projects.filter(p => p.category === 'social').length },
    { id: 'development', name: 'Development', count: projects.filter(p => p.category === 'development').length }
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    ongoing: 'bg-blue-100 text-blue-800',
    planned: 'bg-yellow-100 text-yellow-800'
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    planned: projects.filter(p => p.status === 'planned').length
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3B175D]/10 to-[#E58E2F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
            Our Projects
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3B175D] mb-6">
            Transforming Communities Through Action
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From advocacy campaigns to development programs, explore the diverse projects 
            that are making a real difference in Garissa County and beyond.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3B175D] mb-1">{projectStats.total}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{projectStats.completed}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{projectStats.ongoing}</div>
              <div className="text-sm text-gray-600">Ongoing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{projectStats.planned}</div>
              <div className="text-sm text-gray-600">Planned</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section
        id="filter-section"
        data-animate
        className={`py-12 bg-white border-b border-gray-200 transition-all duration-1000 ${
          isVisible['filter-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center text-gray-600 mr-4">
                <Filter className="h-4 w-4 mr-2" />
                Filter by:
              </span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-[#3B175D] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#3B175D]/10 hover:text-[#3B175D]'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B175D]/20 focus:border-[#3B175D] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        id="projects-grid"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['projects-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#3B175D] rounded-full flex items-center justify-center mx-auto mb-2">
                          {project.category === 'advocacy' && <Shield className="h-8 w-8 text-white" />}
                          {project.category === 'health' && <Heart className="h-8 w-8 text-white" />}
                          {project.category === 'social' && <Users className="h-8 w-8 text-white" />}
                          {project.category === 'development' && <TrendingUp className="h-8 w-8 text-white" />}
                        </div>
                        <p className="text-sm text-gray-500">Project Image Placeholder</p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <div className="absolute inset-0 bg-[#3B175D]/0 group-hover:bg-[#3B175D]/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 bg-white text-[#3B175D] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center"
                      >
                        View Details
                        <Eye className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{project.date}</span>
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#3B175D] mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center text-[#E58E2F] font-semibold hover:text-[#E58E2F]/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#3B175D]">{selectedProject.title}</h2>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{selectedProject.date}</span>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{selectedProject.location}</span>
                  <span className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[selectedProject.status]}`}>
                    {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ExternalLink className="h-6 w-6 text-gray-500 transform rotate-45" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="w-full h-64 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3B175D] rounded-full flex items-center justify-center mx-auto mb-2">
                    {selectedProject.category === 'advocacy' && <Shield className="h-8 w-8 text-white" />}
                    {selectedProject.category === 'health' && <Heart className="h-8 w-8 text-white" />}
                    {selectedProject.category === 'social' && <Users className="h-8 w-8 text-white" />}
                    {selectedProject.category === 'development' && <TrendingUp className="h-8 w-8 text-white" />}
                  </div>
                  <p className="text-gray-500">{selectedProject.title} Image</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#3B175D] mb-4">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Objectives */}
                <div>
                  <h3 className="text-lg font-bold text-[#3B175D] mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-[#E58E2F]" />
                    Objectives
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#E58E2F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-lg font-bold text-[#3B175D] mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-[#E58E2F]" />
                    Impact & Results
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.impact.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Partners */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#3B175D] mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#E58E2F]" />
                  Project Partners
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.partners.map((partner, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#3B175D] text-white font-semibold rounded-lg hover:bg-[#3B175D]/90 transition-colors"
                >
                  Get Involved in Similar Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-[#E58E2F] text-[#E58E2F] font-semibold rounded-lg hover:bg-[#E58E2F] hover:text-white transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impact Summary */}
      <section
        id="impact-summary"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['impact-summary'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#E58E2F]/10 text-[#E58E2F] rounded-full text-sm font-semibold mb-6">
              Our Collective Impact
            </span>
            
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              Measuring Our Success
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through our diverse projects, we've created meaningful change across 
              multiple sectors in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "2,000+",
                label: "Lives Directly Impacted",
                description: "Individuals reached through our various projects"
              },
              {
                icon: Target,
                number: "15+",
                label: "Communities Served",
                description: "Different areas where we've implemented projects"
              },
              {
                icon: Award,
                number: "85%",
                label: "Success Rate",
                description: "Projects meeting or exceeding their goals"
              },
              {
                icon: Heart,
                number: "50+",
                label: "Local Partners",
                description: "Organizations and groups we collaborate with"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#E58E2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#E58E2F]" />
                </div>
                <h3 className="text-3xl font-bold text-[#3B175D] mb-2">{stat.number}</h3>
                <p className="font-semibold text-gray-800 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section
        id="future-projects"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible['future-projects'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B175D] mb-4">
              What's Next?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're constantly developing new initiatives to address emerging 
              community needs and expand our impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#E58E2F]/10 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-[#E58E2F]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3B175D]">Upcoming Projects</h3>
                  <p className="text-gray-600">Q4 2025 - Q1 2026</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E58E2F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Digital Literacy Program</h4>
                    <p className="text-sm text-gray-600">Teaching essential computer skills to youth and adults</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E58E2F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Women's Economic Empowerment</h4>
                    <p className="text-sm text-gray-600">Business skills training and microfinance support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#E58E2F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Environmental Conservation Initiative</h4>
                    <p className="text-sm text-gray-600">Tree planting and environmental awareness campaigns</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3B175D]/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-[#3B175D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3B175D]">Long-term Goals</h3>
                  <p className="text-gray-600">2026 and Beyond</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3B175D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Regional Expansion</h4>
                    <p className="text-sm text-gray-600">Extending our programs to neighboring counties</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3B175D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Youth Leadership Academy</h4>
                    <p className="text-sm text-gray-600">Establishing a permanent training institution</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3B175D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Policy Advocacy Hub</h4>
                    <p className="text-sm text-gray-600">Influencing policy changes at county and national levels</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-[#3B175D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Next Project?
          </h2>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you want to volunteer, partner with us, or suggest a new project, 
            we're always looking for passionate individuals and organizations to join our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#E58E2F] text-white font-semibold rounded-lg hover:bg-[#E58E2F]/90 transition-all duration-300"
            >
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#3B175D] transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm max-w-lg mx-auto">
            <h3 className="font-bold mb-2">Have a Project Idea?</h3>
            <p className="text-sm opacity-90">
              We're always open to new project suggestions that align with our mission. 
              Contact us to discuss how we can bring your idea to life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;