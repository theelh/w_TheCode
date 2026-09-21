"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Star,
  Heart,
  Zap,
  Shield,
  Code2Icon,
  CodeIcon,
  CodeXmlIcon,
  FileCode2Icon,
  Database,
  Cpu,
  Terminal,
  Server
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ZoomScrollImage() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
  let ctx: any

  const initGSAP = async () => {
    if (!sectionRef.current || !imageRef.current) return

    const gsapModule = await import("gsap")
    const ScrollTriggerModule = await import("gsap/ScrollTrigger")

    const gsap = gsapModule.default
    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger

    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {

      // IMAGE SCALE
      gsap.fromTo(
        imageRef.current,
        { scale: 1.7 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      )

      // ICONS
      const icons = Array.from(
        sectionRef.current!.querySelectorAll(".floating-icon")
      )

      const minRadius = 250
      const maxRadius = 400

      icons.forEach((icon) => {
        const angle = Math.random() * Math.PI * 2
        const radius = minRadius + Math.random() * (maxRadius - minRadius)

        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            x: radius * Math.cos(angle),
            y: radius * Math.sin(angle),
            rotation: Math.random() * 360,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      })

    }, sectionRef)

    ScrollTrigger.refresh()
  }

  initGSAP()

  return () => ctx?.revert()
}, [])

  const iconsArray = [
    CodeIcon,
    CodeXmlIcon,
    FileCode2Icon,
    Shield,
    Star,
    Heart,
    Zap,
    Code2Icon,
    Database,
    Cpu,
    Terminal,
    Server,
  ]

  const colors = Array(12).fill("#5B51CA")

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-165.5 w-screen overflow-hidden"
    >
      {/* ICONS */}
      {iconsArray.map((Icon, idx) => (
        <div
          key={idx}
          className="floating-icon absolute z-20 blur-[2px]"
          style={{ color: colors[idx % colors.length] }}
        >
          <Icon size={50} />
        </div>
      ))}

      {/* IMAGE */}
      <div className="overflow-hidden z-50">
        <img
          ref={imageRef}
          src="./img/about/about1.png"
          alt="Zoom"
          className="w-96 h-auto object-cover"
        />
      </div>
    </section>
  )
}