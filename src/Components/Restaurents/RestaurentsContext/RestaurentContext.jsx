import { createContext, useContext, useState, useEffect } from "react";
import { firestore } from "../../../Firebase/firebase";
import { collection, query, onSnapshot } from "@firebase/firestore";

const RestaurantsContext = createContext();

export const useRestaurants = () => {
  return useContext(RestaurantsContext);
};

export const RestaurantsProvider = ({ children }) => {
  const [courseData, setCourseData] = useState([]);
  const [value, setValue] = useState(null); // Ensure value is initialized
  const [resData, setResData] = useState();
  const [isRestaurant,setIsRestaurent] = useState(false);

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
    <RestaurantsContext.Provider value={{ courseData, value, setValue, resData ,setResData ,isRestaurant, setIsRestaurent}}>
      {children}
    </RestaurantsContext.Provider>
  );
};
