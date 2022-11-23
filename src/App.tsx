import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPage from "./components/InfoPage";
import NavBar from "./components/NavBar";
import Ukraine from "./components/Ukraine/UkraineSt";
import World from "./components/World/WorldSt";
import { AppWrapper } from "./style";


const App = () => {
  return (
    
    <BrowserRouter>
      <AppWrapper>
        {/* <NavBar /> */}
        <InfoPage />
        <Routes>
          <Route path="/ukraine/*" element={<Ukraine />} />
          <Route path="/world/*" element={<World />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
