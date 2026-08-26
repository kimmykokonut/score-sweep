import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Primiera from "./pages/Primiera";
import ScoreCard from "./pages/ScoreCard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/primiera", element: <Primiera /> },
  { path: "/score", element: <ScoreCard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
