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
    if (!sectionRef.current || !imageRef.current) return

    const ctx = gsap.context(() => {
      // --------------------------
      // IMAGE SCALE ON SCROLL
      // --------------------------
      gsap.fromTo(
        imageRef.current,
        { scale: 1.7 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        }
      )

      // --------------------------
      // ICONS CIRCULAR RANDOM ANIMATION
      // --------------------------
      const icons: HTMLDivElement[] = Array.from(
        sectionRef.current!.querySelectorAll(".floating-icon")
      )

      const minRadius = 300  // minimum distance from center
      const maxRadius = 300  // maximum distance from center

      gsap.fromTo(
        icons,
        { opacity: 0, scale: 0, x: 0, y: 0 },
        {
          opacity: 1,
          scale: 1,
          x: () => {
            const angle = Math.random() * Math.PI * 2
            const radius = minRadius + Math.random() * (maxRadius - minRadius)
            return radius * Math.cos(angle)
          },
          y: () => {
            const angle = Math.random() * Math.PI * 2
            const radius = minRadius + Math.random() * (maxRadius - minRadius)
            return radius * Math.sin(angle)
          },
          rotation: () => Math.random() * 360,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
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

  const colors = [
    "#5B51CA", "#5B51CA", "#5B51CA", "#5B51CA",
    "#5B51CA", "#5B51CA", "#5B51CA", "#5B51CA",
    "#5B51CA", "#5B51CA", "#5B51CA", "#5B51CA",
  ]

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center h-[650px] w-screen overflow-hidden"
    >
      {/* ICONS */}
      {iconsArray.map((Icon, idx) => (
        <div
          key={idx}
          className={`floating-icon absolute z-20 blur-[2px]`}
          style={{ color: colors[idx % colors.length] }}
        >
          <Icon size={50} />
        </div>
      ))}

      {/* IMAGE */}
      <div className="w-80 overflow-hidden z-50">
        <img
          ref={imageRef}
          src="./img/about/about1.png"
          alt="Zoom"
          className="w-96 h-100 object-cover"
        />
      </div>
    </section>
  )
}
