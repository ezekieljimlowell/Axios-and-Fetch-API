import React, { useEffect, useState } from "react";

export const PutData = () => {
    const [updatedData, setUpdatedData] = useState({})
    const URL = "https://jsonplaceholder.typicode.com/posts/1";

    useEffect(() => {
        fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                userId: 1,
                title: "Put request",
                body: "PUT request done"
            })
        }).then(response => response.json()).then(data =>  {
            console.log(data)
            setUpdatedData(data)
        });
    }, [])

    return (
        <>
            <h3>Put request</h3>
            <ul>
                <li>{updatedData.title}</li>
                <li>{updatedData.id}</li>
                <li>{updatedData.userId}</li>
                <li>{updatedData.body}</li>
            </ul>
        </>
    )
}