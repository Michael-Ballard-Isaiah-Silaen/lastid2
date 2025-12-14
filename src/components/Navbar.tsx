import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { IoIosSpeedometer } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-[100] flex w-screen items-center justify-between px-6 font-[500] duration-100 ease-in lg:px-24",
        isScrolled ? "h-16 bg-white/80 shadow-md backdrop-blur-md" : "h-20 bg-white"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <IoIosSpeedometer className="h-8 w-8 text-yellow-400" />
        <NavLink
          to="/"
          className="cursor-pointer text-2xl font-bold tracking-wide text-yellow-400"
        >
          Rush Parking
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;