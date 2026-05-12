import {
  Code2,
  Braces,
  Palette,
  Database,
  Layers,
  Smartphone,
  PenTool,
  FileSpreadsheet,
  FileText,
  TerminalSquare,
  Globe,
  Cpu
} from "lucide-react";

// Data dipisahkan agar komponen lebih bersih
const skillsData = {
  frontend: {
    title: "Front End Development",
    accent: "cyan",
    items: [
      { name: "HTML", Icon: Code2, color: "from-orange-500 to-orange-600" },
      { name: "CSS", Icon: Palette, color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", Icon: Braces, color: "from-yellow-400 to-yellow-500" },
      { name: "React", Icon: Layers, color: "from-cyan-400 to-cyan-500" },
      { name: "Tailwind CSS", Icon: Palette, color: "from-sky-400 to-sky-500" },
    ]
  },
  mobile: {
    title: "Mobile Development",
    accent: "blue",
    items: [
      { name: "Flutter", Icon: Smartphone, color: "from-sky-500 to-blue-600" },
      { name: "Dart", Icon: Braces, color: "from-blue-400 to-blue-500" },
      { name: "Figma", Icon: Palette, color: "from-purple-400 to-purple-500" },
    ]
  },
  backend: {
    title: "Back End Development",
    accent: "purple",
    items: [
      { name: "PHP", Icon: Globe, color: "from-indigo-400 to-indigo-500" },
      { name: "Laravel", Icon: PenTool, color: "from-red-500 to-red-600" },
      { name: "MySQL", Icon: Database, color: "from-green-500 to-green-600" },
      { name: "API", Icon: TerminalSquare, color: "from-cyan-500 to-teal-500" },
    ]
  },
  tools: {
    title: "Tools & OS",
    accent: "emerald",
    items: [
      { name: "Excel", Icon: FileSpreadsheet, color: "from-green-600 to-green-700" },
      { name: "Word", Icon: FileText, color: "from-blue-600 to-blue-700" },
      { name: "Linux", Icon: Cpu, color: "from-slate-600 to-slate-700" },
    ]
  }
};

const Skills = () => {
  return (
    <section
      id="skills"
      // PERUBAHAN: bg-[#020617] diganti bg-background
      className="py-24 bg-background relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Glows - Disesuaikan dengan warna primary */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-foreground">
              Technical <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            {/* PERUBAHAN: text-slate-400 menjadi text-muted-foreground */}
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kombinasi teknologi modern untuk membangun ekosistem digital yang responsif, stabil, dan berbasis data.
            </p>
          </div>

          {/* Skill Groups */}
          <div className="space-y-24">
            {Object.values(skillsData).map((section, sIdx) => (
              <div key={sIdx} className="space-y-10">
                <div className="flex items-center gap-4" data-aos="fade-right">
                  {/* PERUBAHAN: text-white menjadi text-foreground */}
                  <h3 className={`text-2xl font-bold text-foreground whitespace-nowrap`}>
                    {section.title}
                  </h3>
                  {/* PERUBAHAN: bg-slate-800 menjadi bg-border */}
                  <div className="h-[1px] w-full bg-border" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                  {section.items.map((skill, idx) => (
                    <SkillCard key={idx} skill={skill} index={idx} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable SkillCard with Framer-like hover logic via Tailwind */
const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
  <div
    className="group relative"
    data-aos="zoom-in"
    data-aos-delay={index * 50}
  >
    {/* Animated Background Glow */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200`} />
    
    {/* PERUBAHAN: Menggunakan bg-card, border-border, dan shadow-card */}
    <div className="relative flex flex-col items-center p-6 bg-card border border-border rounded-2xl backdrop-blur-xl hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2 shadow-sm hover:shadow-hover">
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg mb-4 group-hover:rotate-6 transition-transform duration-500`}
      >
        <skill.Icon className="w-8 h-8 text-white" />
      </div>
      
      {/* PERUBAHAN: text-slate-200 menjadi text-foreground */}
      <span className="text-foreground font-bold text-sm sm:text-base text-center group-hover:text-primary transition-colors">
        {skill.name}
      </span>
      
      {/* Decorative Progress Dot */}
      <div className="mt-4 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
      </div>
    </div>
  </div>
);

export default Skills;