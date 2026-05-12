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
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30 transition-colors duration-300"
    >
      {/* 1. Background Decor: Abstract Glows & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* PERUBAHAN: Menambahkan pb-24 (padding bottom) agar ada jarak aman dengan ikon Chevron di bawah */}
      <div className="container mx-auto px-4 relative z-10 text-center pb-24">
       
        {/* Name Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-foreground"
          data-aos="zoom-out-up"
        >
          Halo, Saya{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Riza Sukma
            </span>
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
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
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
            A specialized <span className="text-primary border-b-2 border-primary/20">{typedText}</span>
            <span className="w-1 h-8 bg-primary ml-1 inline-block animate-pulse align-middle" />
          </p>
        </div>

        {/* Short Bio */}
        <p
          className="text-muted-foreground text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Membangun solusi digital yang menggabungkan presisi <span className="text-foreground font-semibold">Data Analysis</span> dengan keindahan <span className="text-foreground font-semibold">UI/UX Design</span>.
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
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 w-full sm:w-auto text-base font-bold group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Mari Bicara
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={viewCV}
            className="h-14 px-8 border-border bg-card/50 text-foreground hover:bg-accent hover:text-accent-foreground rounded-2xl transition-all w-full sm:w-auto text-base font-bold flex gap-2 shadow-sm"
          >
            <FileText className="h-5 w-5" />
            Unduh CV
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* PERUBAHAN: Menambahkan z-20 dan mengubah bottom-10 menjadi bottom-8 agar posisinya pas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors cursor-pointer hidden sm:flex z-20">
        <button onClick={() => scrollToSection("about")} className="p-2 rounded-full hover:bg-muted/50 transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;