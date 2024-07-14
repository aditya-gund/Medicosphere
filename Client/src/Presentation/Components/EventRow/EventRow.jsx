import "./EventRow.css";

export function EventRow({topic, product, userImg, username, date, onView})
{
    return <div className="event-row">
        <img src={userImg?userImg:"/user.svg"} alt="creator" />
        <div>
            <div><span style={{fontWeight: "bold"}}>{topic}</span> &bull; {product}</div>
            <div className="optional-data" style={{color: "#6b7280"}} >{`${date.date}/${date.month}/${date.year}`} &middot; {username}</div>
        </div>
        <button onClick={() => onView()}>
            View Event
        </button>
    </div>
}