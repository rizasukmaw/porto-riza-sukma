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
  const [selectedCert, setSelectedCert] = useState(null);
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
    <section id="certificates" className="py-24 bg-[#020617] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent italic">
            Certificates & Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Koleksi sertifikasi profesional, pelatihan teknologi, dan pengalaman organisasi yang telah saya tempuh.
          </p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* TAB FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                activeTab === cat 
                ? "bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20" 
                : "border-slate-800 text-slate-400 hover:border-sky-500/50 hover:text-sky-400"
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
                  <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-3 whitespace-nowrap">
                    <Filter className="w-5 h-5 text-sky-500" />
                    {category}
                  </h3>
                  <div className="h-[1px] w-full bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {items.map((cert, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedCert(cert)}
                      className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 cursor-pointer flex flex-col"
                    >
                      {/* Rasio Sertifikat A4 (1.41:1) */}
                      <div className="aspect-[1.41/1] relative overflow-hidden bg-slate-800">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="p-3 bg-sky-500 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                           <Award className="h-6 w-6 text-sky-400 drop-shadow-md" />
                        </div>
                      </div>

                      <div className="p-5 flex-grow border-t border-slate-800">
                        <h4 className="text-sm font-bold leading-tight mb-2 group-hover:text-sky-400 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-medium mb-1 uppercase tracking-wider">
                          {cert.issuer}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono tracking-tighter">
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
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          />
          
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row max-h-[90vh]">
            {/* Close Button Mobile */}
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors md:hidden"
              onClick={() => setSelectedCert(null)}
            >
              <X size={20} />
            </button>

            {/* Left: Certificate Preview */}
            <div className="md:w-2/3 bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Right: Info Panel */}
            <div className="md:w-1/3 p-8 flex flex-col justify-between bg-slate-900">
              <div>
                <div className="flex justify-between items-start mb-8 hidden md:flex">
                  <Award className="h-10 w-10 text-sky-500" />
                  <button onClick={() => setSelectedCert(null)} className="text-slate-500 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {selectedCert.title}
                </h4>
                <div className="h-1 w-12 bg-sky-500 rounded-full mb-8" />
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">Issuer / Institution</p>
                    <p className="text-slate-200 text-lg font-semibold">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">Date of Achievement</p>
                    <p className="text-slate-200 text-lg font-mono tracking-tighter">{selectedCert.date}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open(selectedCert.image, '_blank')}
                className="mt-12 w-full flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 text-white py-4 rounded-2xl transition-all font-bold shadow-lg shadow-sky-600/20 active:scale-95"
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