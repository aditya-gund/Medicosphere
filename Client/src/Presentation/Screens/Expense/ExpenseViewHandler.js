import { useCallback, useEffect } from "react";
import { useEvents } from "../../Redux/Events/EventsSlice";
import { useNavigate } from "react-router-dom";

function ExpenseViewHandler()
{
    const {events, updateEvents} = useEvents();
    const navigate = useNavigate();

    useEffect(() => {
        updateEvents();
    }, [updateEvents])

    const showExpense = useCallback((eventId) => {
        navigate("/Home/expense-details/"+eventId);
    }, [navigate])

    return {
        events,
        showExpense
    }
}

export default ExpenseViewHandler;