import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRightIcon, BugIcon, CloudIcon, Code2Icon, DownloadIcon, FolderKeyIcon, PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import AppTop from '../components/app-top'
import Chatbot from '../components/chatbot'
import { Footer } from '../components/footer'
import Preloader from '../components/Preloader'
import { LaserScene } from '../components/LaserScene'
import { ConstellationVIIScene } from '../components/ConstellationFieldVII'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText"
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import { SquareArrowOutUpRight } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Welcome() {
     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
     useEffect(() => {
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 0.7,
          effects: false,
          smoothTouch: 0,
        });

        ScrollTrigger.refresh();

        return () => {
          smoother.kill();
        };
      }, []);

    const techFlex  = [
    { title: "HTML", icon: "./icons/html-5.png" },
    { title: "CSS", icon: "./icons/css-file-format-symbol.png" },
    { title: "Node js ", icon: "./icons/programing.png" },
    { title: "PHP", icon: "./icons/php.png" },
    { title: "My SQL", icon: "./icons/mysql.png" },
    { title: "JAVA", icon: "./icons/java.png" },
    { title: "PYTHON", icon: "./icons/python.png" },
    { title: "Type-Script", icon: "./icons/typescript.png" },
    { title: "HugginFace AI Models", icon: "./icons/generative.png" },
    { title: "Rest API", icon: "./icons/cloud-api.png" },
    { title: "3D Three JS", icon: "./icons/3d-model.png" },
  ]
  
  


const cpt = [
  { title: "BLS Services", 
    img: "./cpt/11.png", 
    description:"Oscult BTP accompagne vos projets d’ingénierie structurelle : études techniques, diagnostics, audits et expertises pour bâtiments existants. Rénovation, réhabilitation et adaptation sur mesure.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://oscult-ingenierie.ma/"},
  { title: "Samser Rayonnages", 
    img: "./cpt/6.png", 
    description:"The best way to store. Leader in office furniture shelving, handling equipment for warehouses and industries.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://samser-rayonnages-martinique.fr/"},
    
  { title: "Airless Decoration", 
    img: "./cpt/2.png", 
    description:"Interior and exterior painting services for individuals and professionals. Modern techniques (airless painting, sprayed plaster) for a high-end, durable and meticulous finish.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://airlessdecoration.fr/" },

  { title: "Age d'Or Services", 
    img: "./cpt/3.png", 
    description:"Composed of a team of home care professionals, the Age d’Or agency prioritizes meeting your needs, whether they are daily or more occasional. Our team is ready to listen to you, discuss your needs, and provide the services best suited to your lifestyle.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://agedorservicesguyane.fr/"  },
  { title: "Hoffert Architecture", 
    img: "./cpt/8.png", 
    description:"Hoffert Architecture accompagne les propriétaires, copropriétés et gestionnaires d’immeubles collectifs dans leurs projets de rénovation et de transition énergétique.", 
    tags: ["WordPress", "PHP", "Java-script"],
    link:"https://hoffertarchitecture.fr/"  },

  { title: "AHC Plumber", 
    img: "./cpt/4.png", 
    description:"AHC Plomberie is a company specializing in all plumbing, heating and bathroom creation work in the Rouen area.", 
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
    title: "Discovery & Strategy",
    content: "We understand your business, users, goals, and technical requirements before development begins.",
    image: "/mine-portfolio/img/acoo/acco4.png",
    
  },
  {
    id: 2,
    title: "UI/UX & Frontend",
    content: "Responsive and interactive interfaces designed around your brand and your users.",
    image: "/mine-portfolio/img/acoo/acco2.png",
  },
  {
    id: 3,
    title: "Backend & API",
    content: "Secure backend architecture, databases, authentication, APIs, integrations, and business logic.",
    image: "/mine-portfolio/img/acoo/acco3.png",
    
  },
  {
    id: 4,
    title: "Full-Stack Development",
    content: "Complete web applications combining frontend, backend, database, and third-party services.",
    image: "/mine-portfolio/img/acoo/acco1.png",
    
  },
  {
    id: 5,
    title: "AI Integration",
    content: "Add AI-powered features such as intelligent search, document analysis, automation, chatbots, and AI assistants.",
    image: "/mine-portfolio/img/acoo/acco5.png",
    
  },
  {
    id: 6,
    title: "Deployment & Support",
    content: "Production deployment, performance optimization, monitoring, maintenance, and continuous improvements.",
    image: "/mine-portfolio/img/acoo/acco6.png",
    
  },
]

const services = [
  {
    title: "Websites & Landing Pages",
    description:
      "Modern, responsive websites designed to communicate your brand, attract customers, and convert visitors.",
    icon: Code2Icon,
  },
  {
    title: "Custom Web Applications",
    description:
      "Business platforms, dashboards, SaaS products, booking systems, and custom applications built around your workflow.",
    icon: Code2Icon,
  },
  {
    title: "Backend & APIs",
    description:
      "Secure and scalable backend systems, REST APIs, databases, authentication, integrations, and business logic.",
    icon: CloudIcon,
  },
  {
    title: "AI-Powered Applications",
    description:
      "Integrate AI models, automation, document processing, intelligent search, chatbots, and other AI capabilities.",
    icon: FolderKeyIcon,
  },
  {
    title: "Performance & Optimization",
    description:
      "Improve loading speed, architecture, SEO, reliability, and overall application performance.",
    icon: BugIcon,
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Docker, cloud deployment, CI/CD, monitoring, updates, and continuous technical support.",
    icon: CloudIcon,
  },
]


const [activeId, setActiveId] = useState<number>(1)

  const activeItem = items.find(item => item.id === activeId)

  // Aboout config
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

  const text =
  "Technology should solve problems, not create more of them."

const text2 =
  "At W_TheCode, we focus on understanding the real problem behind every project. We combine clean architecture, thoughtful interfaces, and reliable engineering to build products that are useful today and ready to evolve tomorrow."


  //process section:
  const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, objectives, audience, and technical requirements."
  },
  {
    number: "02",
    title: "Design & Architect",
    description:
      "We define the user experience and technical architecture before development begins."
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our development process turns the approved concept into a fast, scalable, production-ready product."
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy your product and remain available for optimization, maintenance, and future development."
  }
]

//contact form:
//  const wrapperRef = useRef<HTMLDivElement | null>(null)

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

const scrollToContact = () => {
  const smoother = ScrollSmoother.get()

  if (smoother) {
    smoother.scrollTo("#contact", true)
  } else {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
}
//ouwork
const scrollToWork = () => {
  const smoother = ScrollSmoother.get()

  if (smoother) {
    smoother.scrollTo("#projects", true)
  } else {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }
}

  return (
    <>
    <AppTop/>

    <Preloader />
    <LaserScene />
    <div
      className="relative z-10"
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

      {/* 🌟 FOREGROUND CONTENT */}
      <div id="smooth-wrapper">
      <div id="smooth-content" className="relative z-10 min-h-screen flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
        <main className="lg:grid lg:grid-cols-2 flex flex-col items-center lg:flex-row gap-18 w-full my-20 lg:my-48 h-full max-w-360 px-6">
          <div className="w-full flex-col text-start flex justify-start items-start">

  <p className="text-[16px] text-[#c4aaff] font-mono mb-4">
    // W_TheCode — Digital Development Studio
  </p>

  <h1 className="text-4xl sm:text-5xl text-white lg:text-[58px] font-bold font-satoshi leading-tight">
    We Build Digital Products That Move Businesses Forward.
  </h1>

  <p className="text-[18px] text-white/80 mt-6 max-w-xl font-sans leading-relaxed">
    W_TheCode helps businesses, startups, and entrepreneurs turn ideas
    into modern, high-performance websites and web applications.
  </p>

  <p className="text-[18px] text-white/70 mt-4 max-w-xl font-sans leading-relaxed">
    From strategy and UI development to backend engineering, deployment,
    and long-term support — we handle the entire digital journey.
  </p>

  <div className="flex flex-wrap gap-4 mt-8">

    {/* PRIMARY CTA */}
    <button
      onClick={scrollToContact}
      className="flex items-center gap-2 shadow-inner shadow-[#c4aaff] glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-sm">
      Start a Project
      <ArrowUpRightIcon size={16} />
    </button>

    {/* SECONDARY CTA */}
    <button
      onClick={scrollToWork}
      className="flex items-center gap-2 border border-white/20 hover:border-[#c4aaff]/60 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300"
    >
      View Our Work
      <ArrowUpRightIcon size={16} />
    </button>

  </div>

</div>
          <div className="w-full z-10 h-[40vh] sm:h-[50vh] lg:h-full">
            <img src="./img/Hero-img.webp" alt="Hero-img" />
          </div>
        </main>


        <main className="relative w-full pt-32 h-full max-w-full font-mono justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
            <ConstellationVIIScene/>
          </div>
          <div className="relative z-10 max-w-340 p-8 mx-auto flex flex-col">
            <p className="text-[16px] text-[#c4aaff]">
              // What We Do
            </p>

            <h3 className="text-[48px] font-bold max-w-4xl leading-tight text-white">
              From Idea to Production.
            </h3>
            <div className="flex flex-col lg:flex-row w-full gap-14 h-full  font-mono justify-start">
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl font-mono text-white">
                  {services.map((service) => (
                  <div className="flex flex-col font-sans gap-3 border-b pb-5 border-white/25">
                      <div className="flex justify-between">
                          <h1 className="text-md font-bold">{service.title}</h1>
                          <service.icon className="size-4 text-[#8B5CF6]"/>
                      </div>
                      <p className="text-sm text-gray-300">
                          {service.description}
                      </p>
                  </div>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl gap-3 py-8 rounded-2xl  text-white">
                  <p className="text-md font-sans font-normal max-w-lg">
                    I thrive on solving real-world problems, turning ideas into clean, 
                    maintainable code, and learning through experimentation.  
                    You’ll find me building side projects, diving into new tech stacks, 
                    or simply exploring what’s next in the world of web development.
                  </p>
                  <button
                    onClick={scrollToWork}
                    className="flex justify-start gap-2 shadow-inner shadow-[#c4aaff] glass-surface-lg bg-linear-90 mx-auto from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-sm">
                    DM For Projects
                    <DownloadIcon className="size-4"/>
                  </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-evenly w-full gap-10 lg:gap-16 items-center mx-auto mt-12">
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[6rem] font-sans bg-linear-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent font-bold">10+</h3>
                <p className="text-[16px] font-sans text-white">Years in IT</p>
              </div>
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[6rem] font-sans bg-linear-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent font-bold">5+</h3>
                <p className="text-[16px] font-sans text-white">Years of Professional Experience</p>
              </div>
              <div className="p-7 border-b-2 border-white/25">
                <h3 className="text-3xl sm:text-4xl lg:text-[6rem] font-sans bg-linear-to-r from-[#8B5CF6] to-white bg-clip-text text-transparent font-bold">57+</h3>
                <p className="text-[16px] font-sans  text-white">Web Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* ********************** */}
          <section id="about" className="w-full">
              {/* 🌟 FOREGROUND CONTENT */}
                <div  className="relative z-10 min-h-screen flex h-full flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
                  <main className="flex flex-col font-sans text-center items-center w-full my-20 lg:my-40 h-full max-w-7xl px-6">

                    <p className="text-[16px] text-[#c4aaff]">
                      // About W_TheCode
                    </p>

                    <h1 className="lg:text-[72px] text-[42px] text-white font-semibold max-w-5xl lg:leading-tight">
                      We Turn Ideas Into Digital Products.
                    </h1>

                    <p className="lg:text-[24px] text-lg text-white font-semibold max-w-3xl mt-9 leading-relaxed">
                      <span className="text-[#c4aaff]">{'<studio>'}</span>{" "}
                      W_TheCode is a freelance development studio focused on building
                      modern websites, web applications, SaaS platforms, APIs, and
                      AI-powered digital products.
                      <span className="text-[#c4aaff]">{'</studio>'}</span>
                    </p>

                    <p className="text-md text-gray-400 max-w-2xl mt-6 leading-relaxed">
                      We combine thoughtful architecture, modern technologies, and
                      performance-focused development to create digital experiences
                      that are built for real users and real business needs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">

                      <button
                        onClick={scrollToContact}
                        className="flex items-center gap-2 shadow-inner shadow-[#c4aaff] glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-sm">
                        Start a Project
                        <ArrowUpRightIcon size={16} />
                      </button>
                    </div>
                  </main>


                  <main className=" w-full h-full max-w-full  font-mono justify-center">
                    <div className="max-w-340 p-8 mx-auto flex flex-col">
                      <div
                        ref={wrapperRef}
                        className="flex flex-col items-center justify-center"
                      >
                        {[1].map((i) => (
                          <div key={i} className="container font-sans lg:w-[35vw] my-20">

                            <h2 className="split leading-tight text-center text-[32px] lg:text-[48px] font-semibold text-white will-change-transform opacity-0">
                              {text}
                            </h2>

                            <p className="split text-center text-md text-white/70 mt-6 opacity-0">
                              {text2}
                            </p>

                          </div>
                        ))}
                      </div>
                    </div>
                  </main>

                  {/* ***************** */}

                  <main className=" w-full py-12 h-full max-w-full font-mono justify-center">
                    <div className="max-w-340 p-8 mx-auto flex flex-col">
                      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
                        <p className="text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#c4aaff]">
                          // Experience
                        </p>
                        <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight">
                          Professional Working Experience
                        </h3>
                      </div>
                      <div className="flex items-center text-[#c4aaff] font-bold justify-between gap-1">
                        {"</"}
                        <div className="h-0.5 bg-[#505559] w-[90vw]"/>
                        {">"}
                      </div>
                      <div className="grid grid-cols-1 font-sans md:grid-cols-2 lg:grid-cols-2 items-start gap-16 lg:gap-10 max-w-7xl py-20 px-6">
                        <div className="max-w-md left-0 w-full lg:h-[40%] flex flex-col justify-start">
                          <img src="./img/about/about3.jpg" alt="about3" />
                        </div>
                        <div className="lg:flex w-full lg:max-w-380 max-w-full flex flex-col items-start  lg:justify-start">
                          <div className="flex items-center lg:gap-4 py-5 border-b border-white/30 justify-between w-full">
                            <div>
                              <h3 className="text-[16px] text-white">Digital media mobile</h3>
                              <p className="text-[#c4aaff] text-sm mt-1">2025 - Present</p>
                            </div>
                            <h3 className="text-[16px] text-end text-[#b5b5b5]">Freelance Web Developer</h3>
                          </div>
                          <div className="flex items-center gap-4 py-5 border-b border-white/30 justify-between w-full">
                            <div>
                              <h3 className="text-[16px] text-white">Digital media mobile</h3>
                              <p className="text-[#c4aaff] text-sm mt-1">2024 - 2025</p>
                            </div>
                            <h3 className="text-[16px] text-end text-[#b5b5b5]">Web developer internship</h3>
                          </div>
                          <p className="text-sm text-gray-300 mt-4 max-w-xl">
                            I have a strong background in web development, with experience in both frontend and backend technologies. I have worked on various projects, including e-commerce websites, content management systems, and custom web applications. My expertise includes HTML, CSS, JavaScript, React, Node.js, and database management. I am passionate about creating efficient and user-friendly web solutions that meet the needs of clients and users alike.
                          </p>
                          <button onClick={scrollToContact} className="flex items-center gap-2 shadow-inner shadow-[#c4aaff] my-5 glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-sm">
                            Contact me
                            <ArrowUpRightIcon className="text-xs"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                  {/* ***************** */}
                </div>
          </section>

          {/* ********************** */}

          <section id="projects" className="max-w-340 relative mb-28 mt-44 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">

              <p className="text-[16px] mt-3 text-[#c4aaff]">
                // Selected Work
              </p>

              <h3 className="text-[48px] font-bold max-w-xl leading-tight">
                Digital Experiences Built to Solve Real Problems.
              </h3>

            </div>
            <div className="flex items-center text-[#c4aaff] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 font-sans gap-20 lg:gap-32 mt-12 justify-between items-center">
              <div className="flex flex-col gap-24">
                {cpt.slice(0, 3).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div key={project.title} className="flex flex-col gap-7">
                      <img src={project.img} alt={project.title} className="rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"/>
                      <div className="flex flex-col gap-3">
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <p className="text-sm text-gray-300">{project.description}</p>
                        <div className="flex gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[14px] font-sans bg-[#2E2E2E] text-[#c4aaff] py-1  px-3 rounded-3xl">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-col font-sans gap-24">
                {cpt.slice(3,6).map((project) => (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div key={project.title} className="flex flex-col gap-7">
                    <img src={project.img} alt={project.title} className="rounded-lg scale-100 lg:scale-[1.09] hover:scale-100 transition-all duration-700 object-cover h-64 sm:h-80 lg:h-96 w-full"/>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <p className="text-sm text-gray-300">{project.description}</p>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[14px] font-sans bg-[#2E2E2E] text-[#c4aaff] py-1  px-3 rounded-3xl">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
        <main className=" w-full  h-full max-w-full bg-[#131313] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-[16px] mt-3 text-[#c4aaff]">// Service</p>
              <h3 className="text-[48px] font-bold max-w-xl leading-tight">
                 Everything You Need to Build Your Digital Product.
              </h3>
            </div>
            <div className="flex items-center text-[#c4aaff] font-bold justify-between gap-1">
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
                    className={`border-b border-white/45 py-5 cursor-pointer transition-all duration-300 text-white`}
                    onClick={() => setActiveId(item.id)}
                  >
                    <h3 className="text-lg flex justify-between font-semibold font-sans">
                      {item.title}
                      {
                        isActive ? (
                          <p className="text-lg text-white/50 flex justify-between font-normal font-sans">
                            ( 0{item.id} )
                          </p>
                        ) : (
                          <PlusIcon className="text-[#c4aaff]"/>
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
                    <button onClick={scrollToContact} className={`mt-4 text-[#c4aaff] underline underline-offset-8 items-center gap-2 font-mono text-sm ${isActive ? "flex" : "text-[1px] mt-0 opacity-0 pointer-events-none"}`}>
                      Hire me
                      <ArrowUpRightIcon className="text-xs"/>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </main>

        {/* ***************** */}

        <main className=" w-full py-12 h-full max-w-full bg-[#191818] font-mono justify-center">
          <div className="max-w-340 p-8 mx-auto flex flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-6 py-8 rounded-2xl font-sans text-white">
              <p className="text-sm sm:text-[16px] mt-1 lg:mt-3 text-[#c4aaff]">
                // Process
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-bold max-w-xl leading-tight">
                My Development work Process
              </h3>
            </div>
            <div className="flex items-center text-[#c4aaff] font-bold justify-between gap-1">
              {"</"}
              <div className="h-0.5 bg-[#505559] w-[90vw]"/>
              {">"}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-sans items-start gap-16 lg:gap-32 max-w-7xl mx-auto pb-20 px-6">
            {process.map((step) => (
              <div className="pl-12">
              <h3 className="text-7xl sm:text-8xl lg:text-[158px] font-bold bg-linear-to-r from-[#8B5CF6] to-white/80 bg-clip-text text-transparent">{step.number}</h3>
              <p className="text-[22px] text-white font-semibold">{step.title}</p>
              <p className="text-sm text-gray-300 mt-4 max-w-xl">
                {step.description}
              </p>
            </div>
            ))}
          </div>
        </main>

        <section className="flex flex-col py-15 bg-black/40">
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

        <main className=" w-full h-full max-w-full bg-[#131313] font-mono justify-center">
          <section id="contact" className="max-w-340 p-8 mx-auto flex flex-col">
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

                  {/* 🌟 FOREGROUND CONTENT */}
                  <div className="relative z-10 min-h-full flex flex-col items-center pt-6 text-[#1b1b18] lg:justify-center">
                    <main className="grid lg:grid-cols-2 gap-16 font-sans items-center w-full h-full max-w-7xl px-6">
                        <div className="flex flex-col gap-6">
                            <p className="text-[16px] text-[#c4aaff]">// Get In Touch</p>
                            <h2 className="text-4xl lg:text-6xl font-bold text-white max-w-3xl">
                              Have an Idea?
                              <br />
                              Let's Build It.
                            </h2>
                            <p className="text-[16px] text-[#b5b5b5] max-w-lg">
                                  Tell us what you're building, what problem you're solving, and what you need. We'll get back to you and discuss the next steps.
                            </p>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                                <a target='_blank' href="https://github.com/theelh" className="flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full">
                                    Github
                                    <SquareArrowOutUpRight className="text-md"/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/marwane-elhosni/" className="flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full">
                                    LinkedIn
                                    <SquareArrowOutUpRight className="text-md"/>
                                </a>
                                <a target='_blank' href="https://www.instagram.com/codeaurum77/" className="flex lg:mx-auto hover:rotate-x-180 transition-all duration-700 items-center gap-2 hover:bg-white hover:text-[#131313] border-b border-white text-white py-3 px-3 hover:rounded-full">
                                    Instagram
                                    <SquareArrowOutUpRight className="text-md"/>
                                </a>
                            </div>
                        </div>
                        <div>
                  <form onSubmit={submit} className="lg:w-105 w-80 p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex flex-col gap-6">

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
