import React, { useEffect, useState } from "react";

export const PostData = () => {
    const [postedData, setPostedData] = useState({});

    const URL = "https://jsonplaceholder.typicode.com/posts/?id=101";

    const postFunction =  async () => {
        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                userId: 11,
                id: 101,
                title: "Newly added by post",
                body: "Hello"
            }),
            headers: {
                "Content-type": "application/json; charset = UTF-8"
            }
        })
        const post = await response.json();
        return post;
    }

    useEffect(() => {
        /*fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                userId: 11,
                id: 101,
                title: "Newly added by post",
                body: "Hello"
            }),
            headers: {
                "Content-type": "application/json; charset = UTF-8"
            }
        }).then(response => response.json()).then(data => setPostedData(data));*/
        postFunction().then(data => setPostedData(data));
    }, [])

    console.log(postedData);


    return (
        <>
            <h3>Post</h3>
            <ul>
                <li>{postedData.title}</li>
            </ul>
        </>
    )
}