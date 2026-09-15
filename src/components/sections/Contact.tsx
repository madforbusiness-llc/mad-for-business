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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
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
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3">Nous contacter</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Prêt à donner vie à vos projets ?
            </h3>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Contactez-nous pour échanger sur vos besoins, obtenir un devis, ou simplement discuter d'une opportunité de collaboration.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent shrink-0 border border-white/10">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">M.A.D for Business</h4>
                  <p className="text-muted-foreground text-sm">Single Member-Managed Limited Liability Company</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent shrink-0 border border-white/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Basé au</h4>
                  <p className="text-muted-foreground text-sm">Maroc</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent shrink-0 border border-white/10">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:contact@madforbusiness.com" className="text-muted-foreground text-sm hover:text-brand-accent transition-colors">
                    contact@madforbusiness.com
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
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white">Message envoyé !</h4>
                <p className="text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
                <Button variant="outline" className="mt-4 border-white/20 text-white" onClick={() => setSubmitted(false)}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Nom complet</label>
                    <Input id="name" required placeholder="Votre nom" className="bg-black/20 border-white/10 text-white focus-visible:ring-brand-accent" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Adresse email</label>
                    <Input id="email" type="email" required placeholder="vous@exemple.com" className="bg-black/20 border-white/10 text-white focus-visible:ring-brand-accent" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/80">Sujet</label>
                  <Input id="subject" required placeholder="Sujet de votre demande" className="bg-black/20 border-white/10 text-white focus-visible:ring-brand-accent" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <Textarea id="message" required placeholder="Comment pouvons-nous vous aider ?" className="min-h-[150px] bg-black/20 border-white/10 text-white focus-visible:ring-brand-accent" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white h-12">
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
