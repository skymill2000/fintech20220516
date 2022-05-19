import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsApiPage/>}></Route>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
        <Route path="/" element={<AuthPage/>}></Route>
        <Route path="/authResult" element={<AuthResultPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
