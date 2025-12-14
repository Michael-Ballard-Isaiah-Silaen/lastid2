import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ParkingSlotOption = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const slots = [
    { id: "A1", label: "Area A1", filled: 2, capacity: 5 },
    { id: "A2", label: "Area A2", filled: 5, capacity: 5 },
    { id: "B1", label: "Area B1", filled: 3, capacity: 5 },
    { id: "B2", label: "Area B2", filled: 5, capacity: 5 },
    { id: "C1", label: "Area C1", filled: 1, capacity: 5 },
    { id: "C2", label: "Area C2", filled: 4, capacity: 5 },
  ];

  return (
    <div className="flex w-full grow flex-col gap-8 px-6 pt-24 pb-10 md:flex-row md:items-start md:justify-between md:px-24">
      <div className="flex w-full items-center justify-center md:w-1/2">
        <img
          src="/SlotOptions.png"
          alt="Parking Slot Map"
          className="h-auto w-full rounded-xl object-contain shadow-lg"
        />
      </div>
      <div className="flex w-full flex-col gap-6 md:w-1/2 md:pl-10">
        <h1 className="text-center text-3xl font-bold text-gray-800 md:text-left">
          Pilih Slot Parkir
        </h1>
        <div className="flex flex-col gap-4">
          {slots.map((slot) => {
            const isFull = slot.filled >= slot.capacity;
            const isSelected = selectedSlot === slot.id;

            return (
              <button
                key={slot.id}
                onClick={() => !isFull && setSelectedSlot(slot.id)}
                disabled={isFull}
                className={`group flex w-full items-center justify-between rounded-lg px-6 py-4 shadow-md transition-all 
                  ${
                    isFull
                      ? "bg-red-500 cursor-not-allowed opacity-90"
                      : isSelected
                      ? "bg-green-600 ring-4 ring-green-300 scale-[1.01]"
                      : "bg-green-500 hover:bg-green-600 active:scale-[0.99]"
                  }
                `}
              >
                <span className="text-xl font-bold text-white shadow-black drop-shadow-sm">
                  {slot.label}
                </span>
                <div className="rounded-full bg-black/20 px-4 py-1 font-bold text-white backdrop-blur-sm">
                  {slot.filled}/{slot.capacity}
                </div>
              </button>
            );
          })}
        </div>

        {selectedSlot && (
          <button
            onClick={() => navigate("/navigasi")}
            className="mt-2 flex w-full animate-pulse items-center justify-between rounded-lg bg-yellow-400 px-6 py-4 shadow-md transition-all hover:animate-none hover:bg-blue-700 active:scale-[0.99]"
          >
            <span className="text-xl font-bold text-white shadow-black drop-shadow-sm">
              Mulai Navigasi
            </span>
            <FaArrowRight className="text-white" size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ParkingSlotOption;