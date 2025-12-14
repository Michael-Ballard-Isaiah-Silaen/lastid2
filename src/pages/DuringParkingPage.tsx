const DuringParkingPage = () => {
    return (
      <div className="flex w-full grow flex-col items-center gap-8 px-6 pt-24 pb-10">
        <img
          src="/DuringParking.png"
          alt="During Parking"
          className="h-auto w-full max-w-2xl rounded-xl object-contain shadow-lg"
        />
        
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Anda sedang parkir di Area D
          </h1>
          
          <div className="flex flex-col gap-2 rounded-lg bg-gray-50 p-6 shadow-sm">
            <p className="text-lg font-medium text-gray-600">
              Durasi Sesi Parkir: <span className="font-bold text-gray-800">2 jam 33 menit 47 detik</span>
            </p>
            <p className="text-lg font-medium text-gray-600">
              Estimasi Biaya: <span className="font-bold text-green-600">Rp 7.000</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DuringParkingPage;