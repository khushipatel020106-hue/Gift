import { Routes, Route } from "react-router-dom";
import PasscodePage from "./components/PasscodePage";
import CameraPage from "./components/CameraPage";
import SeePicturePage from "./components/SeePicturePage";
import GiftsForYou from "./components/GiftsForYou";
import Camera1 from "./components/Camera1";
import Card from "./components/Card";
import Song from "./components/Song";


function App() {
  return (
    <Routes>
      <Route path="/" element={<PasscodePage />} />
      <Route path="/camera" element={<CameraPage />} />
      <Route path="/seepicture" element={<SeePicturePage />} />
      <Route path="/giftsforyou" element={<GiftsForYou />} />
      <Route path="/camera1" element={<Camera1 />} />
      <Route path="/card" element={<Card />} />
      <Route path="/song" element={<Song />} /> 
    </Routes>
  );
}

export default App;