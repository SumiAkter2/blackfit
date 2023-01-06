import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar";
import NotFound from "./Component/NotFound/NotFound";
import Pricing from "./Component/Pricing/Pricing";

function App() {
  return (
    <div className="App bg-black">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Pricing />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
