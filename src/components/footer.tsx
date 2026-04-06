import { useTranslation } from "react-i18next";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    external?: boolean;
  }[];
}


const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const menuItems: MenuItem[] = [
    {
      title: t("footer.quickLinks", "Quick Links"),
      links: [
        { text: t("nav.home", "Home"), url: "/" },
        { text: t("nav.about", "About"), url: "/about" },
        { text: t("nav.projects", "Projects"), url: "/projects" },
        { text: t("nav.contact", "Contact"), url: "/contact" },
      ],
    },
    {
      title: t("footer.resources", "Portfolio Resources"),
      links: [
        {
          text: "GitHub",
          url: "https://github.com/theelh",
          external: true,
        },
      ],
    },
    {
      title: t("footer.social", "Social Links"),
      links: [
        {
          text: "Instagram",
          url: "https://www.instagram.com/codeaurum77/",
          external: true,
        },
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/marwane-elhosni/",
          external: true,
        },
      ],
    },
  ];

  return (
    <section className="pt-24 pb-12 bg-black">
      <footer className="mx-auto w-full max-w-7xl px-6">

        {/* Top Divider */}
        <div className="flex items-center text-[#7af298] font-bold justify-between gap-3 mb-16">
          {"</"}
          <div className="h-px bg-[#505559] w-full" />
          {">"}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div>
            <img
              src="./img/logo/logo.jpg"
              className="rounded-2xl w-40 h-40 object-cover"
              alt="Marwane Elhosni Logo"
            />
            <p className="mt-4 font-semibold text-[#e8e8e6] text-lg">
              W_TheCode
            </p>
            <p className="text-sm text-gray-400 mt-2">
              {t("footer.tagline", "Building modern, scalable web experiences.")}
            </p>
          </div>

          {/* Dynamic Menu Sections */}
          {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-5 font-semibold text-lg text-white">
                {section.title}
              </h3>
              <ul className="space-y-3 text-[#bcb0b0]">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="transition-colors duration-200 hover:text-white hover:underline"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-[#2a2a2a] pt-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear} W_TheCode. {t("footer.rights", "All rights reserved.")}
          </p>
          <p className="text-xs text-gray-500">
            Built with React + Tailwind
          </p>
        </div>

      </footer>
    </section>
  );
};

export { Footer };
