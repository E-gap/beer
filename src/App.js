import { Route, Routes } from "react-router-dom";
import MainPage from "../src/pages/MainPage/MainPage";
import BeerPage from "../src/pages/BeerPage/BeerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<BeerPage />} />
    </Routes>
  );
}

export default App;
