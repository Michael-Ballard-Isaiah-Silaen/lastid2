import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MapPage from "../pages/MapPage";
import HomePage from "../pages/HomePage/HomePage";
import ParkingChoicePage from "../pages/ParkingChoicePage";
import WalletSelectPage from "../pages/WalletSelectPage";
import ParkingSlotOption from "../pages/ParkingSlotOption";
import NavigasiPage from "../pages/NavigasiPage";
import DuringParkingPage from "../pages/DuringParkingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "parkingchoice",
        element: 
        <ParkingChoicePage />,
      },
      {
        path: "walletselect",
        element: <WalletSelectPage />,
      },
      {
        path: "/parkingslotoption",
        element: <ParkingSlotOption />,
      },
      {
        path: "navigasi",
        element: <NavigasiPage />,
      },
      {
        path: "duringparking",
        element: <DuringParkingPage />,
      },
    ],
  },
]);

export default router;