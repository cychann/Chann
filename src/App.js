import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}

export default App;
