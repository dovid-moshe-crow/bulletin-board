"use client"

import Image from "next/image";
import Display from "./_components/display";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()


export const revalidate = 0;




export default async function Home() {


  
  return (
    <QueryClientProvider client={queryClient}>
    <main className="">
       <Display />
    </main>
    </QueryClientProvider>
  );
}


