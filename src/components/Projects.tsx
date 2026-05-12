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
    github: "#", // Tambahkan link jika sudah di-upload ke GitHub
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
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter kategori unik dari data proyek yang ada
  const categories = ["Semua", "Web", "Aplikasi", "Desain"];

  const filteredProjects = activeFilter === "Semua" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#020617] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg italic">
              "Turning complex problems into elegant digital solutions."
            </p>
            <div className="w-20 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />
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
                  ? "bg-sky-500 border-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]" 
                  : "border-slate-800 text-slate-400 hover:border-sky-500/50 hover:text-sky-400"
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
                className="group relative bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Thumbnail Container */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <button 
                      onClick={() => setSelectedImage(project.image)}
                      className="p-3 bg-white/10 hover:bg-sky-500 rounded-full transition-colors backdrop-blur-md"
                    >
                      <ZoomIn className="w-6 h-6 text-white" />
                    </button>
                    <div className="flex gap-3">
                      <a href={project.github} className="p-2 bg-slate-800 hover:bg-sky-600 rounded-lg transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="p-2 bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors text-white font-bold text-xs flex items-center gap-1">
                        <ExternalLink size={16} /> Live
                      </a>
                    </div>
                  </div>
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-sky-500/20 backdrop-blur-md border border-sky-500/30 text-sky-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
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
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;