import { useState, useEffect } from "react";
import { Award, X, ZoomIn, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificatesData = {
  "Sertifikat Pencapaian": [
    {
      title: "Peserta Kamadiksi Awards",
      issuer: "Politeknik Negeri Semarang",
      date: "2024",
      image: "/assets/Pencapaian/PesertaKamadiksiAwards.jpg",
    },
    {
      title: "Magang dan Studi Independen Bersertifikat",
      issuer: "Kemendikbud",
      date: "2024",
      image: "/assets/Pencapaian/MSIB-7.png",
    },
  ],
  Sertifikasi: [
    {
      title: "MTCA",
      issuer: "MikroTik",
      date: "2025",
      image: "/assets/Pelatihan/MTCA.png",
    },
    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "2024",
      image: "/assets/Pelatihan/Database Programming with SQL.jpg",
    },
    {
      title: "Database Design",
      issuer: "Oracle Academy",
      date: "2024",
      image: "/assets/Pelatihan/DatabaseDesign.jpg",
    },
    {
      title: "Sharing Technology",
      issuer: "HME Polines",
      date: "2024",
      image: "/assets/Pelatihan/Sharing Technology.jpg",
    },
    {
      title: "JMP",
      issuer: "BNSP",
      date: "2024",
      image: "/assets/Pelatihan/JMP.jpg",
    },
    {
      title: "UI/UX Fundamental",
      issuer: "MySkill",
      date: "2024",
      image: "/assets/Pelatihan/UX fundamental.jpg",
    },
    {
      title: "LMOM",
      issuer: "HME Polines",
      date: "2022",
      image: "/assets/Pelatihan/LMOM.jpg",
    },
  ],
  "Sertifikat Panitia": [
    {
      title: "Pekan Literasi",
      issuer: "HME Polines",
      date: "2024",
      image: "/assets/Panitia/PekanLiterasi.jpg",
    },
    {
      title: "LMOM",
      issuer: "HME Polines",
      date: "2024",
      image: "/assets/Panitia/LMOM.jpg",
    },
    {
      title: "Campus Fair",
      issuer: "SMAN 1 Babadan",
      date: "2023",
      image: "/assets/Panitia/CampusFair.jpg",
    },
    {
      title: "ECC 2023",
      issuer: "HME Polines",
      date: "2023",
      image: "/assets/Panitia/ECC2023.jpg",
    },
    {
      title: "Seminar Nasional",
      issuer: "HME Polines",
      date: "2023",
      image: "/assets/Panitia/Semnas.jpg",
    },
    {
      title: "FKBSE",
      issuer: "HME Polines",
      date: "2023",
      image: "/assets/Panitia/FKBSE.jpg",
    },
  ],
  "Sertifikat Pengalaman": [
    {
      title: "Sekretaris Jenderal BPM Polines",
      issuer: "BPM",
      date: "2024",
      image: "/assets/Pengalaman/SekjendBPM.jpg",
    },
    {
      title: "Staf Bidang Kaderisasi",
      issuer: "Himpunan Mahasiswa Elektro",
      date: "2023",
      image: "/assets/Pengalaman/Sertifikat HME.png",
    },
    {
      title: "Engineeering Intern",
      issuer: "PT Rekaindo Global Jasa",
      date: "2024",
      image: "/assets/Pengalaman/engineering_intern.png",
    },
  ],
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; issuer: string; date: string; image: string } | null>(null);
  const [activeTab, setActiveTab] = useState("Semua");

  const categories = ["Semua", ...Object.keys(certificatesData)];

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 bg-background text-foreground overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent italic">
            Certificates & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Koleksi sertifikasi profesional, pelatihan teknologi, dan pengalaman organisasi yang telah saya tempuh.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* TAB FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                activeTab === cat 
                ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" 
                : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LISTING CONTENT */}
        <div className="space-y-20">
          {Object.entries(certificatesData).map(([category, items], i) => {
            // Logika sembunyikan jika tab tidak sesuai
            if (activeTab !== "Semua" && activeTab !== category) return null;

            return (
              <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 whitespace-nowrap">
                    <Filter className="w-5 h-5 text-primary" />
                    {category}
                  </h3>
                  <div className="h-[1px] w-full bg-border" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {items.map((cert, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedCert(cert)}
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 cursor-pointer flex flex-col"
                    >
                      {/* Rasio Sertifikat A4 (1.41:1) */}
                      <div className="aspect-[1.41/1] relative overflow-hidden bg-muted">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        {/* Overlay hover tetap gelap agar ikon putih terlihat jelas */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="p-3 bg-primary rounded-full scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                            <ZoomIn className="h-6 w-6 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                           <Award className="h-6 w-6 text-primary drop-shadow-md" />
                        </div>
                      </div>

                      <div className="p-5 flex-grow border-t border-border">
                        <h4 className="text-sm font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground font-medium mb-1 uppercase tracking-wider">
                          {cert.issuer}
                        </p>
                        <p className="text-[10px] text-muted-foreground/70 font-mono tracking-tighter">
                          Issued {cert.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODERN LIGHTBOX MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          />
          
          <div className="relative w-full max-w-5xl bg-card rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col md:flex-row max-h-[90vh] z-10">
            {/* Close Button Mobile */}
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-muted/80 hover:bg-destructive text-foreground hover:text-destructive-foreground rounded-full transition-colors md:hidden backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <X size={20} />
            </button>

            {/* Left: Certificate Preview */}
            <div className="md:w-2/3 bg-muted/30 flex items-center justify-center p-4 overflow-hidden relative">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Right: Info Panel */}
            <div className="md:w-1/3 p-8 flex flex-col justify-between bg-card border-t md:border-t-0 md:border-l border-border">
              <div>
                <div className="flex justify-between items-start mb-8 hidden md:flex">
                  <Award className="h-10 w-10 text-primary" />
                  <button onClick={() => setSelectedCert(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                  {selectedCert.title}
                </h4>
                <div className="h-1 w-12 bg-primary rounded-full mb-8" />
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mb-1">Issuer / Institution</p>
                    <p className="text-foreground text-lg font-semibold">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black mb-1">Date of Achievement</p>
                    <p className="text-foreground text-lg font-mono tracking-tighter">{selectedCert.date}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open(selectedCert.image, '_blank')}
                className="mt-12 w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-2xl transition-all font-bold shadow-lg shadow-primary/20 active:scale-95"
              >
                <ExternalLink size={18} />
                Buka Gambar Penuh
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;