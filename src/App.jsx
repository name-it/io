import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
