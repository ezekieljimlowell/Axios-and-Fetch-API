import React, { useEffect } from "react";

export const DeleteData = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts/2";

    useEffect(() => {
        fetch(URL, {
            method: "DELETE",
        }).then((res) => res.json()).then(data => console.log(data));
    }, []);

    return (
        <>
            
        </>
    )
}