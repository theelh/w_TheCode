import { Menu, SquareArrowOutUpRight, X } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import AppLogo from "./app-logo"
import { Link, useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother"

interface NavItem {
  title: string
  href: string
}

const AppTop: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const lastScrollY = useRef(0)
  const location = useLocation(); // ✅ hook to get current route
  const currentPath = location.pathname;

  //scrolleffect
  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  if (!href.startsWith("#")) return

  e.preventDefault()

  const target = document.querySelector(href)

  if (!target) {
    console.warn(`Element ${href} not found`)
    return
  }

  const smoother = ScrollSmoother.get()

  if (smoother) {
    smoother.scrollTo(target, true, "top 100px")
  } else {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  window.history.pushState(null, "", href)
  setIsOpen(false)
}

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction =
        currentScrollY > lastScrollY.current ? "down" : "up"

      setIsScrolled(currentScrollY > 20)

      if (direction === "down" && currentScrollY > 100) {
        setIsVisible(false)
      }

      if (direction === "up") {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ]


  return (
    <header
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-360
        rounded-3xl
        transition-all duration-500 ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
        }
        ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border border-[#c4aaff]/40 shadow-xl shadow-[#c4aaff]/35"
            : "bg-transparent"
        }
      `}
    >
      <div className="px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <AppLogo />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-all
                  ${
                    currentPath === item.href
                      ? "text-blue-200"
                      : "text-white"
                  }
                  hover:text-white/70
                `}
              >
                {item.title}

                {currentPath === item.href && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-[#8B5CF6]" />
                )}
              </a>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className=" md:flex items-center">
            <a
                href="https://github.com/theelh"
                target="_blank"
                className="flex items-center gap-2 shadow-inner shadow-[#c4aaff] glass-surface-lg bg-linear-90 from-[#8B5CF6]  to-[#c4aaff]/20 border border-white/10 border-spacing-5 text-white px-7 py-3 font-semibold rounded-full text-sm">
              My Github
              <SquareArrowOutUpRight size={16} />
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 bg-black/90 backdrop-blur-xl rounded-b-3xl">

          {navItems.map((item) => (
            <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base font-medium transition-colors
                ${
                  currentPath === item.href
                    ? "text-[#7AF298]"
                    : "text-white"
                }
                hover:text-[#7AF298]
              `}
            >
              {item.title}
            </a>
          ))}

          <a
            // href="/mine-portfolio/files/Mine-cv.pdf"
            href="https://github.com/theelh"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 border border-[#c0c0c0] bg-[#7af298] text-black px-4 py-2 rounded-md font-mono text-sm mt-4"
          >
            My Github
            <SquareArrowOutUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppTop