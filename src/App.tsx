import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Primiera from "./pages/Primiera";
// import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/primiera", element: <Primiera /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
