import { Route, Routes } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import TopBar from "../../Components/Topbar/TopBar";
import "./Home.css";
import DashBoard from "../Dashboard/Dashboard";
import { RedirectNotFound } from "../NotFound/NotFound";
import Events from "../Events/Events";
import HomeViewHandler from "./HomeViewHandler";
import Venue from "../Venue/Venue";
import { Expense } from "../Expense/Expense";
import { ExpenseDetails } from "../ExpenseDetails/ExpenseDetails";

function Home() {

  const {searchEventParam,setSearchEventParam} = HomeViewHandler();

  return (
    <div className="Home">
      <SideBar />
      <div className="AppWrapper">
        <TopBar setSearch={setSearchEventParam} searchParam={searchEventParam} />
        <div className="Content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/events" element={<Events searchParam={searchEventParam} />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/expenses" element={<Expense />} />
            <Route path="/expense-details/:eventId" element={<ExpenseDetails />} />
            <Route path="/*" element={<RedirectNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
