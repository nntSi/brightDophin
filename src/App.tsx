import { useSelector } from "react-redux";
import { countSelector, decreaseCount, increaseCount, resetCount } from "./store/slice/countSlice";
import { useAppDispatch } from "./store/store";
import NavBar from "./components/layouts/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-white/90">
      <NavBar/>
    </div>
  );
}

export default App;