'use client'
import React ,{useEffect}from 'react'
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
    <div className='container my-10'>Coming Soon</div>
  )
}

export default Programs