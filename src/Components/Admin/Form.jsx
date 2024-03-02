import { useState, useEffect } from "react";
import { firestore } from "../../Firebase/firebase";
import { addDoc, collection, query, onSnapshot, updateDoc, doc, deleteDoc } from "@firebase/firestore";
import Card from "./Card";

export default function Form() {
  let [data, setData] = useState({ restaurant: '', restaurantId:"", urlImg: "", vegNonVeg: "", foodItems: "", address: "", idno: "" });
  let [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, "courseData"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let myarray = [];
      querySnapshot.forEach((d) => {
        myarray.push({ ...d.data(), idno: d.id });
      });
      setCourseData(myarray);
    });

    return () => unsub();
  }, []);

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  return (
    <>
      <div className=" bg-slate-900 ]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            try {
              if (data.idno === '') {
                addDoc(collection(firestore, "courseData"), data);
                alert('added successfully');
              } else {
                updateDoc(doc(firestore, 'courseData', data.idno), {
                  restaurant: data.restaurant,
                  urlImg: data.urlImg,
                  vegNonVeg: data.vegNonVeg,
                  foodItems: data.foodItems,
                  address: data.address,
                  restaurantId: data.restaurantId,
                });
                alert('updated successfully');
              }
              setData({
                restaurant: '',
                restaurantId:"",
                urlImg: "",
                vegNonVeg: "",
                foodItems: "",
                address: "",
                idno: "",
              });
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <div className="justify-center flex">
            <div className="w-[800px] rounded-3xl mt-5 shadow-yellow-300 mb-4 ">
              <div className="my-12 rounded-3xl w-full max-w-[500px] mx-auto border border-gray-60 p-5 backdrop-blur-sm bg-white/30">
              <div className="flex flex-col px-8">
                  <label htmlFor="restaurant" className="ml-2 text-lg font-bold">Enter Restaurant Name:-</label>
                  <input type="text" id="restaurant" name="restaurant" placeholder="Enter Restaurant Name" className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" value={data.restaurant} onChange={change} />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="restaurantId" className="ml-2 text-lg font-bold">Enter Restaurant Id:-</label>
                  <input type="text" id="restaurantId" name="restaurantId" placeholder="Enter Restaurant Id" className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" value={data.restaurantId} onChange={change} />
                </div>

                <div className="flex flex-col px-8">
                  <label htmlFor="urlImg" className="ml-2 mt-3 text-lg font-bold">Enter Url Image:-</label>
                  <input type="text" id="urlImg" name="urlImg" placeholder="Enter Url Image" className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" value={data.urlImg} onChange={change} />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="vegNonVeg" className="ml-2 mt-3 text-lg font-bold">Enter Restaurant is veg or nonveg:-</label>
                  <input type="text" id="vegNonVeg" name="vegNonVeg" placeholder="Enter Restaurant is veg or nonveg" className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" value={data.vegNonVeg} onChange={change} />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="foodItems" className="ml-2 mt-3 text-lg font-bold">Enter food items you made:-</label>
                  <input type="text" id="foodItems" name="foodItems" placeholder="Enter food items you made" className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" value={data.foodItems} onChange={change} />
                </div>
                <div className="flex flex-col px-8">
                  <label htmlFor="address" className="ml-2 mt-3 text-lg font-bold">Enter Restaurant Address:-</label>
                  <input type="text" id="address" name="address" placeholder="Enter Restaurant Address" className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" value={data.address} onChange={change} />
                </div>
                <div className="flex flex-col px-8">
                  {data.idno === '' ? <button className="bg-blue-500 py-2 mt-3 rounded-xl text-white hover:bg-yellow-400">Add Restaurants</button> : <button className="bg-blue-500 py-2 mt-3 rounded-xl text-white hover:bg-yellow-400">Update Restaurants</button>}
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className=" justify-around flex flex-wrap gap-2">
        {courseData.map((v, i) => {
            return (
              <div key={i}>
                <Card
                  urlImg={v.urlImg}
                  vegNonVeg={v.vegNonVeg}
                  restaurant={v.restaurant}
                  foodItems={v.foodItems}
                  address={v.address}
                  setData={() => setData(v)}
                  deleteData={() => {
                    deleteDoc(doc(firestore, 'courseData', v.idno));
                    
                  }}
                  
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
