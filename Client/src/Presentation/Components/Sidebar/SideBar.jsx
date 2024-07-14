import { useEffect, useMemo, useState } from "react";
import "./SideBar.css";
import SideBarViewHandler from "./SideBarViewHandler";
import { useLocation } from "react-router-dom";
import { useUser } from "../../Redux/User/UserSlice";

function button(src, label, onClick, active) {
  return (
    <div
      className={`button ${active === label ? "active" : ""}`}
      onClick={() => onClick()}
      key={label}
    >
      <div><img src={src} alt={label} /></div>
      <span>{label}</span>
    </div>
  );
}

function SideBar() {
  //const active = "Home";
  const { redirect } = SideBarViewHandler();
  const location = useLocation();
  const [navs, setNavs] = useState([]);
  const {user: {id}} = useUser();
  useEffect(() => {
    setNavs([
      {
        src: "/home.svg",
        label: "Home",
        link: "/Home",
      },
      {
        src: "/Events.svg",
        label: "Events",
        link: "/Home/Events",
      },
      {
        src: "/location.svg",
        label: "Venue",
        link: "/Home/Venue",
      },
      {
        src: "/expenses.svg",
        label: "Expenses",
        link: "/Home/Expenses",
      },
      {
        src: "/presenter.svg",
        label: "User",
        link: "/Home/user-details/"+id,
      }
      // {
      //   src: "/presenter.svg",
      //   label: "Speakers",
      //   link: "/Home/Speakers",
      // },
      // {
      //   src: "/audience.svg",
      //   label: "Audience",
      //   link: "/Home/Audience",
      // },
    ]);
  }, [id])

  useEffect(() => {
    console.log("New navs");
    console.log(navs);
  }, [navs])

  const active = useMemo(() => {
    const currentUrl = navs.filter(({link}) => (location.pathname.toLowerCase().endsWith(link.toLowerCase())));
    if(currentUrl.length === 0)
      return "";
    else return currentUrl[0].label;
  }, [location, navs])

  return (
    <div className="SideBar">
      <div className="AppLogo">
        <img src="/calendar.png" alt="logo" />
      </div>
      {navs.map(({ src, label, link }) =>
        button(src, label, () => redirect(link), active)
      )}
    </div>
  );
}

export default SideBar;

// const navs = [
//   {
//     src: "/home.svg",
//     label: "Home",
//     link: "/Home",
//   },
//   {
//     src: "/Events.svg",
//     label: "Events",
//     link: "/Home/Events",
//   },
//   {
//     src: "/location.svg",
//     label: "Venue",
//     link: "/Home/Venue",
//   },
//   {
//     src: "/expenses.svg",
//     label: "Expenses",
//     link: "/Home/Expenses",
//   },
//   {
//     src: "/presenter.svg",
//     label: "Speakers",
//     link: "/Home/Speakers",
//   }
//   // {
//   //   src: "/presenter.svg",
//   //   label: "Speakers",
//   //   link: "/Home/Speakers",
//   // },
//   // {
//   //   src: "/audience.svg",
//   //   label: "Audience",
//   //   link: "/Home/Audience",
//   // },
// ];
