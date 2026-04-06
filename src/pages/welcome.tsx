import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRightIcon, Code2Icon, FolderKeyIcon,  PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import AppTop from '../components/app-top'
import Chatbot from '../components/chatbot'
import { Footer } from '../components/footer'
import { Link } from 'react-router-dom'



export default function Welcome() {
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
     useEffect(() => {
        const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        })

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
    { title: "HuggingFace AI Models", icon: "/icons/generative.png" },
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

  const speed = 0.12

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


const cpt = [
  { title: "BLS Services", 
    img: "/cpt/11.png", 
    description:"Structural engineering platform delivered by W_TheCode: technical studies, diagnostics, audits and expert systems for existing buildings — renovation and adaptive rehabilitation at scale.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://oscult-ingenierie.ma/"},
    
  { title: "Airless Decoration", 
    img: "/cpt/2.png", 
    description:"High-end painting services platform built for professionals and individuals. Modern techniques including airless painting and sprayed plaster — durable, meticulous, premium finish.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://airlessdecoration.fr/" },

  { title: "Age d'Or Services", 
    img: "/cpt/3.png", 
    description:"Home care professional network platform developed by W_TheCode — connecting families with qualified caregivers for daily or occasional needs, tailored to each individual's lifestyle.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://agedorservicesguyane.fr/"  },

  { title: "AHC Plumber", 
    img: "/cpt/4.png", 
    description:"Digital presence for AHC Plomberie — a specialist in plumbing, heating and bathroom installation across the Rouen area, crafted by W_TheCode for maximum local visibility.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://ahcplomberie.fr/"  },
]

interface AccordionItem {
  id: number
  title: string
  content: string
  image: string
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: "Custom Web Development",
    content: "W_TheCode builds complete web applications from scratch — frontend to backend — engineered for speed, security, and long-term scalability. Every line of code crafted with purpose.",
    image: "./img/acoo/acco4.png",
  },
  {
    id: 2,
    title: "Frontend Engineering",
    content: "We craft premium digital interfaces that captivate users and convert visitors. Pixel-perfect, responsive, and optimized for performance across all devices and browsers.",
    image: "./img/acoo/acco2.png",
  },
  {
    id: 3,
    title: "Server Logic & API Development",
    content: "Robust backend architectures and RESTful APIs built to handle real-world demands. W_TheCode designs systems that are maintainable, secure, and ready to scale.",
    image: "./img/acoo/acco3.png",
  },
  {
    id: 4,
    title: "Full Stack Application Development",
    content: "End-to-end product delivery — from database schema to polished UI. W_TheCode owns the full stack so your vision ships faster, cleaner, and with zero gaps.",
    image: "./img/acoo/acco1.png",
  },
]


const [activeId, setActiveId] = useState<number>(1)

  const activeItem = items.find(item => item.id === activeId)
  return (
    <>
    <AppTop/>
    <div
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  {/* Chatbot global */}
      <Chatbot />
      <header title="W_TheCode — Crafting Premium Digital Experiences">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </header>
      {/* Background container */}
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
            {/* Glass Cursor Effect */}
            <div className="lens fixed pointer-events-none z-20" />
          </div>

      {/* FOREGROUND CONTENT */}
      <div id="smooth-wrapper">
      <div id="smooth-content" className="relative bg-radial from-white/20 via-white/40 to-white/80  z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
        <main className="flex flex-col lg:flex-row gap-12  w-full mt-40 lg:mt-40 mb-15 h-full max-w-7xl px-6">
          <div className="w-full flex-col text-start flex justify-start items-start">
            {/* text Area */}
            <h1 className="text-4xl sm:text-5xl text-[#1a2121] -tracking-wide lg:text-[48px] font-bold font-satoshi leading-[53px]">
              Crafting Premium Digital Experiences
            </h1>
            <p className="text-[18px] text-[#1a2121] mt-6 max-w-xl font-sans">
              At W_TheCode, we turn ambitious ideas into clean, maintainable, and scalable code. We stay at the forefront of emerging tech stacks and best practices, so your product is always built for tomorrow, not just today.
            </p>
            <p className="text-[18px] text-[#1a2121] mt-6 max-w-xl font-sans">
              Let's build something exceptional together. Contact us today to discuss your vision and how W_TheCode can bring it to life.
            </p>

            <button className=" mt-4 border border-[#c0c0c0] bg-[#5B51CA] text-white px-4 py-2 rounded-md text-lg ">
              <a
                href="https://www.instagram.com/codeaurum77/"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                Our Instagram
                <ArrowUpRightIcon size={16} />
              </a>
            </button>
          </div>
          <div className="w-full z-10 h-[40vh] sm:h-[50vh] lg:h-[70vh]">
            <img src="./img/Hero-img.webp" alt="Hero-img" />
          </div>
        </main>


        <main className=" w-full pt-32 h-full max-w-full bg-white font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <p className="text-[16px] text-[#1a2121]">// Our Stack</p>
            <div className="flex flex-col lg:flex-row w-full gap-14 h-full bg-white font-mono justify-start">
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-black">
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-black/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Programming Languages</h1>
                          <Code2Icon className="text-[#1a2121]"/>
                      </div>
                      <p className="text-sm text-gray-700">
                          PHP • Java-script • Type-script • HTML • CSS • Java • Oracle DB • SQL • PlSql
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-black/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Developer Tools</h1>
                          <Code2Icon className="text-[#1a2121]"/>
                      </div>
                      <p className="text-sm text-gray-700">
                          Git • Github • Postman • API • REST APIs • Docker • Xampp • UML • Enterprise Architect
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-black/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Frameworks</h1>
                          <Code2Icon className="text-[#1a2121]"/>
                      </div>
                      <p className="text-sm text-gray-700">
                          Reactjs • Tailwindcss • Laravel • Django
                      </p>
                  </div>
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-black/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">Security</h1>
                          <FolderKeyIcon className="text-[#1a2121]"/>
                      </div>
                      <p className="text-sm text-gray-700">
                          Linux ( Nmap/Wireshark/Metasploit ) • Networking & Protocols • VirtualBox • Docker 
                      </p>
                  </div>
                </div>
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-black">
                  <p className="text-md font-sans font-normal max-w-lg">
                    At W_TheCode, we thrive on solving real-world business problems — turning ambitious ideas into 
                    clean, maintainable, and scalable code. We stay at the forefront of emerging tech stacks 
                    and best practices, so your product is always built for tomorrow, not just today.
                  </p>
                  <a
                    href="/about"
                    target="_blank"
                    className="flex mr-auto my-6 items-center font-sans gap-2 border border-[#f3f3f3] bg-[#5B51CA] text-white p-2 px-3">
                    About Us
                    <ArrowUpRightIcon className="size-4"/>
                  </a>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly w-full gap-10 lg:gap-16 items-center mx-auto mt-12">
              <div className="p-7 border-b-2 border-black/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-sans text-black font-bold">5+</h3>
                <p className="text-[16px] font-sans text-[#1a2121]">Years in the Industry</p>
              </div>
              <div className="p-7 border-b-2 border-black/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-sans text-black font-bold">12+</h3>
                <p className="text-[16px] font-sans text-[#1a2121]">Expert Engineers</p>
              </div>
              <div className="p-7 border-b-2 border-black/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-sans text-black font-bold">100+</h3>
                <p className="text-[16px] font-sans  text-[#1a2121]">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}

          <div className="max-w-340  mb-16 mt-44 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-black">
              <p className="text-[16px] mt-3 text-[#1a2121]">// Our Work</p>
              <h3 className="text-[48px] -tracking-wide font-satoshi  font-bold max-w-lg leading-none">
                Premium Digital Experiences We've Crafted
              </h3>
            </div>
            <div className="flex items-center text-[#1a2121] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 font-sans gap-20 lg:gap-32 mt-12 justify-between items-center">
              <div className="flex flex-col gap-24">
                {cpt.slice(0, 2).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
                    <div className="flex flex-col gap-7 border shadow-xl shadow-[#d8d7d7] border-black/15 rounded-3xl p-7">
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
              <div className="flex flex-col font-sans gap-24">
                {cpt.slice(2).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
                  <div className="flex flex-col gap-7 border shadow-xl shadow-[#d8d7d7] border-black/15 rounded-3xl p-7">
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
          <div className="flex items-center my-24 text-[#1a2121] font-semibold justify-center gap-1">
            <Link to="/projects" className="flex mx-auto items-center font-sans gap-2 border border-[#f3f3f3] bg-[#5B51CA] text-white p-2.5 px-7 rounded-3xl">
              View All Projects
            </Link>
          </div>
          </div>
        </main>


        {/* Services Section */}
        <main className=" w-full  h-full max-w-full bg-radial from-white via-white/80 to-white/30 font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-[#1a2121]">
              <p className="text-[16px] mt-3 text-black">// Services</p>
              <h3 className="text-[48px] font-bold -tracking-wide font-satoshi max-w-xl leading-tight">
                End-to-End Digital Solutions by W_TheCode
              </h3>
            </div>
            <div className="flex items-center text-[#1a2121] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 max-w-7xl mx-auto py-16 lg:py-20 px-6">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={activeItem?.image}
                  alt={activeItem?.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
              </div>
            </div>

            {/* Accordion Section */}
            <div className="w-full font-sans lg:w-1/2 space-y-4">
              {items.map((item) => {
                const isActive = item.id === activeId

                return (
                  <div
                    key={item.id}
                    className={`border-b border-black/45 py-5 cursor-pointer transition-all duration-300 text-[#1a2121]`}
                    onClick={() => setActiveId(item.id)}
                  >
                    <h3 className="text-lg flex justify-between text-black font-satoshi font-semibold ">
                      {item.title}
                      {
                        isActive ? (
                          <p className="text-lg text-black/50 flex justify-between font-normal font-sans">
                            ( 0{item.id} )
                          </p>
                        ) : (
                          <PlusIcon className="text-[#1a2121]"/>
                        )
                      }
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-700 ${
                        isActive ? "max-h-40 mt-3" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm max-w-md opacity-80">
                        {item.content}
                      </p>
                    </div>
                    <Link to="/contact" className={`mt-4 text-[#5B51CA] underline underline-offset-8 items-center gap-2 font-sans text-sm ${isActive ? "flex" : "text-[1px] mt-0 opacity-0 pointer-events-none"}`}>
                      Start a Project
                      <ArrowUpRightIcon className="text-xs"/>
                    </Link>
                  </div>
                )
              })}
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