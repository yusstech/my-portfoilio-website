/* global Intl */
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

function WordPressMaintenance() {
  // WhatsApp number with Nigerian country code (234) and without leading zero
  const whatsappNumber = '2347037942851';
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Function to categorize features with more specific categories
  const categorizeFeatures = (features) => {
    const categories = {
      maintenance: {
        title: 'Premium Maintenance',
        icon: '🛠️',
        features: []
      },
      ecommerce: {
        title: 'Advanced E-commerce',
        icon: '🛍️',
        features: []
      },
      support: {
        title: 'Business Support',
        icon: '💬',
        features: []
      },
      limitations: {
        title: 'Limitations',
        icon: 'ℹ️',
        features: []
      }
    };

    features.forEach(feature => {
      if (feature.toLowerCase().includes('plugin') || 
          feature.toLowerCase().includes('theme') || 
          feature.toLowerCase().includes('security') || 
          feature.toLowerCase().includes('hosting') ||
          feature.toLowerCase().includes('optimization') ||
          feature.toLowerCase().includes('backup') ||
          feature.toLowerCase().includes('caching') ||
          feature.toLowerCase().includes('database')) {
        categories.maintenance.features.push(feature);
      } else if (feature.toLowerCase().includes('woocommerce') || 
                 feature.toLowerCase().includes('payment') || 
                 feature.toLowerCase().includes('inventory') || 
                 feature.toLowerCase().includes('product') ||
                 feature.toLowerCase().includes('cart') ||
                 feature.toLowerCase().includes('order') ||
                 feature.toLowerCase().includes('conversion') ||
                 feature.toLowerCase().includes('seo') ||
                 feature.toLowerCase().includes('analytics') ||
                 feature.toLowerCase().includes('marketing')) {
        categories.ecommerce.features.push(feature);
      } else if (feature.toLowerCase().includes('support') || 
                 feature.toLowerCase().includes('response') || 
                 feature.toLowerCase().includes('update') || 
                 feature.toLowerCase().includes('consultation') ||
                 feature.toLowerCase().includes('audit') ||
                 feature.toLowerCase().includes('emergency')) {
        categories.support.features.push(feature);
      } else {
        categories.limitations.features.push(feature);
      }
    });

    return categories;
  };

  const [services] = useState([
    {
      id: 1,
      name: 'Essential Web Service',
      price: 200000,
      description: 'Perfect for small websites that need basic maintenance and security.',
      features: [
        // Maintenance
        'Quarterly plugin updates (critical security only)',
        'Theme updates (when absolutely necessary)',
        'Basic uptime monitoring',
        'Minimal security scanning (monthly)',
        'Basic shared hosting + domain renewal',
        // E-commerce
        'Basic site functionality check (quarterly)',
        'Essential payment gateway status check',
        'Manual backup (quarterly)',
        // Support
        'Email support only (72-hour response time)',
        'Emergency support for site-down issues only',
        // Limitations
        'No performance optimization',
        'No SEO maintenance',
        'No regular backups',
        'No phone support',
        'Additional charges for content changes'
      ],
      recommended: false
    },
    {
      id: 2,
      name: 'Basic Web Service',
      price: 300000,
      description: 'Ideal for growing businesses needing regular maintenance and basic optimization.',
      features: [
        // Core Maintenance
        'Monthly plugin updates (security patches)',
        'Theme updates when available',
        'Basic website speed optimization',
        'Essential security monitoring',
        'Improved shared hosting + domain renewal',
        // E-commerce
        'Monthly WooCommerce functionality checks',
        'Payment gateway status monitoring',
        'Simple inventory backup (monthly)',
        // Support
        'Email support (48-hour response time)',
        '1 minor content update per month'
      ],
      recommended: false
    },
    {
      id: 3,
      name: 'Standard Web Service',
      price: 400000,
      description: 'Comprehensive maintenance and optimization for established businesses.',
      features: [
        // Enhanced Maintenance
        'Bi-weekly plugin updates + compatibility testing',
        'Theme updates with customization preservation',
        'Advanced speed optimization',
        'Comprehensive security suite',
        'Premium hosting + domain renewal',
        // E-commerce Plus
        'Product catalog optimization',
        'Order processing system maintenance',
        'Weekly inventory/order backups',
        'Basic SEO maintenance',
        'Shopping cart abandonment setup'
      ],
      recommended: true
    },
    {
      id: 4,
      name: 'Business Web Service',
      price: 500000,
      description: 'Premium maintenance and optimization for businesses requiring maximum performance and support.',
      features: [
        // Premium Maintenance
        'Weekly plugin updates + staging site testing',
        'Custom theme modifications and updates',
        'Performance optimization (advanced caching, database optimization)',
        'Enterprise-level security (advanced threat detection, daily backups)',
        'Business hosting (dedicated resources) + domain + SSL renewal',
        // Advanced E-commerce
        'Conversion rate optimization tweaks',
        'Advanced SEO optimization (product schema, site structure)',
        'Email marketing integration maintenance',
        'Customer review system optimization',
        'Automated backup system (daily)',
        'Basic Google Analytics and conversion tracking setup',
        // Business Support
        'Priority support (same-day response)',
        'Unlimited minor content updates',
        'Monthly strategy consultation call',
        'Quarterly website audit and recommendations',
        'Emergency support for critical issues'
      ],
      recommended: false
    }
  ]);

  // Format price in Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Generate WhatsApp message for each plan
  const getWhatsAppMessage = (service) => {
    const message = `Hello! I'm interested in your ${service.name} plan (${formatPrice(service.price)}/year) for WordPress maintenance services. Could you please provide more information?`;
    return encodeURIComponent(message);
  };

  // Generate WhatsApp URL
  const getWhatsAppUrl = (service) => {
    return `https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage(service)}`;
  };

  // Function to render feature category with improved styling
  const renderFeatureCategory = (category) => {
    if (!category.features.length) return null;

    const categoryStyles = {
      maintenance: 'border-l-4 border-[#d3e97a] bg-[#d3e97a]/5',
      ecommerce: 'border-l-4 border-[#4CAF50] bg-[#4CAF50]/5',
      support: 'border-l-4 border-[#2196F3] bg-[#2196F3]/5',
      limitations: 'border-l-4 border-[#FF9800] bg-[#FF9800]/5'
    };

    const categoryKey = Object.keys(categoryStyles).find(key => 
      category.title.toLowerCase().includes(key)
    ) || 'maintenance';

    return (
      <div className={`mb-6 p-4 rounded-lg ${categoryStyles[categoryKey]}`}>
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2">{category.icon}</span>
          <h4 className="font-semibold text-white text-lg">{category.title}</h4>
        </div>
        <ul className="space-y-3">
          {category.features.map((feature, index) => (
            <li key={index} className="flex items-start text-[#C7C7C7] text-sm">
              <svg className="w-4 h-4 text-current mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0a0a0a] pt-20">
        {/* Hero Section */}
        <div className="relative bg-[#111111] py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d3e97a]/10 to-transparent blur-lg"></div>
            <div className="h-40 w-40 rounded-full bg-[#d3e97a]/10 absolute -top-10 -left-10 blur-3xl"></div>
            <div className="h-60 w-60 rounded-full bg-[#d3e97a]/5 absolute -bottom-20 -right-20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                WordPress <span className="text-[#d3e97a]">Maintenance</span>
              </h1>
              <p className="text-[#C7C7C7] text-lg mb-8">
                Keep your WordPress website secure, fast, and up-to-date with our professional maintenance services.
                Choose the perfect plan for your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {services.map((service) => {
                const categories = categorizeFeatures(service.features);
                const isExpanded = expandedCards[service.id];

                return (
                  <div 
                    key={service.id}
                    className={`bg-[#111111] border rounded-lg p-8 transition-all duration-300 ${
                      service.recommended 
                        ? 'border-[#d3e97a] shadow-lg shadow-[#d3e97a]/10' 
                        : 'border-[#222222] hover:border-[#d3e97a]'
                    }`}
                  >
                    {service.recommended && (
                      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#d3e97a] text-black text-sm font-semibold">
                        Recommended
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <div className="text-3xl font-bold text-white mb-6">
                      {formatPrice(service.price)}
                      <span className="text-[#C7C7C7] text-lg font-normal">/year</span>
                    </div>
                    
                    <p className="text-[#C7C7C7] mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      {Object.values(categories).map((category) => (
                        category.features.length > 0 && renderFeatureCategory(category)
                      ))}
                    </div>

                    {!isExpanded && (
                      <button
                        onClick={() => toggleCard(service.id)}
                        className="w-full py-2 mb-4 text-[#d3e97a] hover:text-[#c8de62] transition-colors flex items-center justify-center gap-2"
                      >
                        Show More Details
                        <FaChevronDown className="w-4 h-4" />
                      </button>
                    )}

                    {isExpanded && (
                      <button
                        onClick={() => toggleCard(service.id)}
                        className="w-full py-2 mb-4 text-[#d3e97a] hover:text-[#c8de62] transition-colors flex items-center justify-center gap-2"
                      >
                        Show Less
                        <FaChevronUp className="w-4 h-4" />
                      </button>
                    )}
                    
                    <a 
                      href={getWhatsAppUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                        service.recommended
                          ? 'bg-[#d3e97a] text-black hover:bg-[#c8de62]'
                          : 'bg-[#222222] text-white hover:bg-[#333333]'
                      }`}
                    >
                      Contact on WhatsApp
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WordPressMaintenance; 