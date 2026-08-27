import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import WorkIndex from "./pages/WorkIndex";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Gallery from "./pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: WorkIndex },
      { path: "work/:slug", Component: CaseStudy },
      { path: "about", Component: About },
      { path: "resume", Component: Resume },
      { path: "gallery", Component: Gallery },
    ],
  },
]);
