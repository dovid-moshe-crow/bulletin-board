"use client"


import { UploadthingFiles } from "@/types"

import { useInterval} from "usehooks-ts";
import { getFiles } from "./actions";
import { useQuery } from "react-query";




export default function Display() {

    const { isLoading, error, data : files} = useQuery('files', getFiles)
  //  const files = (getFiles())


    if(isLoading || error || !files){
        return <>Loading or error</>
    }

   


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
