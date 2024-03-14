// import React from "react";
import { useFormContext } from "./Context/FormContext";
import Card from "./Card"; // Adjust the import path as needed

export default function Form() {
  const {
    data,
    setData,
    courseData,
    // img,
    fileInputRef,
    change,
    handleSubmit,
    deleteData
  } = useFormContext();

  return (
    <>
      <div className="bg-slate-900">
        <form onSubmit={handleSubmit}>
          <div className="justify-center flex">
            <div className="w-[800px] rounded-3xl mt-5 shadow-yellow-300 mb-4">
              <div className="my-12 rounded-3xl w-full max-w-[500px] mx-auto border border-gray-60 p-5 backdrop-blur-sm bg-white/30">
                <div className="flex flex-col px-8">
                  <label htmlFor="restaurant" className="ml-2 text-lg font-bold">Enter Restaurant Name:</label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    placeholder="Enter Restaurant Name"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.restaurant}
                    onChange={change}
                  />
                </div>
                {/* <div className="flex flex-col px-8">
                  <label htmlFor="restaurantId" className="ml-2 text-lg font-bold">Enter Restaurant Id:</label>
                  <input
                    type="text"
                    id="restaurantId"
                    name="restaurantId"
                    placeholder="Enter Restaurant Id"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.restaurantId}
                    onChange={change}
                  />
                </div> */}
                <div className="flex flex-col px-8">
                  <label htmlFor="urlImg" className="ml-2 mt-3 text-lg font-bold">Upload Image:</label>
                  <input
                    type="file"
                    id="urlImg"
                    name="urlImg"
                    accept="image/*"
                    onChange={change}
                    ref={fileInputRef}
                    className="pl-1"
                  />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="vegNonVeg" className="ml-2 mt-3 text-lg font-bold">Enter Restaurant is veg or nonveg:</label>
                  <input
                    type="text"
                    id="vegNonVeg"
                    name="vegNonVeg"
                    placeholder="Enter Restaurant is veg or nonveg"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.vegNonVeg}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="foodItems" className="ml-2 mt-3 text-lg font-bold">Enter food items you made:</label>
                  <input
                    type="text"
                    id="foodItems"
                    name="foodItems"
                    placeholder="Enter food items you made"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.foodItems}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="address" className="ml-2 mt-3 text-lg font-bold">Enter Restaurant Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Restaurant Address"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.address}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="email" className="ml-2 mt-3 text-lg font-bold">Enter Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.email}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="password" className="ml-2 mt-3 text-lg font-bold">Enter Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.password}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="confirmPassword" className="ml-2 mt-3 text-lg font-bold">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="py-1 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={data.confirmPassword}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col px-8">
                  {data.idno === '' ? (
                    <button className="bg-blue-500 py-2 mt-3 rounded-xl text-white hover:bg-yellow-400">Add Restaurants</button>
                  ) : (
                    <button className="bg-blue-500 py-2 mt-3 rounded-xl text-white hover:bg-yellow-400">Update Restaurants</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="justify-around flex flex-wrap gap-2">
          {courseData.map((v, i) => (
            <div key={i}>
              <Card
                urlImg={v.urlImg}
                vegNonVeg={v.vegNonVeg}
                restaurant={v.restaurant}
                foodItems={v.foodItems}
                address={v.address}
                setData={() => {setData(v)}}
                deleteData={() => {deleteData(v.idno)}}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
