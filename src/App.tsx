import { useSelector } from "react-redux";
import { countSelector, decreaseCount, increaseCount, resetCount } from "./store/slice/countSlice";
import { useAppDispatch } from "./store/store";
import NavBar from "./components/layouts/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-white/90">
      <NavBar/>
      <div id="a" className="h-[500px] bg-gray-600">

      </div>
      <div id="b" className="h-[500px] bg-red-400">

      </div>
      <div id="c" className="h-[500px] bg-yellow-200">

      </div>
      <div id="d" className="h-[500px]">

      </div>
    
    </div>
  );
}

export default App;