import { Route, Routes } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import TopBar from "../../Components/Topbar/TopBar";
import "./Home.css";
import DashBoard from "../Dashboard/Dashboard";
import { RedirectNotFound } from "../NotFound/NotFound";

function Home() {
  return (
    <div className="Home">
      <SideBar />
      <div className="AppWrapper">
        <TopBar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/*" element={<RedirectNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
