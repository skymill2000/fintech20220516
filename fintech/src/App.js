import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import AxiosTest from "./pages/AxiosTest";
import BalancePage from "./pages/BalancePage";
import MainPage from "./pages/MainPage";
import NewsApiPage from "./pages/NewsApiPage";
import QrCodePage from "./pages/QrCodePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsApiPage/>}></Route>
        <Route path="/axiosTest" element={<AxiosTest/>}></Route>
        <Route path="/" element={<AuthPage/>}></Route>
        <Route path="/authResult" element={<AuthResultPage/>}></Route>
        <Route path="/main" element={<MainPage/>}></Route>
        <Route path="/balance" element={<BalancePage/>}></Route>
        <Route path="/qr" element={<QrCodePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
