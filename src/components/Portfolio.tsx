import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Smartphone, Palette, Bot } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Semua", icon: null },
    { id: "web", label: "Web", icon: <Code2 size={14} /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone size={14} /> },
    { id: "design", label: "Design", icon: <Palette size={14} /> },
    { id: "ai", label: "AI & Data", icon: <Bot size={14} /> },
  ];

  const projects = [
    {
      id: 1,
      title: "RailFun - Entertainment on Train",
      description: "Aplikasi multimedia on-demand berbasis chatbot untuk layanan hiburan di kereta api.",
      image: "/assets/projects/railfun.png",
      category: "mobile",
      tags: ["Flutter", "Firebase", "NLP"],
      github: "https://github.com/galaxiana04/railfun",
      demo: "#",
    },
    {
      id: 2,
      title: "V-Pay E-Wallet Interface",
      description: "Desain antarmuka dompet digital modern dengan fokus pada kemudahan transaksi pengguna.",
      image: "/images/DesainLinesvpay.jpg",
      category: "design",
      tags: ["Figma", "UI/UX", "Prototyping"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Wedding Invitation Online",
      description: "Platform undangan pernikahan digital responsif dengan fitur RSVP dan manajemen tamu.",
      image: "/assets/projects/wedding.png",
      category: "web",
      tags: ["Laravel", "Blade", "Bootstrap"],
      github: "#",
      demo: "https://undangan-riza.com",
    },
    {
      id: 4,
      title: "Data Analysis Dashboard",
      description: "Visualisasi data interaktif untuk analisis tren penjualan menggunakan Python.",
      image: "/assets/projects/data-analyst.png",
      category: "ai",
      tags: ["Python", "Pandas", "Matplotlib"],
      github: "https://github.com/galaxiana04/data-analysis",
      demo: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio-section" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Karya <span className="text-sky-500">Terbaru</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Menampilkan perpaduan antara fungsionalitas kode dan estetika desain dalam setiap proyek.
          </p>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full px-6 py-5 h-auto transition-all duration-300 flex gap-2 items-center ${
                activeFilter === filter.id 
                ? "bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/20" 
                : "hover:border-sky-500 hover:text-sky-500"
              }`}
            >
              {filter.icon}
              <span className="font-semibold">{filter.label}</span>
            </Button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-sky-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-sky-500/5 flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs font-bold bg-sky-500 px-3 py-1 rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold py-1 px-2.5 bg-muted rounded-md text-muted-foreground uppercase border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-sky-500 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold bg-sky-500/10 text-sky-600 px-4 py-2 rounded-xl hover:bg-sky-500 hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground italic">Belum ada proyek di kategori ini. Sedang dalam pengembangan! 🚀</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;