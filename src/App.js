import "./styles.css";

import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import AllRoutes from "./route/AllRoutes";
import Navbar2 from "./Components/Navbar2";

export default function App() {
  // const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="App">
      {/* <Navbar2 /> */}
      {/* <Navbar /> */}
      <AllRoutes />
    </div>
  );
}
// : (
//   <Login />
// );
