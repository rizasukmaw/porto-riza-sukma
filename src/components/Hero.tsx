import { useEffect, useState, useMemo } from "react";
import { Mail, FileText, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  // Menggunakan useMemo agar array tidak dibuat ulang setiap render
  const roles = useMemo(() => [
    "Front End Web Developer",
    "UI/UX Designer",
    "Mobile Developer",
    "Data Analyst",
  ], []);
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const viewCV = () => window.open("/assets/CV/CV_Riza Sukmawardani.pdf", "_blank");
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] selection:bg-sky-500/30"
    >
      {/* 1. Background Decor: Abstract Glows & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge Intro */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs sm:text-sm font-medium mb-8 animate-bounce"
          data-aos="fade-down"
        >
          <Sparkles size={14} />
          <span>Available for New Projects</span>
        </div>

        {/* Name Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white"
          data-aos="zoom-out-up"
        >
          Halo, Saya{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Riza Sukma
            </span>
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-sky-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div
          className="h-10 sm:h-12 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300">
            A specialized <span className="text-sky-400 border-b-2 border-sky-500/20">{typedText}</span>
            <span className="w-1 h-8 bg-sky-500 ml-1 inline-block animate-pulse align-middle" />
          </p>
        </div>

        {/* Short Bio */}
        <p
          className="text-slate-400 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Membangun solusi digital yang menggabungkan presisi <span className="text-white font-medium">Data Analysis</span> dengan keindahan <span className="text-white font-medium">UI/UX Design</span>.
        </p>

        {/* CTA Actions */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="h-14 px-8 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 w-full sm:w-auto text-base font-bold group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Mari Bicara
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={viewCV}
            className="h-14 px-8 border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-sky-500 rounded-2xl transition-all w-full sm:w-auto text-base font-bold flex gap-2"
          >
            <FileText className="h-5 w-5" />
            Unduh CV
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-sky-400 transition-colors cursor-pointer hidden sm:block">
        <button onClick={() => scrollToSection("about")}>
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;