import axios from "axios";
import React, { useEffect, useState } from "react";

export const Patch = () => {
    const [patchData, setPatchData] = useState({});
    const URL = "https://jsonplaceholder.typicode.com/todos/4";

    const patchFunction = async () => {
        const data = await axios.patch(URL, {
            title: "Patching particular data",
            body: "Axios patch with async and await"
        })
        return data;
    }

    useEffect(() => {
        patchFunction().then(updatedData => setPatchData(updatedData.data));
    }, [])

    return (
        <>
            <h2>Axios Patch</h2>
            <div>{patchData.title}</div>
            <div>{patchData.id}</div>
            <div>{patchData.userId}</div>
            <div>{patchData.body}</div>
        </>
    )
}