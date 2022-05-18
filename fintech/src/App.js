import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ArrayMap from "./components/ArrayMap";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Welcome/>}></Route>
        <Route path="/b" element={<ArrayMap/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
