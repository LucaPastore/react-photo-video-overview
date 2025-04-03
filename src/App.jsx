import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BeachesPage from "./pages/Beaches";
import IslandPage from "./pages/Islands";
import JourneysPage from "./pages/Journeys";
import RootLayout from "./pages/RootLayout";
import { loader as beachesLoader } from "./pages/Beaches";
import { loader as islandsLoader } from "./pages/Islands";
import { loader as journeysLoader } from "./pages/Journeys";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BeachesPage />,
        loader: beachesLoader,
      },
      {
        path: "/islands",
        element: <IslandPage />,
        loader: islandsLoader,
      },
      {
        path: "/journeys",
        element: <JourneysPage />,
        loader: journeysLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
