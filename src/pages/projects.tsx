import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "gsap/SplitText"
import { useEffect, useRef } from 'react'
import AppTop from '../components/app-top'
import Chatbot from '../components/chatbot'
import { Footer } from '../components/footer'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Project() {
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
    { title: "Rest API", icon: "/icons/cloud-api.png" },
    { title: "3D Three JS", icon: "/icons/3d-model.png" },
  ]
    


const cpt = [
  { title: "BLS Services", 
    img: "/cpt/11.png", 
    description:"Oscult BTP accompagne vos projets d’ingénierie structurelle : études techniques, diagnostics, audits et expertises pour bâtiments existants. Rénovation, réhabilitation et adaptation sur mesure.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://oscult-ingenierie.ma/"},
  { title: "Samser Rayonnages", 
    img: "/cpt/6.png", 
    description:"The best way to store. Leader in office furniture shelving, handling equipment for warehouses and industries.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://samser-rayonnages-martinique.fr/"},
    
  { title: "Airless Decoration", 
    img: "/cpt/2.png", 
    description:"Interior and exterior painting services for individuals and professionals. Modern techniques (airless painting, sprayed plaster) for a high-end, durable and meticulous finish.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://airlessdecoration.fr/" },

  { title: "Age d'Or Services", 
    img: "/cpt/3.png", 
    description:"Composed of a team of home care professionals, the Age d’Or agency prioritizes meeting your needs, whether they are daily or more occasional. Our team is ready to listen to you, discuss your needs, and provide the services best suited to your lifestyle.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://agedorservicesguyane.fr/"  },
  { title: "Hoffert Architecture", 
    img: "/cpt/8.png", 
    description:"Hoffert Architecture accompagne les propriétaires, copropriétés et gestionnaires d’immeubles collectifs dans leurs projets de rénovation et de transition énergétique.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://hoffertarchitecture.fr/"  },

  { title: "AHC Plumber", 
    img: "/cpt/4.png", 
    description:"AHC Plomberie is a company specializing in all plumbing, heating and bathroom creation work in the Rouen area.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://ahcplomberie.fr/"  },
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



  return (
    <>
    <AppTop/>
    <div
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
      <div id="smooth-content" className="relative z-10 min-h-screen bg-radial from-white/10 via-white/60 to-white flex flex-col items-center pt-6 text-[#1a2121] lg:justify-center">
        <main className="flex flex-col font-sans text-center items-center w-full my-20 lg:my-40 h-full max-w-7xl px-6">
            <p className="text-[16px] text-[#1a2121]">// Explore Work</p>
            <h1 className="lg:text-[50px] uppercase text-[37px] font-satoshi text-black font-semibold max-w-xl lg:leading-20">A Showcase of Our Latest Projects</h1>
            <div className="flex items-center text-[#5B51CA] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#5B51CA] w-[90vw]"/>
              {">"}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 font-sans gap-20 lg:gap-32 mt-12 justify-between items-center">
              <div className="flex flex-col gap-24">
                {cpt.slice(0, 3).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div key={project.title} className="flex flex-col gap-7 border shadow-xl bg-white shadow-[#d8d7d7] border-black/15 rounded-3xl p-7">
                      <img src={project.img} alt={project.title} className="rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"/>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-xl font-bold text-black">{project.title}</h4>
                        <p className="text-sm text-gray-700">{project.description}</p>
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[14px] font-sans bg-[#5B51CA] text-[#f3f3f3] py-1  px-3 rounded-3xl">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-24">
                {cpt.slice(3,6).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div key={project.title} className="flex flex-col gap-7 bg-white border shadow-xl shadow-[#d8d7d7] border-black/15 rounded-3xl p-7">
                      <img src={project.img} alt={project.title} className="rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"/>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-xl font-bold text-black">{project.title}</h4>
                        <p className="text-sm text-gray-700">{project.description}</p>
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[14px] font-sans bg-[#5B51CA] text-[#f3f3f3] py-1  px-3 rounded-3xl">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
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
