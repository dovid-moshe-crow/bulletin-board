"use client"

import { UploadthingFiles } from "@/types"
import { useState } from "react"
import { useInterval } from "usehooks-ts";
import { getFiles } from "./actions";




export default function Display() {
    const [files,setFiles] = useState<UploadthingFiles>({ hasMore: false, files: [] });

    useInterval(async () => {
        console.log("refreshing")
        setFiles(await getFiles())
    },30000)


    return (<div>
        {files.files.map(x => {
            if (x.name.endsWith("pdf")) {
                return <iframe key={x.key} src={`https://utfs.io/f/${x.key}`} className="w-full h-screen" allowFullScreen />
            } else {
                return null//<Image key={x.key} src={`https://utfs.io/f/${x.key}`} layout="fill" alt={x.name} />
            }
        })}
    </div>)
}
