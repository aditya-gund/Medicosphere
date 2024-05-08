import "./TopBar.css";

function TopBar(){
    return <div className="TopBar">
        <div className="searchBar">
            <img src="./search.svg" alt="search"/>
            <input type="text" placeholder="Enter event id to search" />
        </div>
        <div className="TopBarOptions">
            <div>Hello username</div>
            <img src="./user.svg" alt="user" style={{borderRadius: "50%", backgroundColor: "#dddddd", padding: "2px"}} />
            <img src="./notifications.svg" alt="notifications" />
            <button>
                <div>Logout</div>
                <img src="./logOut.svg" alt="logout" />
            </button>
        </div>
    </div>
};

export default TopBar;