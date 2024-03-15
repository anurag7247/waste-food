// import React from 'react'

const RestaurentTemplate = () => {
  return (
   <>
        <div className=" bg-slate-80 ">
            <div className=" w-full h-[400px]">
                <div className="flex flex-row flex-wrap">
                      <div className="flex flex-col">
                         <img className="mt-5 ml-2 shadow-2xl shadow-black" src="https://cdn.pixabay.com/photo/2018/03/11/23/59/sunset-3218412_640.jpg" alt="" />
                      </div>
                      <div className=" flex flex-col">
                          <div className="bg-blue-600 w-[700px] h-full m-14 rounded-3xl shadow-2xl shadow-black ">
                                <div className=" bg-white w-[400px] ml-[150px] h-full ">
                                    <h1 className=" text-center text-3xl font-semibold font-serif">Available Food</h1>
                                      
                                </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default RestaurentTemplate