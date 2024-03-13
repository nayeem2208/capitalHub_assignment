import React from 'react'
import staff1 from '../../../public/Rectangle 1110.png'
import staff2 from '../../../public/Rectangle 1111.png'
import staff3 from '../../../public/Rectangle 1112.png'
import staff4 from '../../../public/Rectangle 1113.png'
function SecondSecontion() {
  return (
    <div className='flex justify-center my-16'>
      <div className='w-5/6  flex justify-between'>
      
        <div
          className="bg-white flex flex-col justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 "
          style={{ position: "relative" }}
        >
          <img
            src={staff1}
            alt=""
            className="w-full h-full object-cover rounded-2xl "
          />
          
          <div style={{ position: "absolute", bottom: -10 }} className=" w-5/6 flex justify-center">
            <div className='bg-white shadow-lg rounded py-2 w-4/5 text-center '  >Rahul</div>
          </div>
        </div>
        <div
          className="bg-white flex flex-col justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 "
          style={{ position: "relative" }}
        >
          <img
            src={staff2}
            alt=""
            className="w-full h-full object-cover rounded-2xl "
          />
          
          <div style={{ position: "absolute", bottom: -10 }} className=" w-5/6 flex justify-center">
            <div className='bg-white shadow-lg rounded py-2 w-4/5 text-center '  >Ishaa</div>
          </div>
        </div>
        <div
          className="bg-white flex flex-col justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 "
          style={{ position: "relative" }}
        >
          <img
            src={staff3}
            alt=""
            className="w-full h-full object-cover rounded-2xl "
          />
          
          <div style={{ position: "absolute", bottom: -10 }} className=" w-5/6 flex justify-center">
            <div className='bg-white shadow-lg rounded py-2 w-4/5 text-center '  >Priya</div>
          </div>
        </div>
        <div
          className="bg-white flex flex-col justify-center items-center w-60 h-60 rounded-xl shadow-xl  border border-gray-200 "
          style={{ position: "relative" }}
        >
          <img
            src={staff4}
            alt=""
            className="w-full h-full object-cover rounded-2xl "
          />
          
          <div style={{ position: "absolute", bottom: -10 }} className=" w-5/6 flex justify-center">
            <div className='bg-white shadow-lg rounded py-2 w-4/5 text-center '  >Jackson</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSecontion
