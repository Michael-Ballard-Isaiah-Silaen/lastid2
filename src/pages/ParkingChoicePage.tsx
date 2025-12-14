import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ParkingChoicePage = () => {
  const navigate = useNavigate();
  const areas = ["Area A", "Area B", "Area C", "Area D", "Area E"];

  return (
    <div className="flex w-full grow flex-col gap-8 px-6 pt-24 pb-10 md:flex-row md:items-start md:justify-between md:px-24">
      <div className="flex w-full items-center justify-center md:w-1/2">
        <img
          src="/ParkArea.png"
          alt="Parking Areas Map"
          className="h-auto w-full rounded-xl object-contain shadow-lg"
        />
      </div>
      <div className="flex w-full flex-col gap-6 md:w-1/2 md:pl-10">
        <h1 className="text-center text-3xl font-bold text-gray-800 md:text-left">
          Opsi Area Parkir
        </h1>
        <div className="flex flex-col gap-4">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => navigate("/parkingslotoption")}
              className="group flex w-full items-center justify-between rounded-lg bg-yellow-400 px-6 py-4 shadow-md transition-all hover:bg-yellow-500 hover:shadow-lg active:scale-[0.99]"
            >
              <span className="text-xl font-bold text-white shadow-black drop-shadow-sm">
                {area}
              </span>
              <div className="rounded-full bg-white/20 p-2 transition-transform duration-200 group-hover:translate-x-1">
                <FaArrowRight className="text-white" size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingChoicePage;