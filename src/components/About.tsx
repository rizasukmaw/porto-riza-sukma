import React from "react";

// Pisahkan data teks agar kode utama lebih bersih dan mudah diperbarui
const listFocusStrength = [
  {
    icon: "💡",
    title: "Fokus dan Kekuatan Lintas Bidang",
    points: [
      { key: "Mobile Development", text: "Selalu adaptif terhadap teknologi terbaru, berfokus pada antarmuka yang mulus dan ramah pengguna." },
      { key: "Front End Web Development", text: "Mengembangkan tampilan web yang responsif, interaktif, dan modern menggunakan teknologi seperti React dan Tailwind CSS." },
      { key: "Manajemen & Administrasi", text: "Penulisan kode yang terstruktur, dokumentasi rapi, serta manajemen proyek yang efisien." },
    ],
  },
  {
    icon: "🎯",
    title: "Tujuan & Komitmen",
    points: [
      { key: "Ketepatan Waktu", text: "Berkomitmen menyelesaikan setiap proyek sesuai jadwal yang telah disepakati." },
      { key: "Pengembangan Diri", text: "Terus belajar dan beradaptasi dengan perkembangan teknologi terkini untuk menghasilkan solusi terbaik." },
    ],
  },
];

const About = () => {
  return (
    // Menggunakan tag <section> yang semantik, ID untuk navigasi, dan padding responsif.
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Opsional: Tambahkan aksen latar belakang halus */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section dengan Aksen Garis Bawah */}
          <div className="mb-16 sm:mb-20 text-center" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-4">
              Tentang Saya
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 sm:gap-16 items-center">
            {/* Gambar Profil */}
            <div data-aos="fade-right" className="relative group flex justify-center lg:justify-start">
              {/* Efek Glow Latar - Diperhalus */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:opacity-100 transition-opacity duration-500" />

              {/* Wadah Animasi Floating */}
              <div className="relative animate-float">
                <img
                  src="/assets/profile.png" // Pastikan jalur ini benar
                  alt="Riza Sukmawardani"
                  // Gunakan aspek rasio untuk performa pemuatan gambar yang lebih baik (Layout Shift)
                  width={384} // max-w-sm
                  height={384}
                  loading="lazy" // Tambahkan lazy loading untuk gambar di luar viewport
                  className="rounded-2xl shadow-xl shadow-cyan-500/10 w-full max-w-sm hover:scale-[1.03] transition-transform duration-500 backdrop-blur-sm ring-4 ring-white/10 dark:ring-black/10"
                  style={{
                    // filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))", // Lebih efisien menggunakan ring class Tailwind
                    opacity: 0.98,
                  }}
                />
              </div>
            </div>

            {/* Deskripsi Tentang Saya */}
            <div data-aos="fade-left" className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug tracking-tight">
                Bersemangat menciptakan solusi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  mobile yang adaptif, berbasis data
                </span>
                , serta berfokus pada desain yang bersih dan pengalaman pengguna yang optimal.
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Halo, saya <b>Riza Sukmawardani</b>, seorang{" "}
                  <b>Mobile Developer</b> dan <b>Front End Web Developer</b> dengan
                  keahlian lintas bidang. Saya bersemangat dalam membangun aplikasi
                  yang tidak hanya intuitif dan elegan, tetapi juga didukung oleh
                  proses yang terstruktur serta keputusan berbasis data.
                </p>

                <p>
                  Perjalanan karier saya memperkaya kemampuan dalam menggabungkan
                  keahlian inti di bidang <b>Mobile Development</b> dengan wawasan
                  dari <b>Front End Web Development</b> dan{" "}
                  <b>Administrasi Proyek</b>. Pendekatan saya selalu berfokus pada
                  kualitas, efisiensi, dan pengembangan berkelanjutan.
                </p>
              </div>

              {/* Daftar Poin - Refactoring ke Loop agar bersih */}
              <div className="grid md:grid-cols-2 gap-8 text-left pt-6 border-t border-border/50">
                {listFocusStrength.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-2.5">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="relative pl-6">
                            {/* Bullet Point Bulat */}
                            <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary" />
                            <b>{point.key}:</b> {point.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;