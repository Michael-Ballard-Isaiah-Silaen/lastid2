import { useState } from "react";
import { FaCheckCircle, FaWallet } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

const WalletSelectPage = () => {
  const [selectedWallet, setSelectedWallet] = useState<string>("GoPay");
  const wallets = [
    { id: "gopay", name: "GoPay", balance: "Rp 150.000" },
    { id: "ovo", name: "OVO", balance: "Rp 75.000" },
    { id: "shopeepay", name: "ShopeePay", balance: "Rp 210.500" },
    { id: "dana", name: "DANA", balance: "Rp 45.000" },
    { id: "linkaja", name: "LinkAja", balance: "Rp 12.000" },
  ];

  return (
    <div className="flex w-full grow flex-col items-center px-6 pt-24 pb-10">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Select E-Wallet</h1>
          <p className="mt-2 text-gray-500">
            Pilih e-wallet yang ingin Anda gunakan untuk pembayaran parkir
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => setSelectedWallet(wallet.name)}
              className={`relative flex w-full items-center justify-between rounded-xl border-2 px-4 py-4 transition-all duration-200 ${
                selectedWallet === wallet.name
                  ? "border-yellow-400 bg-yellow-50 shadow-md"
                  : "border-gray-100 bg-white hover:border-yellow-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    selectedWallet === wallet.name
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {wallet.name === "GoPay" ? (
                    <FaWallet size={20} />
                  ) : (
                    <FaMoneyBillWave size={20} />
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-800">{wallet.name}</span>
                  <span className="text-sm font-medium text-gray-500">
                    {wallet.balance}
                  </span>
                </div>
              </div>
              {selectedWallet === wallet.name && (
                <FaCheckCircle className="text-yellow-400" size={24} />
              )}
            </button>
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg bg-gray-800 py-3 font-bold text-white transition-colors hover:bg-black">
          Confirm {selectedWallet}
        </button>
      </div>
    </div>
  );
};

export default WalletSelectPage;