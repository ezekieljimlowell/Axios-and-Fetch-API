import axios from "axios";
import React, { useEffect, useState } from "react";

export const Put = () => {
    const [putData, setPutData] = useState({});
    const URL = "https://jsonplaceholder.typicode.com/todos/3";

    const putFunction = async () => {
        const data = await axios.put(URL, {
            id: 3,
            userId: 2,
            title: "Axios put request",
            body: "Async and await put request"
        })
        return data;
    }

    useEffect(() => {
        putFunction().then(changedData => setPutData(changedData.data));
    }, [])

    return (
        <>
            <h2>Axios put</h2>
            <div>{putData.id}</div>
            <div>{putData.userId}</div>
            <div>{putData.title}</div>
            <div>{putData.body}</div>
        </>
    )
}