
import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_GROUPS, EDUCATIONS, CERTIFICATIONS } from './constants';
import AIAssistant from './components/AIAssistant';
import SkillVisualizer from './components/SkillVisualizer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-sky-400">
            GB<span className="text-white">.portfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Transforming Data into <span className="text-gradient">Intelligent Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Hi, I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. 
              A {PERSONAL_INFO.title} specialized in building scalable AI/ML pipelines and modern data architectures at enterprises like JPMorgan Chase.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-300">
                <i className="fa-solid fa-location-dot text-sky-500"></i>
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <i className="fa-solid fa-envelope text-sky-500"></i>
                {PERSONAL_INFO.email}
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative glass-card rounded-3xl p-8 border border-white/10 overflow-hidden min-h-[400px] flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <i className="fa-solid fa-bolt text-yellow-400"></i>
                Technical Proficiency
              </h3>
              <SkillVisualizer />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
              <p className="text-slate-400">Experience working at the intersection of Finance and Technology.</p>
            </div>
          </div>
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                {/* Timeline Line (mobile) */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-sky-500 md:hidden"></div>
                
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="text-slate-500 font-medium md:text-right pt-1">
                    {exp.period}
                  </div>
                  <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-sky-500/30 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-sky-400 transition-colors">{exp.role}</h3>
                        <p className="text-sky-500 font-medium">{exp.company} • {exp.location}</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl text-slate-400">
                        <i className={`fa-solid ${idx === 0 ? 'fa-building-columns' : 'fa-microchip'}`}></i>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                          <span className="text-sky-500 pt-1.5"><i className="fa-solid fa-circle text-[6px]"></i></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                <h4 className="text-sky-400 font-bold mb-4 uppercase tracking-wider text-xs">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 rounded-md text-sm text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <i className="fa-solid fa-graduation-cap text-sky-500"></i>
              Education
            </h2>
            <div className="space-y-6">
              {EDUCATIONS.map(edu => (
                <div key={edu.degree} className="p-6 bg-slate-800/50 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-xl">{edu.degree}</h4>
                  <p className="text-slate-400">{edu.institution}</p>
                  <p className="text-slate-500 text-sm">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <i className="fa-solid fa-certificate text-sky-500"></i>
              Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.name} className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">{cert.name}</h4>
                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer/Contact */}
        <footer id="contact" className="mt-20 pt-20 border-t border-white/5 text-center space-y-8">
          <h2 className="text-4xl font-bold">Let's build something <span className="text-gradient">smarter</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Currently looking for Junior AI/ML Engineer roles. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="flex justify-center gap-6 text-3xl">
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="text-slate-500 hover:text-sky-500 transition-colors">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-sky-500 transition-colors">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Greeshma B. Built with React, Tailwind & Gemini AI.
          </div>
        </footer>
      </main>

      <AIAssistant />
    </div>
  );
};

export default App;
