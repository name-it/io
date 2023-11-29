import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BackgroundRemover from "./pages/BackgroundRemover";

// Create router
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
    {
      path: "/background-remover",
      element: <BackgroundRemover />,
    },
  ],
  {
    basename: "/io/",
  }
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
