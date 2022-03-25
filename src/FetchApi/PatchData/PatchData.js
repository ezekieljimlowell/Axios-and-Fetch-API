import React, { useEffect, useState } from "react";

export const PatchData = () => {
    const [patchedData, setPatchedData] = useState({});
    const URL = "https://jsonplaceholder.typicode.com/posts/1";

    useEffect(() => {
        fetch(URL, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({
                title: "Patch only update the required data and does not change other fields"
            })
        }).then(response => response.json()).then(data => setPatchedData(data));
    }, [])

    return (
        <>
            <h3>Patch</h3>
            <div>{patchedData.id}</div>
            <div>{patchedData.userId}</div>
            <div>{patchedData.title}</div>
            <div>{patchedData.body}</div>
        </>
    )
}