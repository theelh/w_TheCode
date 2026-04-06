import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import AppTop from '../components/app-top'
import Chatbot from '../components/chatbot'
import { Footer } from '../components/footer'
import emailjs from '@emailjs/browser'
import { ArrowRightIcon } from 'lucide-react'



gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Contact() {
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
     useEffect(() => {
        const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        })

        // 🔥 VERY IMPORTANT
        ScrollTrigger.refresh()

        return () => {
        smoother.paused()
        }
    }, [])
  
  
  const [isHovering, setIsHovering] = useState(false)
useEffect(() => {
  const lens = document.querySelector<HTMLDivElement>(".lens")

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  const speed = 0.12

  const move = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  window.addEventListener("mousemove", move)

  let raf: number

  const animate = () => {
    currentX += (mouseX - currentX) * speed
    currentY += (mouseY - currentY) * speed

    if (lens) {
      lens.style.transform = `
        translate(${currentX}px, ${currentY}px)
        translate(-50%, -50%)
        scale(${isHovering ? 1.08 : 0})
      `
      lens.style.opacity = isHovering ? "1" : "0"
    }

    raf = requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener("mousemove", move)
    cancelAnimationFrame(raf)
  }
}, [isHovering])



const techFlex  = [
    { title: "HTML", icon: "/icons/html-5.png" },
    { title: "CSS", icon: "/icons/css-file-format-symbol.png" },
    { title: "Node js ", icon: "/icons/programing.png" },
    { title: "PHP", icon: "/icons/php.png" },
    { title: "My SQL", icon: "/icons/mysql.png" },
    { title: "JAVA", icon: "/icons/java.png" },
    { title: "PYTHON", icon: "/icons/python.png" },
    { title: "Type-Script", icon: "/icons/typescript.png" },
    { title: "HuggingFace AI Models", icon: "/icons/generative.png" },
    { title: "Rest API", icon: "/icons/cloud-api.png" },
    { title: "3D Three JS", icon: "/icons/3d-model.png" },
  ]

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".split", { opacity: 1 })

      document.fonts.ready.then(() => {
        const containers = gsap.utils.toArray<HTMLDivElement>(".container")

        containers.forEach((container) => {
          const texts = container.querySelectorAll(".split")

texts.forEach((text) => {
  SplitText.create(text, {
    type: "words,lines",
    mask: "lines",
    linesClass: "line",
    autoSplit: true,
    onSplit: (instance: any) => {
      return gsap.from(instance.lines, {
        yPercent: 120,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
    },
  })
})
        })
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  const [data, setData] = useState({
  name: '',
  email: '',
  message: ''
})

const [loading, setLoading] = useState(false)


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setData({ ...data, [e.target.name]: e.target.value })
}


const submit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!data.name || !data.email || !data.message) {
    toast.error("Please fill all fields")
    return
  }

  try {
    setLoading(true)

    await emailjs.send(
      "service_x3iacqn",
      "template_qedoa0x",
      {
        name: data.name,
        email: data.email,
        message: data.message
      },
      "f7UNr4cBU3UGpTWUf"
    )

    toast.success("Message sent 🚀")

    setData({
      name: '',
      email: '',
      message: ''
    })

  } catch (err) {
    toast.error("Failed to send message")
  } finally {
    setLoading(false)
  }
}


  return (
    <>
    <Toaster
  position="bottom-center"
  toastOptions={{
    style:{
      background:'#1c1c1c',
      color:'#fff',
      border:'1px solid rgba(255,255,255,.1)',
      borderRadius:'999px'
    }
  }}
/>
    <AppTop/>
    <div
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  {/* Chatbot global */}
      <Chatbot />
      <header>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </header>
      {/* ✅ Background container with controlled layering */}
          <div  className="h-full bg-[#111111] fixed flex  inset-0 items-end justify-end overflow-hidden z-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full fixed h-full object-cover"
            >
                <source src="/videos/welc-video-comp.mp4" type="video/mp4" />
            </video>
          </div>

      {/* 🌟 FOREGROUND CONTENT */}
      <div id="smooth-wrapper">
      <div id="smooth-content" className="relative bg-radial from-white/30 via-white/60 to-white z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
        <main className="grid lg:grid-cols-2 gap-16 font-sans items-center w-full my-20 lg:mt-40 lg:mb-20 h-full max-w-7xl px-6">
            <div className="flex flex-col gap-6">
                <p className="text-[16px] text-[#1a2121]">// Get In Touch</p>
                <h1 className="lg:text-[50px] uppercase text-[37px] text-black font-satoshi font-semibold max-w-xl lg:leading-tight">Let’s Connect & Collaborate</h1>
                <p className="text-[16px] text-[#1a2121] max-w-lg">
                    Have a project in mind? Let’s make it happen! Drop us a message, and we’ll connect with you soon.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    <a target='_blank' href="https://github.com/theelh" className="flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-black text-black py-3 px-3 hover:rounded-full">
                        Github
                        <ArrowRightIcon className="text-md"/>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/marwane-elhosni/" className="flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-black text-black py-3 px-3 hover:rounded-full">
                        LinkedIn
                        <ArrowRightIcon className="text-md"/>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/codeaurum77/" className="flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-black text-black py-3 px-3 hover:rounded-full">
                        Instagram
                        <ArrowRightIcon className="text-md"/>
                    </a>
                </div>
            </div>
            <div>
                {/* FORM */}
      <form
      onSubmit={submit}
      className="
      lg:w-[420px] w-80 p-8 rounded-3xl
      backdrop-blur-xl bg-black/5 border border-black/10
      flex flex-col gap-6
      "
    >
      <input
    name="name"
    placeholder="Name"
    value={data.name}
    onChange={handleChange}
    className="input"
  />

      <input
    name="email"
    placeholder="Email"
    value={data.email}
    onChange={handleChange}
    className="input"
  />

      <textarea
    name="message"
    placeholder="Message"
    rows={4}
    value={data.message}
    onChange={handleChange}
    className="input"
  />

      <button
    disabled={loading}
    className="py-3 rounded-full bg-white text-black font-medium"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>
    </form>
            </div>
        </main>

        <main className=" w-full h-full max-w-full  font-mono justify-center">
          {/* Tech Marquee */}
        <section className="flex flex-col py-15 bg-white/10">
            <div className="relative w-full overflow-hidden">
                  <div className="pointer-events-none absolute right-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10" />
                    <div className="marquee">
                    {[...techFlex, ...techFlex].map((tech, index) => (
                      <div
                        key={`${tech.title}-${index}`}
                        className="flex items-center gap-4 mx-12 bg-white px-7 py-2"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.title}
                          className="h-8 w-8 object-contain"
                        />
                        <span className="text-lg font-semibold text-[#111A4A]">
                          {tech.title}
                        </span>
                      </div>
                    ))} 
                  </div>
                </div>
        </section>
            
             <Footer/>
        </main>
      </div>
      </div>
    </div>
    </>
  )
}
