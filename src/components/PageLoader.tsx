import { Loader2 } from "lucide-react";


export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4 text-white">
        <Loader2 className="h-12 w-12 animate-spin" />
        <p className="text-sm tracking-wide opacity-80">
          Loading experience...
        </p>
      </div>
    </div>
  )
}