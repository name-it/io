import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

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
