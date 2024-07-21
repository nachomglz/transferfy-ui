import { Layout } from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpotifyHome } from "./pages/Spotify/SpotifyHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <h2>Home</h2>,
      },
      {
        path: "/spotify",
        element: <SpotifyHome />,
      },
      {
        path: "/settings",
        element: <h2>Settings</h2>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
