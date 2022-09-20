import { useRef } from "react";
import { Parent } from "./components/Parent";
import "./App.css";

function App() {
  const headerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    headerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Parent headerRef={headerRef} />
      <div className="box violet"></div>
      <div className="box blue"></div>
      <div className="box yellow"></div>
      <div className="box red"></div>
      <button onClick={handleClick} className="frame blue">
        Scroll to the top
      </button>
    </div>
  );
}

export default App;
