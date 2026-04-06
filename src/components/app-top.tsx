import i18next from "i18next"
import { ArrowRightIcon,  Menu, X } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import AppLogo from "./app-logo"
import { Link } from "react-router-dom"

interface NavItem {
  title: string
  href: string
}

const AppTop: React.FC = () => {
  const isRTL: boolean = i18next.language === "ar"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const lastScrollY = useRef(0)
  const currentPath = window.location.pathname

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
    { title: "About", href: "/about" },
    { title: "Project", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={`
        fixed top-4 left-1/2 py-1 -translate-x-1/2 z-50
        w-[95%] max-w-7xl
        rounded-3xl
        transition-all duration-500 ease-out
        shadow-xl shadow-[#5B51CA]/15
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
        }
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-[#5B51CA]/15"
            : "bg-white/80 border border-white/0"
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
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-3 py-2 text-md font-medium transition-all
                  ${
                    currentPath === item.href
                      ? "text-[#5B51CA]"
                      : "text-[#1a2121]"
                  }
                  hover:text-[#5B51CA]
                `}
              >
                {item.title}

                {currentPath === item.href && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-[#5B51CA]" />
                )}
              </Link>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:flex items-center">
            <a
            href="/contact"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 border border-[#c0c0c0] bg-[#5B51CA] text-white px-4 py-2 rounded-md text-lg "
          >
            Send message
            <ArrowRightIcon size={16} />
          </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-black/70 hover:text-black transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 bg-white/90 backdrop-blur-xl rounded-b-3xl">

          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium transition-colors
                ${
                  currentPath === item.href
                    ? "text-[#5B51CA]"
                    : "text-[#1a2121]"
                }
                hover:text-[#5B51CA]
              `}
            >
              {item.title}
            </Link>
          ))}

          <a
            href="/contact"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 border border-[#c0c0c0] bg-[#5B51CA] text-white px-4 py-2 rounded-md text-lg mt-4"
          >
            Send us a message
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppTop
