'use client'
import React ,{useEffect,useState}from 'react'
import axios from 'axios'
function Programs() {

  
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://exercisedb-api.vercel.app/api/v1/exercises')
        console.log(response.data.exercises)
      } catch (error:unknown ) {
        console.error(error)
      }
    }
    useEffect(() => {
      fetchData();
  
  }, []);
  return (
    <div className='container my-10'>Hi</div>
  )
}

export default Programs