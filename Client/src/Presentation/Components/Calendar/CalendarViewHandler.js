import { useMemo, useState } from "react";

/**
make an array in format
{
    date: 1,
    events: []
}
 */

function CalendarViewHandler(events) {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  function updateMonth(e) {
    setMonth(parseInt(e.target.value));
  }

  function updateYear(e) {
    setYear(parseInt(e.target.value));
  }

  const { emptyDivs, dates } = useMemo(
    () => getFirstDivs(month, year, events),
    [month, year, events]
  );

  const years = useMemo(() => {
    const y = [];
    for (let i = 2000; i <= 2100; i++) y.push(i);
    return y;
  }, []);

  const months = useMemo(() => {
    const y = [];
    for (let i = 0; i < 12; i++) y.push(i);
    return y;
  }, []);

  return {
    emptyDivs,
    dates,
    years,
    months,
    month,
    year,
    updateMonth,
    updateYear,
  };
}

function getFirstDivs(month, year, events) {
  const { firstDay, numDays } = getFirstDayAndNumDays(year, month);
  const emptyDivs = [],
    dates = [];
  const current = new Date();
  for (let i = 0; i < firstDay.getDay(); i++) {
    emptyDivs.push(
      <div
        className="empty"
        key={"empty/" + i + "/" + month + "/" + year}
      ></div>
    );
  }
  for (let i = 1; i <= numDays; i++) {
    dates.push({ date: i, events: [] });
  }
  for (let e of events) {
    if (e.date.getFullYear() === year && e.date.getMonth() === month) {
      dates[e.date.getDate() - 1].events.push(e);
    }
  }

  for (let i = 0; i < numDays; i++) {
    dates[i] = (
      <div
        className={`filled ${
          current.getDate() === dates[i].date &&
          current.getMonth() === month &&
          current.getFullYear() === year
            ? "current "
            : " "
        }
        `}
        key={i + "/" + month + "/" + year}
      >
        <div className="dateBox">{dates[i].date}</div>
        {dates[i].events.length > 0 ? (
          <div className="notification">
            {dates[i].events.map((e) => (
              <div key={e.title}>{e.title}</div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  return { emptyDivs, dates };
}

function getFirstDayAndNumDays(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const numDaysInMonth = lastDayOfMonth.getDate();
  return {
    firstDay: firstDayOfMonth,
    numDays: numDaysInMonth,
  };
}

export default CalendarViewHandler;

/**
 * i need a controlled select element
 * overwrite onChange
 * attach a state that determines the current value
 */
