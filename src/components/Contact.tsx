import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  CheckCircle2,
  XCircle,
  MessageSquare,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movkgdbe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Pesan berhasil dikirim! Terima kasih, Riza akan segera membalas 😊",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Terjadi kesalahan. Coba lagi nanti atau hubungi via LinkedIn.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification({ type: null, message: "" }), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/5 via-transparent to-transparent -z-10" />

      {/* Notification Pop-up - Diperhalus Animasi */}
      {notification.type && (
        <div
          className={`fixed bottom-10 right-6 z-[100] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right-full duration-300 ${
            notification.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {notification.type === "success" ? <CheckCircle2 /> : <XCircle />}
          <p className="font-medium text-sm sm:text-base">{notification.message}</p>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Mari Terhubung</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Punya ide menarik atau tawaran kolaborasi? Saya selalu terbuka untuk diskusi mendalam mengenai mobile & web development.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="p-3 bg-sky-500/10 rounded-lg text-sky-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                      <p className="font-medium">rizasukmaaa@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="p-3 bg-sky-500/10 rounded-lg text-sky-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Lokasi</p>
                      <p className="font-medium">Ponorogo, Jawa Timur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/galaxiana04" },
                  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "http://www.linkedin.com/in/riza-sukmawardani-532685288" },
                  { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/rzaskma_29/" },
                  { icon: <MessageSquare size={20} />, label: "WhatsApp", href: "https://wa.me/6283193979582" }, // Contoh
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-sky-500 hover:bg-sky-500/5 transition-all group"
                  >
                    <span className="text-muted-foreground group-hover:text-sky-600 transition-colors">{social.icon}</span>
                    <span className="text-sm font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl p-8 shadow-2xl shadow-sky-500/5 border border-border relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ananda"
                        className={`bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-sky-500 h-12 ${errors.name ? "ring-2 ring-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-xs text-destructive font-medium">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anandaa@gmail.com"
                        className={`bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-sky-500 h-12 ${errors.email ? "ring-2 ring-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-xs text-destructive font-medium">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan Anda</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Halo Riza, saya tertarik untuk..."
                      rows={6}
                      className={`bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-sky-500 resize-none ${errors.message ? "ring-2 ring-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-xs text-destructive font-medium">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold text-lg transition-all flex gap-2 group shadow-lg shadow-sky-600/20"
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        Kirim Pesan
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32 py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent italic">
            "Turning code into impactful solutions."
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Riza Sukmawardani. Ponorogo, Indonesia.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;