import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import IntroPage from "./pages/IntroPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
