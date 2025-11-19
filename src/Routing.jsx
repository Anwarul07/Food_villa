import { createRoot } from "react-dom/client";
import { Shimmer } from "./Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Error } from "./Error";
import { About } from "./About";
import { Service } from "./Service";
import { Contact } from "./Contact";
import { Cart } from "./Cart";
import { Signup } from "./Signup";
import Body from "./Body";
import MenuDetails from "./MenuDetails";
import ProfileClass from "./ProfileClass";
import { lazy, Suspense } from "react";
import Layout from "./Layout";

// import  {Instamart } from "./Instamart";

const Instamart = lazy(() => import("./Instamart"));
export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        // path: "/Body",
        path: "/",
        element: (
          <Body
            drill={{
              name: "anwar",
              email: "official",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "clsabout", //About/cabout
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/shimmer",
        element: <Shimmer />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/menu/:sk",
        element: <MenuDetails />,
      },
    ],
  },
]);

//Root
const root = createRoot(document.getElementById("root"));

//Render
root.render(<RouterProvider router={Routing} />);
