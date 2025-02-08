import Header from "./components/Header/Header.jsx";
import Info from "./components/Info/Info.jsx";
import Services from "./components/Services/Services.jsx";
import Courses from "./components/courses/courses.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Cooperation from "./components/cooperation/cooperation.jsx";
import Quest from "./components/Quest/quest.jsx";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Info />
      <Services />
      <Courses />
      <Portfolio />
      <Cooperation />
      <Quest />
    </div>
  );
}
