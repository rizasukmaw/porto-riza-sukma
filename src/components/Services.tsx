import { Smartphone, Layout, BarChart3, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Membangun aplikasi multiplatform (Android/iOS) menggunakan Flutter & Dart dengan fokus pada performa native dan pengalaman pengguna yang mulus.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-sky-500",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Menciptakan antarmuka web modern, responsif, dan interaktif menggunakan React atau Next.js yang dioptimalkan untuk kecepatan dan SEO.",
    color: "from-purple-500/20 to-blue-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Mengolah dataset kompleks menjadi insight bisnis yang actionable menggunakan Python, Pandas, dan teknik visualisasi data yang informatif.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Merancang alur pengguna yang intuitif dan antarmuka visual yang estetik menggunakan Figma, memastikan produk digital mudah digunakan.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-rose-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Judul Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Layanan <span className="text-sky-500">Keahlian</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Membantu Anda mewujudkan ide digital melalui pendekatan teknis yang terukur dan desain yang berpusat pada manusia.
            </p>
            <div className="w-16 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Kartu Layanan */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 border border-border/60 hover:border-sky-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <service.icon className={`h-7 w-7 ${service.iconColor} group-hover:text-primary transition-colors`} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Decorative Arrow */}
                  <div className="flex justify-end mt-auto">
                    <ArrowUpRight className="text-muted-foreground/30 group-hover:text-sky-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;