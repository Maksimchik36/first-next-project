"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
import React from 'react';
// next.js hook for fetching
import useSWR from 'swr';
import styles from "./page.module.css";


const Dashboard = () => {
  // // using useEffect
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const result = await res.json();
  //     setData(result);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, [])

  // console.log("data", data);


  // recommended if you fetching data on the client-side
  const session = useSession();
  console.log("session", session);
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>Dashboard</div>
    )
  }
}


export default Dashboard;