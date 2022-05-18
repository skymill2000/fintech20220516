import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ArrayMap from "./components/ArrayMap";
import AxiosTest from "./pages/AxiosTest";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<Welcome/>}></Route>
        <Route path="/b" element={<ArrayMap/>}></Route>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
