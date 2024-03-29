import React from 'react'
import Card from "../components/Card"
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='w-full h-full flex flex-col'>
    <div className='justify-center flex flex-col items-center mt-4' >
      <h2 className='font-bold '>Patient Name</h2>
    </div>
    <div className='justify-center flex flex-col items-center' >
    <h2 className='font-bold'>Logged in as:${"Hello"}</h2>
    </div>
    <div className='justify-center flex flex-col items-end' >
    <a href='https://www.google.com' target='_blank' rel="noreferrer" className='text-red-500 font-semibold font-sans'>Live Monitoring</a>
    </div>
    
    <div className=' w-full h-full flex gap-6 flex-wrap flex-row justify-around mt-4 mb-4'>
       <Card 
            imageUrl="https://source.unsplash.com/random/300×300/?graph"
            title = "Healthcare"
            value = "200"
            />
          <Card 
            imageUrl="https://source.unsplash.com/random/300×300/?graph"
            title = "Healthcare"
            value = "200"
            />
              <Card 
            imageUrl="https://source.unsplash.com/random/300×300/?graph"
            title = "Healthcare"
            value = "200"
            />
              <Card 
            imageUrl="https://source.unsplash.com/random/300×300/?graph"
            title = "Healthcare"
            value = "200"
            />
              <Card 
            imageUrl="https://source.unsplash.com/random/300×300/?graph"
            title = "Healthcare"
            value = "200"
            />
              <Card 
            imageUrl="https://source.unsplash.com/random/300×300/?graph"
            title = "Healthcare"
            value = "200"
            />
            </div>
            </div>
  )
}
