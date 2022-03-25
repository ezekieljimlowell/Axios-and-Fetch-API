import React, { useEffect, useState } from "react";
import axios from "axios";

export const Post = () => {
    const [postData, setPostData] = useState({})
    const URL = "https://jsonplaceholder.typicode.com/todos";

    const postFunction = async () => {
        const post = await axios.post(URL, {
            userId: 12,
            title: "Axios posting",
            body: "Async and await post"
        }
        )
        return post;
    }

    useEffect(() => {
        postFunction().then(data => setPostData(data.data));
    }, [])
    console.log(postData);

    return (
        <>
            <h2>Axios post data</h2>
            <div>{postData.id}</div>
            <div>{postData.title}</div>
            <div>{postData.userId}</div>
            <div>{postData.body}</div>
        </>
    )
}