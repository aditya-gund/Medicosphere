import { useState } from "react";

//A custom data structure that takes form of both array and map for same list type data
//pros : we can use both map function to directly display jsx and searching the array takes constant time
export function useArrayMap(id)
{
    const [arr, setArr] = useState([]);
    const [set,setSet] = useState({});
    function add(val)
    {
        if(!val[id]) throw new Error("added object must contain " + id + " value");
        setArr((state) => [...state, val]);
        const obj = {...set};
        obj[val[id]] = val;
        setSet(obj);
    }
    function remove(valId)
    {
        setArr((state) => state.filter((obj) => obj[id] !== valId));
        const obj = {...set};
        obj[valId] = null;
        setSet(obj);
    }

    return [
        arr,
        set,
        add,
        remove
    ]
}