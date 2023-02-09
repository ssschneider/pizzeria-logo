import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Cardapio from "./pages/cardapio";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cardapio" element={<Cardapio />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
