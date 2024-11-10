import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ExternalLink, CheckCircle2, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    phone: '',
    email: '',
    website: '',
    revenue: '',
    source: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Let Netlify handle the form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      setShowSuccess(true);
      form.reset();
      setFormData({
        fullName: '',
        jobTitle: '',
        companyName: '',
        phone: '',
        email: '',
        website: '',
        revenue: '',
        source: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#146EB4] text-white placeholder-gray-400";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1";

  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#146EB4] to-[#2D8FD9] bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ecommerce presence? Let's discuss how we can help your brand reach its full potential.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: <Mail className="h-6 w-6 text-[#146EB4]" />,
                title: "Email Us",
                subtitle: "Our team typically responds within 24 hours",
                content: "support@obsidiandist.com",
                href: "mailto:support@obsidiandist.com"
              },
              {
                icon: <Phone className="h-6 w-6 text-[#146EB4]" />,
                title: "Call Us",
                subtitle: "Available Monday-Friday, 9am-6pm EST",
                content: "(551) 314-1142",
                href: "tel:+15513141142"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg hover:from-[#146EB4]/10 hover:to-gray-900 transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-[#146EB4]/10 group-hover:bg-[#146EB4]/20 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#146EB4] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.subtitle}</p>
                    <a 
                      href={item.href} 
                      className="text-[#146EB4] hover:text-[#2D8FD9] font-medium mt-1 inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      {item.content}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="w-full h-[400px] rounded-lg overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-4"
            >
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.8734938544584!2d-74.9285!3d39.8875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ce56f6b8c7f7%3A0x1c1d8f16bb7b4b1a!2s525%20NJ-73%2C%20Marlton%2C%20NJ%2008053!5e0!3m2!1sen!2sus!4v1645564857695!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-white text-sm">
                    525 Route 73 North, Suite 104<br />
                    Marlton, NJ 08053
                  </p>
                  <div className="flex gap-2 mt-2">
                    <a 
                      href="https://www.google.com/maps?ll=39.8875,-74.9285&z=16&t=m&hl=en&gl=US&mapclient=embed&q=525+NJ-73+Marlton,+NJ+08053" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#146EB4] hover:text-[#2D8FD9]"
                    >
                      View in Maps
                    </a>
                    <span className="text-gray-500">|</span>
                    <a 
                      href="https://www.google.com/maps?ll=39.8875,-74.9285&z=16&t=k&hl=en&gl=US&mapclient=embed&q=525+NJ-73+Marlton,+NJ+08053" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#146EB4] hover:text-[#2D8FD9]"
                    >
                      Satellite View
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl w-full text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="mb-6 inline-block"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowSuccess(false)}
                      className="px-6 py-3 bg-[#146EB4] text-white rounded-lg hover:bg-[#2D8FD9] transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className={`bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-xl space-y-6 ${showSuccess ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            >
              {/* Netlify Forms hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className={labelClasses}>Job Title *</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className={labelClasses}>Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>Company Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="website" className={labelClasses}>Website/Marketplace Links</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="https://"
                />
              </div>

              <div>
                <label htmlFor="revenue" className={labelClasses}>Annual E-commerce Revenue *</label>
                <select
                  id="revenue"
                  name="revenue"
                  required
                  value={formData.revenue}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Revenue Range</option>
                  <option value="<100k">Less than $100,000</option>
                  <option value="100k-1m">$100,000 - $1,000,000</option>
                  <option value="1m-5m">$1,000,000 - $10,000,000</option>
                  <option value="50m-100m">$50M - $100M</option>
                  <option value=">100m">Over $100M</option>
                </select>
              </div>

              <div>
                <label htmlFor="source" className={labelClasses}>How did you hear about us?</label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Tell us about your brand and goals..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-[#146EB4] text-white rounded-lg hover:bg-[#2D8FD9] transition-colors duration-300 font-medium"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;