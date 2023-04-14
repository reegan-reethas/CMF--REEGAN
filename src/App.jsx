import { useState } from "react";
import Slider from "./components/Slider";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <div className="App h-screen bg-slate-300">
      <Slider />
    </div>
  );
}

export default App;
