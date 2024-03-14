import { createContext, useContext } from "react";
import { getDoc, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../../Firebase/firebase";
import { useFormContext } from "../../Admin/Context/FormContext";
import { useResAdminLogin } from "../../RestaurentAdminLogin/Context/ResAdmCon";

const ResAdminContext = createContext();

export function useResAdmin() {
  return useContext(ResAdminContext);
}

export function ResAdminProvider({ children }) {
  const { items, setItems } = useFormContext();
  const { userData } = useResAdminLogin();

  const handleChange = (e) => {
    setItems([e.target.value]);
  };

  const handleSubmit = async () => {
    try {
      // Get the existing document from Firestore
      const docRef = doc(firestore, "courseData", userData.idno);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // If the document exists, update the 'items' array
        const existingItems = docSnap.data().items || []; // Existing items array or empty array
        const updatedItems = [...existingItems, ...items]; // Combine existing items with new items
        await updateDoc(docRef, { items: updatedItems });
        alert("Items updated successfully");
      } else {
        alert("Document does not exist");
      }
    } catch (error) {
      console.error("Error updating items: ", error);
      alert("Failed to update items");
    }
  };

  const contextValue = {
    items,
    handleChange,
    handleSubmit,
  };

  return (
    <ResAdminContext.Provider value={contextValue}>
      {children}
    </ResAdminContext.Provider>
  );
}
