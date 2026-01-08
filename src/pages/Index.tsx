import { MessageCircle } from "lucide-react";
import jessyProfile from "@/assets/jessy-profile.jpeg";

const Index = () => {
  const whatsappLink = "https://wa.me/5531976132963?text=Ol%C3%A1%20amor%2C%20tenho%20interesse%20nos%20conte%C3%BAdos";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8">
      <div className="mb-6">
        <img
          src={jessyProfile}
          alt="Jessy"
          className="h-48 w-48 rounded-full object-cover shadow-2xl ring-4 ring-white/50"
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Jessy</h1>
        <p className="text-xl text-foreground/70">Vendedora de Conteúdo</p>
      </div>
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-full bg-whatsapp px-12 py-6 text-xl font-bold text-whatsapp-foreground shadow-xl transition-all duration-300 hover:bg-whatsapp-hover hover:scale-105 hover:shadow-2xl"
      >
        <MessageCircle className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
        Chamar no WhatsApp
      </a>
    </div>
  );
};

export default Index;
