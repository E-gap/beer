import { Route, Routes } from "react-router-dom";
import MainPage from "../src/pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
