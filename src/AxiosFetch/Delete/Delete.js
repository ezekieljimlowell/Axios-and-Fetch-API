import axios from "axios";
import React, { useEffect } from "react";

export const Delete = () => {

    const URL = "https://jsonplaceholder.typicode.com/todos/5";

    const deleteData = async () => {
        const data = await axios.delete(URL);
        return data;
    }

    useEffect(() => {
        deleteData().then(data => console.log(data));
    })

    return (
        <>

        </>
    )
}