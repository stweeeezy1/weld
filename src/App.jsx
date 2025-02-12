import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading.jsx";
import { motion, useSpring, useScroll } from "motion/react";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const Info = lazy(() => import("./components/Info/Info.jsx"));
const Services = lazy(() => import("./components/Services/Services.jsx"));
const Courses = lazy(() => import("./components/courses/courses.jsx"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio.jsx"));
const Cooperation = lazy(() =>
  import("./components/cooperation/cooperation.jsx")
);
const Quest = lazy(() => import("./components/Quest/quest.jsx"));
const Footer = lazy(() => import("./components/footer/footer.jsx"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Info />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Courses />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Cooperation />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Quest />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
