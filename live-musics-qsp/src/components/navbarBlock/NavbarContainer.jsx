import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const NavbarContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`h-[70px] drop-shadow-[0_5px_5px_rgba(255,255,255,0.07)] sticky top-0 left-0 z-10 transition-all duration-300 ${isScrolled ? "bg-[#e3e2ed40] backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <article className="m-auto h-[70px] flex w-[90%] items-center justify-between">
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default NavbarContainer;
