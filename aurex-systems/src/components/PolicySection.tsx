import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  ShieldAlert, 
  Lightbulb, 
  Users, 
  Lock, 
  FlaskConical, 
  History, 
  Eye 
} from 'lucide-react';

const policies = [
  {
    id: 1,
    title: "Mission Statement",
    icon: <Target className="text-neon-blue" />,
    content: "Aurex Systems is committed to designing advanced artificial intelligence systems that empower humanity, enhance decision-making, and contribute positively to the future of technology and society."
  },
  {
    id: 2,
    title: "Ethical AI Commitment",
    icon: <ShieldAlert className="text-neon-purple" />,
    content: "Aurex Systems follows strict ethical guidelines in the development of AI technologies. We commit to prioritizing human safety, preventing misuse, ensuring transparency, avoiding bias, and respecting human autonomy."
  },
  {
    id: 3,
    title: "Innovation Policy",
    icon: <Lightbulb className="text-neon-blue" />,
    content: "Innovation at Aurex Systems must serve a meaningful purpose. All projects must solve real-world problems, improve efficiency, be designed with long-term sustainability, and be tested responsibly."
  },
  {
    id: 4,
    title: "Human-Centric Technology",
    icon: <Users className="text-neon-purple" />,
    content: "Technology created by Aurex Systems must enhance human capability, not replace human value. Our AI systems are designed to assist, support better decisions, increase productivity, and expand creativity."
  },
  {
    id: 5,
    title: "Data Privacy & Security",
    icon: <Lock className="text-neon-blue" />,
    content: "We respect user privacy as a fundamental right. We commit to protecting user data with strong security, never selling personal data, and providing transparency and control to our users."
  },
  {
    id: 6,
    title: "Research & Development",
    icon: <FlaskConical className="text-neon-purple" />,
    content: "All AI research must follow responsible development standards, avoid harmful experimentation, include safety evaluation phases, and consider long-term societal impact."
  },
  {
    id: 7,
    title: "Future Responsibility",
    icon: <History className="text-neon-blue" />,
    content: "As we grow, we recognize the responsibility of powerful technology. We commit to continuous safety upgrades, ongoing ethical evaluation, and keeping humanity at the center of innovation."
  },
  {
    id: 8,
    title: "Founder’s Vision",
    icon: <Eye className="text-neon-purple" />,
    content: "Founded by Siddharth Roakde, Aurex Systems stands on the belief that intelligence should elevate humanity. Every system reflects a commitment to progress, responsibility, and positive impact."
  }
];

export const PolicySection: React.FC = () => {
  return (
    <section id="policy" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-display text-5xl font-black mb-4 tracking-tight">
          COMPANY <span className="text-neon-purple">POLICY</span> & PRINCIPLES
        </h2>
        <p className="text-white/40 tracking-widest uppercase text-sm">The Foundation of Our Innovation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {policies.map((policy, index) => (
          <motion.div
            key={policy.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-neon-blue/30 transition-all group"
          >
            <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:glow-blue transition-all">
              {policy.icon}
            </div>
            <h3 className="font-display text-lg font-bold mb-4 tracking-wide group-hover:text-neon-blue transition-colors">
              {policy.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {policy.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
