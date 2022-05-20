import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import AxiosTest from "./pages/AxiosTest";
import BalancePage from "./pages/BalancePage";
import Example from "./pages/Example";
import MainPage from "./pages/MainPage";
import NewsApiPage from "./pages/NewsApiPage";
import QrCodePage from "./pages/QrCodePage";
import QrCodeReaderPage from "./pages/QrCodeReaderPage";


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
        <Route path="/qrreader" element={<QrCodeReaderPage/>}></Route>
        <Route path="/example" element={<Example/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
