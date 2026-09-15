"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Mail, Building2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const formData = new FormData(e.currentTarget);
    // Note: Replace with your actual Web3Forms access key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-900 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Ready to bring your projects to life?
            </h3>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Contact us to discuss your needs, request a quote, or explore a collaboration opportunity.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center text-brand-accent shrink-0 border border-white/10 shadow-inner">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">M.A.D for Business</h4>
                  <p className="text-muted-foreground text-sm">Single Member-Managed Limited Liability Company</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center text-brand-accent shrink-0 border border-white/10 shadow-inner">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Headquarters</h4>
                  <p className="text-muted-foreground text-sm">Northwest Registered Agent Service Inc<br/>30 N Gould St Ste N<br/>Sheridan, WY 82801</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center text-brand-accent shrink-0 border border-white/10 shadow-inner">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:mad.for.buisness@gmail.com" className="text-muted-foreground text-sm hover:text-brand-accent transition-colors">
                    mad.for.buisness@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-800/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                  <Send size={36} />
                </div>
                <h4 className="text-3xl font-bold font-heading text-white">Message Sent!</h4>
                <p className="text-muted-foreground text-lg">We will get back to you as soon as possible.</p>
                <Button variant="outline" className="mt-6 border-white/20 text-white hover:bg-white/5" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-md text-sm">
                    {error}
                  </div>
                )}
                
                <input type="hidden" name="subject" value="New Contact from M.A.D for Business Website" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                    <Input id="name" name="name" required placeholder="John Doe" className="bg-brand-900/50 border-white/10 text-white focus-visible:ring-brand-accent h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-brand-900/50 border-white/10 text-white focus-visible:ring-brand-accent h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <Textarea id="message" name="message" required placeholder="How can we help you?" className="min-h-[160px] bg-brand-900/50 border-white/10 text-white focus-visible:ring-brand-accent resize-y" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white h-12 text-lg font-medium shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
