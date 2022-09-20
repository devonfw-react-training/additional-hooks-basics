import "./App.css";
import { Parent } from "./components/Parent";

function App() {
  return (
    <div className="App">
      <Parent />
      <div className="box violet"></div>
      <div className="box blue"></div>
      <div className="box yellow"></div>
      <div className="box red"></div>
    </div>
  );
}

export default App;
