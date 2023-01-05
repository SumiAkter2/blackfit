import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar";

function App() {
  return (
    <div className="App bg-black">
      <Navbar>
        
        <Home/>
    </Navbar>
    </div>
  );
}

export default App;
