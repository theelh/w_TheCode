import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText"
import { ArrowUpRightIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import AppTop from '../components/app-top'
import Chatbot from '../components/chatbot'
import ZoomScrollImage from '../components/FlipGallery'
import { Footer } from '../components/footer'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger, SplitText)
export default function About() {
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

    const techFlex  = [
    { title: "HTML", icon: "/icons/html-5.png" },
    { title: "CSS", icon: "/icons/css-file-format-symbol.png" },
    { title: "Node js ", icon: "/icons/programing.png" },
    { title: "PHP", icon: "/icons/php.png" },
    { title: "My SQL", icon: "/icons/mysql.png" },
    { title: "JAVA", icon: "/icons/java.png" },
    { title: "PYTHON", icon: "/icons/python.png" },
    { title: "Type-Script", icon: "/icons/typescript.png" },
    { title: "HugginFace AI Models", icon: "/icons/generative.png" },
    { title: "Rest API", icon: "/icons/cloud-api.png" },
    { title: "3D Three JS", icon: "/icons/3d-model.png" },
  ]
  
  
  const [isHovering, setIsHovering] = useState(Boolean)
useEffect(() => {
  const lens = document.querySelector(".lens")

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  const speed = 0.12 // lower = smoother inertia

  
  const move = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  window.addEventListener("mousemove", move)

  const animate = () => {
    currentX += (mouseX - currentX) * speed
    currentY += (mouseY - currentY) * speed

    if (lens) {
      lens.setAttribute(
        "style",
        `transform: translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(1.08);`
      )
    }

    requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener("mousemove", move)
  }
}, [])

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

  const text = "Creating, Exploring & Enjoying Every Single Day"
  const text2 = "Life for me is about balance — doing what I love, staying curious, and finding joy in both the small wins and big milestones."



  return (
    <>
    <AppTop/>
    <div
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  {/* Chatbot global */}
      <Chatbot />
      <header title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </header>
      {/* ✅ Background container with controlled layering */}
          <div  className="h-full fixed flex inset-0 items-end justify-end overflow-hidden z-0">
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
        <main className="flex flex-col font-sans text-center items-center w-full my-40 lg:my-40 h-full max-w-7xl px-6">
            <p className="text-[16px] text-[#1a2121]">// W_TheCode</p>
            <h1 className="lg:text-[60px] mt-7 text-[42px] text-black font-satoshi font-semibold max-w-xl lg:leading-[60px]">We build scalable digital products for ambitious ideas</h1>
            <ZoomScrollImage/>
            <p className="lg:text-[24px] text-lg text-black font-sans font-semibold max-w-2xl mt-9">
              <span className="text-[#5B51CA]">{'<p>'}</span>
              We turn ambitious ideas into clean, maintainable, and scalable code. 
              At <span className="text-[#5B51CA]">W_TheCode</span>, we stay ahead of emerging technologies 
              and best practices to ensure your product is built for tomorrow — not just today.
              <span className="text-[#5B51CA]">{'</p>'}</span>
            </p>
            <p className="text-md mt-4 text-gray-600 max-w-2xl">
              From startups to growing businesses, we design and develop high-performance web applications 
              using modern stacks, clean architecture, and future-proof solutions.
            </p>
            <a
                href="/projects"
                target="_blank"
                className="flex items-center gap-2 border mt-9 border-[#a59ef2] bg-[#5B51CA] text-white px-7 py-2 rounded-4xl font-sans text-md font-semibold">
               View Our Work
            </a>
        </main>


        <main className=" w-full h-full max-w-full bg-white font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div
              ref={wrapperRef}
              className="flex flex-col items-center justify-center"
            >
              {[1].map((i) => (
                <div key={i} className="container font-sans lg:w-[35vw] my-20">

                  <h2 className="split leading-tight text-center text-[32px] lg:text-[48px] font-semibold text-black will-change-transform opacity-0">
                    {text}
                  </h2>

                  <p className="split text-center text-md text-black/70 mt-6 opacity-0">
                    {text2}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </main>

        {/* ***************** */}

        <main className=" w-full py-12 h-full max-w-full bg-white font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-black">
              <p className="text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#1a2121]">
                // Approach
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight">
                How W_TheCode delivers value
              </h3>
            </div>
            <div className="flex items-center text-[#1a2121] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>
            <div className="grid grid-cols-1 font-sans md:grid-cols-2 lg:grid-cols-2 items-start gap-16 lg:gap-10 max-w-7xl py-20 px-6">
              <div className="max-w-md left-0 w-full flex flex-col justify-start">
                <img src="./img/about/about3.jpg" alt="about3" />
              </div>
              <div className="lg:flex w-full lg:max-w-380 max-w-full flex flex-col items-start lg:justify-start">

                {/* Block 1 */}
                <div className="flex items-center lg:gap-4 py-5 border-b border-gray-300 justify-between w-full">
                  <div>
                    <h3 className="text-xl text-black font-satoshi font-semibold">Scalable Product Engineering</h3>
                    <p className="text-[#1a2121] text-sm mt-1">From idea → production-ready system</p>
                  </div>
                  <h3 className="text-[16px] text-end font-satoshi text-[#1a2121]">Clean Architecture</h3>
                </div>

                {/* Block 2 */}
                <div className="flex items-center gap-4 py-5 border-b border-gray-300 justify-between w-full">
                  <div>
                    <h3 className="text-xl text-black font-satoshi font-semibold">Future-Proof Development</h3>
                    <p className="text-[#1a2121] text-sm mt-1">Modern tools & evolving tech stacks</p>
                  </div>
                  <h3 className="text-[16px] text-end font-satoshi text-[#1a2121]">Performance & Security</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mt-6 max-w-xl leading-relaxed">
                  At <span className="text-[#5B51CA] font-semibold">W_TheCode</span>, we don’t just build applications — 
                  we engineer scalable digital products designed to grow with your business.  
                  Our focus is on clean, maintainable code, high performance, and modern architectures 
                  that ensure long-term reliability and adaptability.
                </p>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="mt-6 flex text-[#1a2121] border border-[#1a2121] px-6 py-3 rounded-full 
                  transition-all duration-300 hover:bg-[#5B51CA] hover:text-white hover:border-[#5B51CA] 
                  items-center gap-2 font-sans font-semibold text-sm"
                >
                  Start a Project
                  <ArrowUpRightIcon className="text-xs"/>
                </Link>

              </div>
            </div>
          </div>
        </main>
        {/* Process Section */}

        <main className=" w-full py-12 h-full max-w-full bg-black font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-sm sm:text-[16px] mt-1 lg:mt-3 text-white/80">
                // Process
              </p>
              <h3 className="text-2xl sm:text-3xl font-satoshi lg:text-[48px] font-bold max-w-xl leading-tight">
                How W_TheCode Delivers Excellence
              </h3>
            </div>
            <div className="flex items-center text-white font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-white w-[90vw]"/>
              {">"}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans items-start gap-16 lg:gap-32 max-w-7xl mx-auto pb-20 px-6">
            <div className="pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold text-[#5B51CA]">01</h3>
              <p className="text-[22px] text-white font-semibold">Discover & Architect</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                We start by deeply understanding your business goals, user needs, and technical landscape — then design a solid architecture before writing a single line of code.
              </p>
            </div>
            <div className="border-l border-white/25 pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold text-[#5B51CA]">02</h3>
              <p className="text-[22px] text-white font-semibold">Build & Integrate</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                Our engineers build pixel-perfect interfaces and robust backend systems in sync. Every component — UI or API — is clean, tested, and built to last.
              </p>
            </div>
            <div className="border-l border-white/25 pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold text-[#5B51CA]">03</h3>
              <p className="text-[22px] text-white font-semibold">Launch & Scale</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                We handle deployment, monitoring, and post-launch optimization. W_TheCode stays by your side to keep your product performing and growing long after go-live.
              </p>
            </div>
          </div>
        </main>

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

        {/* CTA Section */}
        <main className=" w-full pt-12 h-full max-w-full bg-white font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-black">
              <div className="flex flex-col gap-8 max-w-6xl">
                <p className="text-[16px] mt-3 text-[#1a2121]">// Work With Us</p>
                <img className="size-96 w-xl object-cover " src="./img/pre-footer.jpg" alt="" />
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="text-[48px] font-bold font-satoshi max-w-xl leading-none">
                  Ready to build something exceptional with W_TheCode?
                </h3>
                <Link to="/contact" className="flex mx-auto items-center font-sans gap-2 border border-[#f3f3f3] bg-[#5B51CA] text-white py-14 px-5 rounded-full">
                    Start a Project
                </Link>
              </div>
            </div>
            
            </div>
            
             <Footer/>
        </main>
      </div>
      </div>
    </div>
    </>
  )
}
