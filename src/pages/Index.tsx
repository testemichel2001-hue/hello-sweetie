import { MessageCircle } from "lucide-react";

const Index = () => {
  const whatsappLink = "https://wa.me/5511976595423?text=Ol%C3%A1%20meu%20bem%20Vim%20do%20telegram%20%F0%9F%98%8D%F0%9F%A4%A4";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-whatsapp-foreground shadow-lg transition-all duration-300 hover:bg-whatsapp-hover hover:scale-105 hover:shadow-xl"
      >
        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        Chamar no WhatsApp
      </a>
    </div>
  );
};

export default Index;
