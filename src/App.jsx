import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import PresentMode from "./pages/PresentMode";
import EditMode from "./pages/EditMode";
import CreatePresentation from "./pages/CreatePresentation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/create-presentation" element={<CreatePresentation />} />
          <Route path="/present/" element={<PresentMode />} />
          <Route path="/edit/:title" element={<EditMode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
