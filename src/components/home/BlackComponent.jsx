import React from 'react'

function BlackComponent() {
  return (
    <div className='bg-black w-full h-32 my-6 flex justify-evenly text-white items-center' >
      <div className='flex'>
        <h2 style={{color:'#CFD19B'}} className='text-5xl font-semibold mr-4'>10k +</h2>
        <p>Children are back <br /> to school</p>
      </div>
      <div className='flex'>
        <h2 style={{color:'#CFD19B'}} className='text-5xl font-semibold mr-4'>2M+</h2>
        <p>Total money <br /> donated</p>
      </div>
      <div className='flex'>
        <h2 style={{color:'#CFD19B'}} className='text-5xl font-semibold mr-4'>100+</h2>
        <p>Hospital has <br /> been built</p>
      </div>
    </div>
  )
}

export default BlackComponent
