import React from "react";
import { PostData } from './PostData/PostData';
import { PutData } from './PutData/PutData';
import { DeleteData } from './DeleteData/DeleteData';
import { PatchData } from './PatchData/PatchData';

export default function FetchApi() {
    return (
        <>
            <PostData />
            <PutData />
            <PatchData />
            <DeleteData />
        </>
    )
}