import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import { DoperaiderMap } from "./pages/MapScreen";
import { MapChinatownScreen } from "./pages/MapChinatownScreen";
import { MarketTradeScreen } from "./pages/MarketTradeScreen";
import { ProductionScreen } from "./pages/ProductionScreen";
import { MarketScreen } from "./pages/MarketScreen";
import { TrophiesScreen } from "./pages/TrophiesScreen";
import { InventoryScreen } from "./pages/InventoryScreen";
import { SocialScreen } from "./pages/SocialScreen";
import { UpgradesScreen } from "./pages/UpgradesScreen";
import { ActiveRaidScreen } from "./pages/ActiveRaidScreen";
import { RaidPlayersScreen } from "./pages/RaidPlayersScreen";
import { RaidProtectedPlayerScreen } from "./pages/RaidProtectedPlayerScreen";
import { AirdropScreen } from "./pages/AirdropScreen";
import { IntroScreen } from "./pages/IntroScreen";
import { RaidLobbyScreen } from "./pages/RaidLobbyScreen";
import { RaidWinScreen } from "./pages/RaidWinScreen";
import {ErrorComp} from "./mini-components/ErrorComp";
import {ShareScreen} from "./pages/ShareScreen"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroScreen />,
  },
  {
    path: "/player/inventory",
    element: <InventoryScreen />,
  },
  {
    path: "/player/trophies",
    element: <TrophiesScreen />,
  },
  {
    path: "/player/social",
    element: <SocialScreen />,
  },
  {
    path: "/player/upgrades",
    element: <UpgradesScreen />,
  },
  {
    path: "/map",
    element: <DoperaiderMap />,
  },
  {
    path: "/map/chinatown",
    element: <MapChinatownScreen />,
  },
  {
    path: "/market",
    element: <MarketScreen />,
  },
  {
    path: "/market/trade",
    element: <MarketTradeScreen />,
  },
  {
    path: "/production",
    element: <ProductionScreen />,
  },
  {
    path : "/share",
    element: <ShareScreen />,
  },
  {
    path: "/raid",
    element: <RaidLobbyScreen />,
  },
  {
    path: "/raid/active",
    element: <ActiveRaidScreen />,
  },
  {
    path : "/raid/win",
    element: <RaidWinScreen />,
  },
  {
    path: "/raid/players",
    element: <RaidPlayersScreen />,
  },
  {
    path: "/raid/players/protected",
    element: <RaidProtectedPlayerScreen />,
  },
  {
    path: "/raid/win",
    element: <RaidWinScreen />,
  },
  {
    path: "/airdrop",
    element: <AirdropScreen />,
  },
  {
    path : "/error",
    element : <ErrorComp />,
  },
  {
    path: "*",
    element: <IntroScreen />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;