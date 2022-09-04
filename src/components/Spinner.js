import './Spinner.css';
import React from 'react'
import { useState, useEffect } from "react"
import ClockLoader from "react-spinners/ClockLoader";
export default function Spinner() {
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  }, []);
  
  return (
    <div className="loading">
        
        <ClockLoader  color={"37A5A5"} loading={loading} size={150} />
        
    </div>
  )
}
