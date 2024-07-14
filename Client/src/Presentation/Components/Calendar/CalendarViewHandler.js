import { useCallback, useMemo, useState } from "react";

function CalendarViewHandler(events) {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState({
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const selectDate = useCallback((date) => {
    setSelectedDate({date, month, year});
  }, [month, year])

  function updateMonth(e) {
    setMonth(parseInt(e.target.value));
  }

  function updateYear(e) {
    setYear(parseInt(e.target.value));
  }

  const dateCells = useMemo(
    () => {
      console.log("Calling to reset memo");
      return getFirstDivs(month, year, events, (d) => selectDate(d))
    },
    [month, year, events, selectDate]
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
    dateCells,
    years,
    months,
    month,
    year,
    updateMonth,
    updateYear,
    selectedDate,
    selectDate
  };
}


function getFirstDivs(month, year, events, selectDate) {
  const { firstDay, numDays } = getFirstDayAndNumDays(year, month);
  const emptyDivs = [],
    dates = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    emptyDivs.push(null);
  }
  for (let i = 1; i <= numDays; i++) {
    dates.push({ date: i, events: [] });
  }
  for (let e of events) {
    if (e.date.year === year && e.date.month === month) {
      dates[e.date.date - 1].events.push(e);
    }
  }

  return [...emptyDivs, ...dates];
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

/*
function getFirstDivs(month, year, events, selectDate) {
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
    if (e.date.year === year && e.date.month === month) {
      dates[e.date.date - 1].events.push(e);
    }
  }

  for (let i = 0; i < numDays; i++) {
    dates[i] = (
      <div
        onClick={() => selectDate(dates[i].date)}
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
            {/* {dates[i].events.map((e) => (
              <div key={e.id}>{e.topic}</div>
            ))} }
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
    return { emptyDivs, dates };
*/