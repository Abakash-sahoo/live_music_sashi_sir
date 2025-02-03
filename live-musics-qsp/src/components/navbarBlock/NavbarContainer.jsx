import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
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
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={`h-[70px] z-40 sticky top-0 transition-all duration-300 
            ${isScrolled ? " backdrop-blur-md shadow-md" : "bg-[#dc9aff1c]"}`}
        >
            <article className='m-auto h-[70px] flex w-[90%] items-center justify-between'>
                <Logo />
                <Menu />
            </article>
        </section>
    );
};

export default Navbar;
