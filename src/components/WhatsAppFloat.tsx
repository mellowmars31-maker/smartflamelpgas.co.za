import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/27698776794"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-accent-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform btn-depress"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
