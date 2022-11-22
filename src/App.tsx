import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Ukraine from "./components/UkraineSt";
import World from "./components/WorldSt";


const App = () => {
  return (
    
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/ukraine/*" element={<Ukraine />} />
          <Route path="/world/*" element={<World />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
