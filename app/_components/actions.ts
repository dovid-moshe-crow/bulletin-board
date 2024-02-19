"use server"

import { UploadthingFiles } from "@/types";





export async function getFiles(){
    const files = await (await fetch("https://uploadthing.com/api/listFiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Uploadthing-Api-Key": process.env.UPLOADTHING_SECRET!
        },
        body: JSON.stringify({
          "limit": 500,
          "offset": 0
        })
      })).json() as UploadthingFiles;

      return files;
}