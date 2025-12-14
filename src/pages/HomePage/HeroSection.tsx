import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaMapLocationDot, FaWallet } from "react-icons/fa6";
import SvgBottomLeft from "./SvgBottomLeft";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[70vh] w-full">
      <SvgBottomLeft />
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 py-4">
          <h1 className="text-5xl font-bold tracking-wide text-yellow-300">
            Rush Parking App
          </h1>
          <h2 className="text-yellow-400">A speedy solution untuk kebutuhan parkir anda</h2>
        </div>
        <TypeAnimation
          sequence={[
            "Ingin Cari Parkir?",
            1000,
            "Ribet?",
            1000,
            "Ribet? Susah?",
            1000,
            "Ribet? Susah? Capek?",
            1000,
            "Ada Rush Parking Assitant siap untuk membantu anda :)",
            1000,
          ]}
          wrapper="h3"
          className="max-w-[70vw] text-center"
          speed={50}
          repeat={Infinity}
        />

        <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-2 md:gap-8 md:py-12">
          <NavLink to="/map" className="group">
            <button className="relative aspect-square h-auto w-[150px] rounded-lg md:w-[200px]">
              <div className="absolute -inset-[1px] aspect-auto h-auto w-[152px] rounded-lg bg-gradient-to-tr from-yellow-400 to-yellow-900 blur-sm duration-200 ease-in group-hover:blur md:w-[202px]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-white">
                <div className="relative flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-4 md:p-8">
                  <div className="flex flex-col items-center space-y-3">
                    <h2 className="text-md md:text-2xl font-bold uppercase text-yellow-300">
                      Pilih Destinasi
                    </h2>
                    <FaMapLocationDot size={45} color="#ffaa00" />
                  </div>
                </div>
              </div>
            </button>
          </NavLink>
          <NavLink to="/walletselect" className="group">
            <button className="relative aspect-square h-auto w-[150px] rounded-lg md:w-[200px]">
              <div className="absolute -inset-[1px] aspect-auto h-auto w-[152px] rounded-lg bg-gradient-to-tr from-yellow-400 to-yellow-900 blur-sm duration-200 ease-in group-hover:blur md:w-[202px]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-white">
                <div className="relative flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-4 md:p-8">
                  <div className="flex flex-col items-center space-y-3">
                    <h2 className="text-md md:text-2xl font-bold uppercase text-yellow-300">
                      Pengaturan E-Wallet
                    </h2>
                    <FaWallet size={45} color="#ffaa00" />
                  </div>
                </div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;