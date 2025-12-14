import { useNavigate } from "react-router-dom";

const NavigasiPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full grow flex-col items-center gap-8 px-6 pt-24 pb-10">
      <img
        src="/NavigasiDisplay.png"
        alt="Navigasi"
        className="h-auto w-full max-w-2xl rounded-xl object-contain shadow-lg"
      />
      <button
        onClick={() => navigate("/duringparking")}
        className="rounded-lg bg-yellow-400 px-12 py-3 text-xl font-bold text-white shadow-md transition-all hover:bg-yellow-500 hover:shadow-lg active:scale-95"
      >
        Sudah Parkir
      </button>
    </div>
  );
};

export default NavigasiPage;