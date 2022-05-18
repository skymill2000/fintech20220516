import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsApiPage/>}></Route>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
