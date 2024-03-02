
import { useState, useEffect } from "react";
import { firestore } from "../../Firebase/firebase";
import { collection, query, onSnapshot,} from "@firebase/firestore";
import Card from "./Card";

function Restaurants() { 
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
  return (
    <>
    
    <div className="px-4 flex gap-2 flex-wrap justify-around  bg-gradient-to-t from-purple-500 to-pink-600">
    {courseData.map((v, i) => {
            return (
              <div key={i}>
                <Card
                  urlImg={v.urlImg}
                  vegNonVeg={v.vegNonVeg}
                  restaurant={v.restaurant}
                  foodItems={v.foodItems}
                  address={v.address}
                  restaurantId={v.restaurantId}              
                />
              </div>
            );
          })}
   
    </div>

    </>
  )
}

export default Restaurants