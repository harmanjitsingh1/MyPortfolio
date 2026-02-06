import React from 'react';
import { Terminal, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-surface border-t border-brand-border pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center">
                <Terminal className="text-brand-primary w-4 h-4" />
              </div>
              <span className="font-bold text-white">Hex.Dev</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Crafting robust, scalable, and beautiful web experiences for forward-thinking companies.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About'].map(link => (
                <li key={link}><a href="#" className="text-brand-muted hover:text-brand-primary text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <li key={link}><a href="#" className="text-brand-muted hover:text-brand-primary text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-brand-dark border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-sm">© {new Date().getFullYear()} Hex.Dev. All rights reserved.</p>
          <p className="text-brand-muted text-sm">Designed & Built in India with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;