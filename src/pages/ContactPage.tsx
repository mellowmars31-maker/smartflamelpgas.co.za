import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you! Average response time: 15 minutes.",
    });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <section className="bg-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch for a free quote or emergency gas service."
          />
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="space-y-6"
          >
            <h3 className="font-display font-800 text-2xl text-foreground mb-2">Send Us a Message</h3>
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "e.g. 069 877 6794" },
              { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block font-display font-bold text-sm uppercase tracking-widest text-foreground mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full border-2 border-border p-4 font-body text-foreground bg-background focus:border-primary outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block font-display font-bold text-sm uppercase tracking-widest text-foreground mb-2">
                Message
              </label>
              <textarea
                placeholder="How can we help you?"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-2 border-border p-4 font-body text-foreground bg-background focus:border-primary outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-display font-bold text-sm uppercase tracking-widest btn-depress w-full justify-center"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-display font-800 text-2xl text-foreground">Get In Touch</h3>

            <div className="space-y-6">
              <a href="tel:0698776794" className="flex items-center gap-4 p-4 industrial-border hover:border-primary transition-colors group">
                <Phone size={24} className="text-primary icon-hover" />
                <div>
                  <p className="font-display font-bold text-foreground">069 877 6794</p>
                  <p className="font-body text-sm text-muted-foreground">Primary Line</p>
                </div>
              </a>
              <a href="tel:0848081332" className="flex items-center gap-4 p-4 industrial-border hover:border-primary transition-colors group">
                <Phone size={24} className="text-primary icon-hover" />
                <div>
                  <p className="font-display font-bold text-foreground">084 808 1332</p>
                  <p className="font-body text-sm text-muted-foreground">Secondary Line</p>
                </div>
              </a>
              <a href="https://wa.me/27698776794" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 industrial-border hover:border-whatsapp transition-colors">
                <MessageCircle size={24} className="text-whatsapp icon-hover" />
                <div>
                  <p className="font-display font-bold text-foreground">WhatsApp</p>
                  <p className="font-body text-sm text-muted-foreground">Chat with us instantly</p>
                </div>
              </a>
              <a href="mailto:smartflamelpgas@gmail.com" className="flex items-center gap-4 p-4 industrial-border hover:border-primary transition-colors">
                <Mail size={24} className="text-primary icon-hover" />
                <div>
                  <p className="font-display font-bold text-foreground">smartflamelpgas@gmail.com</p>
                  <p className="font-body text-sm text-muted-foreground">Email us anytime</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 industrial-border">
                <MapPin size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-foreground">171 Pitts Avenue</p>
                  <p className="font-body text-sm text-muted-foreground">Weavind Park, Pretoria</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="industrial-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8!2d28.22!3d-25.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQzJzE2LjgiUyAyOMKwMTMnMTIuMCJF!5e0!3m2!1sen!2sza!4v1600000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smart Flame Innovation Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
