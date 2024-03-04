import { createContext, useContext, useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import { firestore } from "../../../Firebase/firebase";

const ResAdminContext = createContext();

export function useResAdmin() {
  return useContext(ResAdminContext);
}

export function ResAdminProvider({ children }) {
  const [itemData, setItemData] = useState({ name: '', idno: '' });
  const [sItemData, setSItemData] = useState([]);

  const handleChange = (e) => {
    setItemData({ ...itemData, name: e.target.value });
  };

  const handleSubmit = async () => {
    await addDoc(collection(firestore, "RestaurentAdmin"), itemData);
    alert("added");
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, "RestaurentAdmin"), (querySnapshot) => {
      const myarray = querySnapshot.docs.map((doc) => ({ ...doc.data(), idno: doc.id }));
      setSItemData(myarray);
    });

    return () => unsubscribe();
  }, []);

  const contextValue = {
    itemData,
    handleChange,
    setItemData,
    handleSubmit,
    sItemData,
  };

  return <ResAdminContext.Provider value={contextValue}>{children}</ResAdminContext.Provider>;
}
