import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Hand, 
  BrainCircuit, 
  MessageSquareCode, 
  Code2, 
  ChevronDown,
  Globe,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { InteractiveCard } from './components/InteractiveCard';
import { PolicySection } from './components/PolicySection';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black selection:bg-neon-blue/30">
      <ParticleBackground />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="font-display text-xl font-black tracking-tighter text-glow-blue">
          AUREX<span className="text-neon-purple">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase opacity-70">
          <a href="#vision" className="hover:text-neon-blue transition-colors">Vision</a>
          <a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a>
          <a href="#innovations" className="hover:text-neon-blue transition-colors">Innovations</a>
          <a href="#policy" className="hover:text-neon-blue transition-colors">Policy</a>
        </div>
        <a 
          href="mailto:siddharthpower27@gmail.com"
          className="px-5 py-2 rounded-full glass text-xs font-bold tracking-widest uppercase hover:glow-blue transition-all"
        >
          Contact
        </a>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              AUREX SYSTEMS
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-6"
            />
            <p className="font-display text-xl md:text-3xl font-bold tracking-[0.3em] text-neon-blue uppercase mb-8 text-glow-blue">
              Engineering Intelligent Futures
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12">
              Designing next-generation AI systems to empower humanity and redefine innovation.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a
                href="#vision"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-white text-black font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all"
              >
                Explore Our Vision
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-3xl rounded-full" />
              <div className="relative glass rounded-3xl p-10 glow-blue border-neon-blue/20">
                <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-neon-blue" />
                  Founder & Creator
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shrink-0 glow-purple">
                    <Cpu size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Siddharth Roakde</h3>
                    <p className="text-white/70 leading-relaxed text-lg italic">
                      "His mission is to create powerful, ethical artificial intelligence systems that enhance human capability, improve decision-making, and shape the technological future of society."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              id="vision"
            >
              <h2 className="font-display text-5xl font-black mb-8 tracking-tight">
                OUR <span className="text-neon-purple">VISION</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Aurex Systems is committed to developing advanced AI technologies that benefit humanity, solve complex global challenges, and push the limits of predictive intelligence and human-computer interaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="glass p-6 rounded-2xl border-white/5"
                >
                  <Globe className="text-neon-blue mb-4" />
                  <h4 className="font-bold mb-2">Global Impact</h4>
                  <p className="text-sm text-white/40">Solving worldwide challenges through intelligent systems.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="glass p-6 rounded-2xl border-white/5"
                >
                  <ShieldCheck className="text-neon-purple mb-4" />
                  <h4 className="font-bold mb-2">Ethical AI</h4>
                  <p className="text-sm text-white/40">Built with human values and safety at the core.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE PROJECTS */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl font-black mb-4 tracking-tight">
              CORE <span className="text-neon-blue">PROJECTS</span>
            </h2>
            <p className="text-white/40 tracking-widest uppercase text-sm">Pioneering the next era of interaction</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InteractiveCard 
              title="Controily"
              icon={<Hand />}
              color="blue"
              definition="An AI-powered gesture control system that enables users to control computers and smart devices using natural hand movements, creating seamless and intuitive interaction."
            />
            <InteractiveCard 
              title="Atnos"
              icon={<BrainCircuit />}
              color="purple"
              definition="A predictive intelligence system that analyzes data patterns to forecast possible outcomes across different scenarios, helping users make smarter strategic decisions."
            />
          </div>
        </section>

        {/* MAJOR INNOVATIONS */}
        <section id="innovations" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl font-black mb-4 tracking-tight">
              MAJOR <span className="text-neon-purple">INNOVATIONS</span>
            </h2>
            <p className="text-white/40 tracking-widest uppercase text-sm">Redefining what's possible</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InteractiveCard 
              title="Zenxix"
              icon={<MessageSquareCode />}
              color="purple"
              definition="An advanced conversational AI chatbot built to understand context, adapt to users, and provide intelligent multi-domain assistance."
            />
            <InteractiveCard 
              title="CodePilot"
              icon={<Code2 />}
              color="blue"
              definition="An AI-powered web development platform that helps users design and build websites efficiently using intelligent automation and smart coding support."
            />
          </div>
        </section>

        {/* POLICY SECTION */}
        <PolicySection />

        {/* CTA SECTION */}
        <section className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass rounded-[3rem] p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue" />
            <Zap className="mx-auto text-neon-blue mb-8 animate-pulse" size={48} />
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8">READY FOR THE FUTURE?</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join us in our mission to redefine human potential through the power of intelligent systems.
            </p>
            <motion.a 
              href="mailto:siddharthpower27@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold tracking-widest uppercase glow-purple hover:scale-105 transition-all"
            >
              Get Started
            </motion.a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="font-display text-2xl font-black tracking-tighter text-glow-blue">
                AUREX<span className="text-neon-purple">.</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex space-x-8 text-sm font-medium tracking-widest uppercase opacity-40">
                  <a href="#" className="hover:text-neon-blue transition-colors">Twitter</a>
                  <a href="#" className="hover:text-neon-blue transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-neon-blue transition-colors">GitHub</a>
                </div>
                <a href="mailto:siddharthpower27@gmail.com" className="text-neon-blue hover:text-white transition-colors text-sm font-mono">
                  siddharthpower27@gmail.com
                </a>
              </div>
            </div>
            
            <div className="relative h-[1px] w-full bg-white/5 overflow-hidden mb-12">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
              />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
              <p>Aurex Systems © 2026</p>
              <p className="tracking-widest uppercase font-bold text-xs text-neon-blue">Built for the Future</p>
              <p>Privacy Policy • Terms of Service</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
