"use client"


import { UploadthingFiles } from "@/types"

import { useInterval } from "usehooks-ts";
import { useQuery } from "react-query";
import { useState } from "react";
import Image from "next/image"




export default function Display() {



    const { isLoading, error, data: files } = useQuery('files', {
        refetchInterval: 30000,
        onSuccess(data) {
            console.log(data)
        },
        queryFn: async () =>
            await (await fetch('/api/files/')).json() as UploadthingFiles
    })

    if (isLoading || error || !files) {
        return <>Loading or error</>
    }

    console.log(files)


    return (
        <FilesSlider files={files} delay={5000} />
    )
}


const FilesSlider = ({ files, delay }: { files: UploadthingFiles; delay: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % files.files.length);
    }, delay)

    const file = files.files[currentImageIndex];

    if (file.name.endsWith("pdf")) {
        return <iframe key={file.key} src={`https://utfs.io/f/${file.key}`} className="w-full h-screen" allowFullScreen />
    } else {
        return <Image key={file.key} src={`https://utfs.io/f/${file.key}`} layout="fill" alt={file.name} />
    }


};
