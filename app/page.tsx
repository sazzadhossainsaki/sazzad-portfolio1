"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const cats = Array.from(new Set(skills.map((s) => s.category)));
const Reveal = ({ children, d = 0 }: { children: React.ReactNode; d?: number }) => (
  <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: d }}>{children}</motion.div>
);

export default function Page() {
  return (
    <>
      <div className="orbs"><i /><i /><i /></div>
      <nav className="nav">
        <b>{profile.name.split(" ")[0]}<span className="dot">.</span></b>
        <div><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      </nav>
      <main>
        <section className="hero">
          <Reveal><span className="pill"><i /> {profile.availability}</span></Reveal>
          <Reveal d={0.1}><h1>{profile.name}</h1></Reveal>
          <Reveal d={0.2}><h2 className="grad">{profile.role}</h2></Reveal>
          <Reveal d={0.3}><p className="lead">{profile.tagline}</p></Reveal>
          <Reveal d={0.4}>
            <div className="row">
              <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={16} /></a>
              <a className="btn" href={`mailto:${profile.email}`}>Contact Me</a>
            </div>
          </Reveal>
        </section>

        <section><Reveal><h3 className="sec">About</h3><p className="about">{profile.about}</p></Reveal></section>

        <section id="skills">
          <Reveal><h3 className="sec">Skills</h3></Reveal>
          <div className="grid">
            {cats.map((c) => (
              <Reveal key={c}>
                <div className="glass">
                  <h4>{c}</h4>
                  {skills.filter((s) => s.category === c).map((s) => (
                    <div key={s.name} className="skill">
                      <div className="sk"><span>{s.name}</span><span>{s.level}%</span></div>
                      <div className="bar"><motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} /></div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects">
          <Reveal><h3 className="sec">Projects</h3></Reveal>
          <div className="grid">
            {projects.map((p, i) => (
              <Reveal key={p.title} d={i * 0.1}>
                <div className="glass card">
                  <small>{p.status}</small>
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  {p.link && <a className="more" href={p.link} target="_blank" rel="noreferrer">View <ArrowUpRight size={14} /></a>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact">
          <Reveal>
            <div className="glass cta">
              <h3>Let&apos;s build something together</h3>
              <div className="row">
                <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name} · {profile.location}</footer>
    </>
  );
}
