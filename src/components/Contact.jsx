import { useState, useRef } from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin, FaPaperPlane, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    purpose: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [contactMethod, setContactMethod] = useState('general'); // 'general' or 'consultation'
  const formRef = useRef(null);
  
  // Calendly link
  const calendlyUrl = 'https://calendly.com/yusufmuhammed';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Update purpose when selection changes
  const handlePurposeChange = (purpose) => {
    setContactMethod(purpose);
    
    // If consultation is selected, open Calendly in a new tab
    if (purpose === 'consultation') {
      window.open(calendlyUrl, '_blank');
      // Keep general selected in the UI since we're redirecting
      setContactMethod('general');
    } else {
      setFormData(prev => ({
        ...prev,
        purpose: purpose
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // EmailJS implementation with provided Service ID
    try {
      await emailjs.sendForm(
        'service_3ne1gtq',
        'template_0r1aa2q',
        formRef.current,
        'tB0UhK5iEfBCivY94'
      );
      
      setSubmitStatus({
        message: 'Message sent successfully! I\'ll get back to you soon.',
        isError: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        purpose: 'general'
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        message: 'Failed to send message. Please try again later.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ message: '', isError: false });
      }, 5000);
    }
  };
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-16 px-4 md:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="divider-horizontal mx-auto"></div>
          <p className="text-[#C7C7C7] mt-4 max-w-2xl mx-auto">Ready to bring your project to life? I&apos;m here to help turn your ideas into reality. Send a message or book a consultation to discuss your needs.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-[#111111] p-8 rounded-lg border border-[#222222] h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-[#C7C7C7] mb-8">
                Have a project in mind or just want to say hi? Feel free to reach out! 
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="contact-icon">
                    <FaEnvelope className="text-[#d3e97a]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-[#C7C7C7]">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="contact-icon">
                    <FaTwitter className="text-[#d3e97a]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">X (Twitter)</h4>
                    <a 
                      href="https://twitter.com/yusstech01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#C7C7C7] hover:text-[#d3e97a] transition-colors duration-300 cursor-pointer"
                    >
                      @yusstech01
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="contact-icon">
                    <FaLinkedin className="text-[#d3e97a]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/yusufmuhammed" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#C7C7C7] hover:text-[#d3e97a] transition-colors duration-300 cursor-pointer"
                    >
                      /in/yusufmuhammed
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Consultation Info */}
              <div className="mt-10 p-5 bg-[#1a1a1a] rounded-lg border border-[#333333]">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <FaCalendarAlt className="text-[#d3e97a]" />
                  Consultation Hours
                </h4>
                <p className="text-[#C7C7C7] mt-2 text-sm">
                  Available Monday to Friday<br />
                  9:00 AM - 5:00 PM (EST)
                </p>
                <p className="text-[#C7C7C7] mt-4 text-sm">
                  Book a 30-minute consultation to discuss your project needs and how we can work together.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#111111] p-8 rounded-lg border border-[#222222]">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-md ${submitStatus.isError ? 'bg-red-900/20 text-red-400 border border-red-800' : 'bg-green-900/20 text-green-400 border border-green-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              {/* Purpose Selection */}
              <div className="mb-8">
                <label className="block text-white mb-3">What can I help you with?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-lg border ${contactMethod === 'general' ? 'border-[#d3e97a] bg-[#1a1a1a]' : 'border-[#333333] bg-[#151515]'} cursor-pointer transition-all duration-200`}
                    onClick={() => handlePurposeChange('general')}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${contactMethod === 'general' ? 'bg-[#d3e97a]' : 'border border-[#555555]'}`}></div>
                      <span className="text-white font-medium">General Inquiry</span>
                    </div>
                    <p className="text-[#C7C7C7] text-sm mt-2">Questions, feedback, or just saying hello</p>
                  </div>
                  <div
                    className={`p-4 rounded-lg border border-[#333333] bg-[#151515] cursor-pointer hover:border-[#d3e97a] hover:bg-[#1a1a1a]/50 transition-all duration-200`}
                    onClick={() => handlePurposeChange('consultation')}
                  >
                    <div className="flex items-center gap-2 justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-[#555555]"></div>
                        <span className="text-white font-medium">Book a Consultation</span>
                      </div>
                      <FaExternalLinkAlt className="text-[#d3e97a] text-sm" />
                    </div>
                    <p className="text-[#C7C7C7] text-sm mt-2">Schedule a call to discuss your project</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="purpose" value="general" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-[#1a1a1a] border ${errors.name ? 'border-red-500' : 'border-[#333333]'} text-white rounded-md p-3 w-full focus:outline-none focus:border-[#d3e97a]`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-[#333333]'} text-white rounded-md p-3 w-full focus:outline-none focus:border-[#d3e97a]`}
                      placeholder="Your Email"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-[#1a1a1a] border ${errors.subject ? 'border-red-500' : 'border-[#333333]'} text-white rounded-md p-3 w-full focus:outline-none focus:border-[#d3e97a]`}
                    placeholder="Subject"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`bg-[#1a1a1a] border ${errors.message ? 'border-red-500' : 'border-[#333333]'} text-white rounded-md p-3 w-full focus:outline-none focus:border-[#d3e97a]`}
                    placeholder="Your Message"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-btn hover:bg-[#c8de62] transition duration-300 flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FaPaperPlane />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;