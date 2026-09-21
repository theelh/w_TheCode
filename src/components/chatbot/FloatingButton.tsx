import { MessageCircle } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function FloatingButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-50 flex font-sans font-bold items-center gap-2
        shadow-inner shadow-[#c4aaff] hover:scale-105 glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white p-4 rounded-full
        transition-all duration-300
      "
    >
      AI Chat
      <MessageCircle size={26} />
    </button>
  );
}
