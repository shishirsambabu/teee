"use client";

import { FadeIn } from "../components/FadeIn";
import { useForm } from "react-hook-form";
import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full pt-32 pb-48">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Let's run the first experiment together.</h1>
              <div className="text-xl text-muted-foreground font-light mb-16 leading-relaxed max-w-md">
                <p>
                  Tell us the one moment in your employee lifecycle you suspect is leaking trust. On a 30-minute call, we'll map it through the Loop live — and you'll leave with a real insight either way.
                </p>
              </div>
              
              <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">Direct Email</h2>
                <a href="mailto:hello@teee.in" className="text-xl font-serif hover:text-primary transition-colors">
                  hello@teee.in
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="bg-[#050505] border border-border p-8 md:p-12">
                {isSuccess ? (
                  <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                    <span className="text-4xl text-primary mb-6">✓</span>
                    <h3 className="text-2xl font-serif mb-4">Message Received</h3>
                    <p className="text-muted-foreground font-light">We will be in touch shortly to schedule a conversation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                      <input 
                        {...register("name", { required: true })}
                        id="name"
                        className="w-full bg-transparent border-0 border-b border-border focus:border-white focus:ring-0 px-0 py-3 text-lg font-light outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Work Email</label>
                      <input 
                        {...register("email", { required: true })}
                        id="email"
                        type="email"
                        className="w-full bg-transparent border-0 border-b border-border focus:border-white focus:ring-0 px-0 py-3 text-lg font-light outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Company</label>
                      <input 
                        {...register("company", { required: true })}
                        id="company"
                        className="w-full bg-transparent border-0 border-b border-border focus:border-white focus:ring-0 px-0 py-3 text-lg font-light outline-none transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">Team Size</label>
                      <select 
                        {...register("teamSize", { required: true })}
                        id="teamSize"
                        defaultValue=""
                        className="w-full bg-transparent border-0 border-b border-border focus:border-white focus:ring-0 px-0 py-3 text-lg font-light outline-none transition-colors [&>option]:bg-black"
                      >
                        <option value="" disabled>Select team size</option>
                        <option value="1-50">1–50</option>
                        <option value="51-200">51–200</option>
                        <option value="201-1000">201–1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">What feels off right now?</label>
                      <textarea 
                        {...register("message", { required: true })}
                        id="message"
                        rows={4}
                        className="w-full bg-transparent border-0 border-b border-border focus:border-white focus:ring-0 px-0 py-3 text-lg font-light outline-none transition-colors resize-none"
                        placeholder="Briefly describe your current challenge..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-primary text-background hover:bg-white transition-colors duration-500 font-bold text-sm tracking-widest uppercase disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Book my EX Diagnostic"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
