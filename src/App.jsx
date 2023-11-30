import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BackgroundRemover from "./pages/BackgroundRemover";
import ImageGenerator from "./pages/ImageGenerator";
import ImageResizer from "./pages/ImageResizer";
import Calculator from "./pages/Calculator";

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
    {
      path: "/image-generator",
      element: <ImageGenerator />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
    {
      path: "/image-resizer",
      element: <ImageResizer />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
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
