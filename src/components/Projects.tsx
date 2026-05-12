import { useState } from "react";
import { ExternalLink, Github, X, ZoomIn, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RAILFUN",
    description: "Aplikasi Multimedia on Demand berbasis ChatBot sebagai hiburan pelanggan kereta api.",
    tech: ["Flutter", "Dart", "Docker"],
    image: "/assets/projects/railfun.png",
    category: "Aplikasi",
    github: "https://github.com/galaxiana04/railfun", 
  },
  {
    title: "SIPMAS",
    description: "Sistem Informasi Penelitian dan Pengabdian Masyarakat berbasis Laravel untuk manajemen data perguruan tinggi.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/assets/projects/sipmas.png",
    category: "Web",
    github: "#", 
    demo: "#"
  },
  {
    title: "AR Edukasi",
    description: "Pengenalan hewan melalui suara, gambar, dan deskripsi berbasis Augmented Reality (AR).",
    tech: ["C#", "Unity", "Vuforia"],
    image: "/assets/projects/AR-Crow.jpg",
    category: "Aplikasi",
  },
  {
    title: "UI/UX Linesvpay",
    description: "Perancangan antarmuka aplikasi pembayaran digital V-Pay dengan fokus pada kemudahan transaksi.",
    tech: ["Figma", "UI/UX"],
    image: "/assets/projects/desainlinesvpay.png",
    category: "Desain",
  },
  {
    title: "KAI Access Redesign",
    description: "Redesain antarmuka aplikasi KAI Access agar lebih modern, clean, dan ramah pengguna.",
    tech: ["Figma", "UI/UX"],
    image: "/assets/projects/desainkaiaccess.png",
    category: "Desain",
    github: "https://www.figma.com/design/hZ98v2TBg9eYPIDj9mH30n/Project_MenambahkanDesain?node-id=0-1&p=f&t=mNPEkL5hUF4JhzAJ-0",
  },
  {
    title: "Website Portfolio",
    description: "Showcase portfolio pribadi dengan animasi modern menggunakan Next.js dan Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "Framer"],
    image: "/assets/projects/portofolio.png",
    category: "Web",
    github: "https://github.com/galaxiana04/porto-riza-sukma.git",
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter kategori unik dari data proyek yang ada
  const categories = ["Semua", "Web", "Aplikasi", "Desain"];

  const filteredProjects = activeFilter === "Semua" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
              "Turning complex problems into elegant digital solutions."
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          {/* Filter Bar */}
          <div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === cat 
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30" 
                  : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-card transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Thumbnail Container */}
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover - Tetap menggunakan gelap agar tombol putih terlihat kontras */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px]">
                    <button 
                      onClick={() => setSelectedImage(project.image)}
                      className="p-3 bg-white/20 hover:bg-primary text-white rounded-full transition-colors backdrop-blur-md"
                    >
                      <ZoomIn className="w-6 h-6 text-white" />
                    </button>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/20 hover:bg-primary text-white rounded-lg transition-colors backdrop-blur-md">
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg transition-colors font-bold text-xs flex items-center gap-1 shadow-md">
                          <ExternalLink size={16} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-md border border-border text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground bg-muted/50 border border-border/50 px-2 py-1 rounded">
                        <Code2 size={10} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors bg-card/50 p-2 rounded-full">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl animate-in zoom-in duration-300 border border-border"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;