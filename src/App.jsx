import { useState } from "react";
import Slider from "./components/Slider";
import { SliderData } from "./data/SliderData";

function App() {
  const [count, setCount] = useState(0);

  const { data } = SliderData;

  return (
    <div className="App">
      <Slider />
    </div>
  );
}

export default App;
