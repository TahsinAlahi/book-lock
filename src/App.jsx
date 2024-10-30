import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" w-full flex-col lg:max-w-screen-lg mx-auto">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
