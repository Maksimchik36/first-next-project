"use client";

import React, { useState, useEffect } from 'react';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

      if (!res.ok) {
        setErr(true);
      }

      const result = await res.json();
      setData(result);
      setIsLoading(false);
    }
    getData();
  }, [])

  console.log("data", data);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard