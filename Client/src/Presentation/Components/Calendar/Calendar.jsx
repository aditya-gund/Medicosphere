import CalendarViewHandler from "./CalendarViewHandler";
import "./Calendar.css";
import { EventRow } from "../EventRow/EventRow";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Calendar({ events }) {
  const {
    dateCells,
    years,
    months,
    month,
    year,
    updateMonth,
    updateYear,
    selectedDate,
    selectDate
  } = CalendarViewHandler(events);

  const current = new Date();

  return (
    <div className="calendar-card" >
      <div className="Calendar">
        <div className="Head">
          <select value={month} onChange={(e) => updateMonth(e)}>
            {months.map((month) => (
              <option value={month} key={intToMonths[month]}>
                {intToMonths[month]}
              </option>
            ))}
          </select>

          <select value={year} onChange={(e) => updateYear(e)}>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="Dates">
          {days.map((day) => (
            <div className="day" key={day}>
              {day}
            </div>
          ))}
          {dateCells.map((cell, i) =>
            cell ? (
              <div
                onClick={() => selectDate(cell.date)}
                className={`filled ${
                  current.getDate() === cell.date &&
                  current.getMonth() === month &&
                  current.getFullYear() === year
                    ? "current "
                    : " "
                }
              `}
                key={i + "/" + month + "/" + year}
              >
                <div className="dateBox">{cell.date}</div>
                {cell.events.length > 0 ? (
                  <div className="notification"></div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div
                className="empty"
                key={"empty/" + i + "/" + month + "/" + year}
              ></div>
            )
          )}
        </div>
      </div>

      <EventsOnDay
        events={events.filter(
          ({ date }) =>
            JSON.stringify({
              date: date.date,
              month: date.month,
              year: date.year,
            }) === JSON.stringify(selectedDate)
        )}
      />
    </div>
  );
}

export default Calendar;

function EventsOnDay({ events }) {
  const navigate = useNavigate();
  const onView = useCallback(
    (eventId) => {
      navigate(`/Home/event-details/${eventId}`);
    },
    [navigate]
  );

  return (
    <div className="events-on-day">
      {events.map(
        ({
          topic,
          product,
          date,
          host: { firstName, lastName, profilePic },
          eventId,
        }) => (
          <EventRow
            key={eventId}
            topic={topic}
            product={product}
            username={firstName + " " + lastName}
            userImg={profilePic}
            onView={() => onView(eventId)}
            date={date}
          />
        )
      )}
    </div>
  );
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const intToMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
