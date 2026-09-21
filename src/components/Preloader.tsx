import { useEffect, useState } from "react"

const loadingMessages = [
  "Initializing system...",
  "Loading interface...",
  "Connecting modules...",
  "Loading developer profile...",
  "Preparing projects...",
  "Initializing experience...",
  "System ready.",
]

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState(loadingMessages[0])
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 4) + 1

        if (next >= 100) {
          clearInterval(interval)
          setProgress(100)
          setMessage("System ready.")

          setTimeout(() => {
            setFinished(true)
          }, 700)

          return 100
        }

        const messageIndex = Math.floor(
          (next / 100) * loadingMessages.length
        )

        setMessage(
          loadingMessages[
            Math.min(messageIndex, loadingMessages.length - 1)
          ]
        )

        return next
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (finished) return null

  return (
    <div
      className={`fixed inset-0 z-9999 bg-[#050505] text-white
      flex items-center justify-center
      transition-all duration-700
      ${progress === 100 ? "opacity-0 scale-105" : "opacity-100"}`}
    >

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.08] tech-grid" />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full
        bg-[#c4aaff]/10 blur-[120px]" />

      <div className="relative w-[90%] max-w-xl">

        {/* Top label */}
        <div className="flex justify-between items-center mb-6">
          <div className="font-mono text-xs text-[#c4aaff]">
            MARWANE.DEV
          </div>

          <div className="font-mono text-xs text-gray-500">
            SYS_BOOT
          </div>
        </div>

        {/* Main core */}
        <div className="relative flex justify-center items-center h-64">

          {/* Outer rotating ring */}
          <div className="absolute w-52 h-52 rounded-full
            border border-[#c4aaff]/20
            border-t-[#c4aaff]
            animate-spin"
          />

          {/* Second ring */}
          <div className="absolute w-40 h-40 rounded-full
            border border-[#c4aaff]/20
            border-b-[#c4aaff]
            animate-[spin_4s_linear_infinite_reverse]"
          />

          {/* Core */}
          <div className="relative w-24 h-24 rounded-full
            border border-[#c4aaff]/60
            bg-[#c4aaff]/5
            flex items-center justify-center
            shadow-[0_0_50px_rgba(122,242,152,0.25)]"
          >
            <div className="w-10 h-10 rounded-full
              bg-[#c4aaff]
              shadow-[0_0_40px_#c4aaff]
              animate-pulse"
            />
          </div>

          {/* Orbiting dots */}
          <span className="absolute w-2 h-2 bg-[#c4aaff] rounded-full
            top-6 left-1/2 shadow-[0_0_15px_#c4aaff]"
          />

          <span className="absolute w-1.5 h-1.5 bg-[#c4aaff] rounded-full
            bottom-12 right-24 shadow-[0_0_15px_#c4aaff]"
          />

          <span className="absolute w-1.5 h-1.5 bg-[#c4aaff] rounded-full
            top-16 left-24 shadow-[0_0_15px_#c4aaff]"
          />
        </div>

        {/* Status */}
        <div className="font-mono text-sm mb-3 flex justify-between">
          <span className="text-gray-400">
            {message}
          </span>

          <span className="text-[#c4aaff]">
            {progress}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#c4aaff]
            shadow-[0_0_15px_#c4aaff]
            transition-all duration-100"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Terminal logs */}
        <div className="mt-5 font-mono text-[10px] text-gray-600 space-y-1">

          <p>
            <span className="text-[#c4aaff]">[OK]</span>{" "}
            kernel initialized
          </p>

          <p>
            <span className="text-[#c4aaff]">[OK]</span>{" "}
            frontend modules loaded
          </p>

          <p>
            <span className="text-[#c4aaff]">[OK]</span>{" "}
            portfolio data synchronized
          </p>

          <p>
            <span className="text-[#c4aaff]">[--]</span>{" "}
            {message.toLowerCase()}
          </p>

        </div>

      </div>
    </div>
  )
}