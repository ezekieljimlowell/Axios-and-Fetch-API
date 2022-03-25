import React from "react";
import { Delete } from "./Delete/Delete";
import { Patch } from "./Patch/Patch";
import { Post } from "./Post/Post";
import { Put } from './Put/Put'; 

export default function AxiosFetch() {
    return (
        <>
            <Post />
            <Patch />
            <Put />
            <Delete />
        </>
    )
}