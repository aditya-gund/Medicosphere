import CalendarViewHandler from "./CalendarViewHandler";
import "./Calendar.css";

function Calendar({ events }) {
  const {
    emptyDivs,
    dates,
    years,
    months,
    month,
    year,
    updateMonth,
    updateYear,
  } = CalendarViewHandler(events);

  return (
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
        {emptyDivs.map((div) => div)}
        {dates.map((date) => date)}
      </div>
    </div>
  );
}

export default Calendar;

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
