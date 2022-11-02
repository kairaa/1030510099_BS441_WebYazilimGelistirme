import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { NormalMode } from "./components/GameMods/NormalMode";
import { MemoryMode } from "./components/GameMods/MemoryMode";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="normal" element={<NormalMode></NormalMode>}></Route>
          <Route path="memory" element={<MemoryMode></MemoryMode>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
