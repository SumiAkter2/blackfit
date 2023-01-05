import "./App.css";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar";
import Pricing from "./Component/Pricing/Pricing";

function App() {
  return (
    <div className="App bg-black">
      <Navbar>
        <Home />
        <Footer />
       
      </Navbar>
    </div>
  );
}

export default App;
