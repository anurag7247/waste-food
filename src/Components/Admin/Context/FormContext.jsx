import  { createContext, useContext, useState, useEffect, useRef } from "react";
import { firestore, imgDB } from "../../../Firebase/firebase";
import { addDoc, collection, query, onSnapshot, updateDoc, doc, deleteDoc} from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [items,setItems] = useState([]);
  const [data, setData] = useState({
    restaurant: "",
    restaurantId: "",
    urlImg: null,
    vegNonVeg: "",
    foodItems: "",
    address: "",
    email: "",
    password: "", 
    confirmPassword: "",
    idno: "",
    items:items
  });
  const [courseData, setCourseData] = useState([]);
  const [img, setImg] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const q = query(collection(firestore, "courseData"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const myarray = querySnapshot.docs.map((doc) => ({ ...doc.data(), idno: doc.id }));
      setCourseData(myarray);
    });

    return () => unsub();
  }, []);

  
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(firestore, "courseData", id));
      // Update courseData state after deleting the document
      setCourseData(courseData.filter(item => item.idno !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const change = (e) => {
    if (e.target.name === "urlImg") {
      setImg(e.target.files[0]);
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    const imgsRef = ref(imgDB, `Imgs/${v4()}`);
    await uploadBytes(imgsRef, img);
    return getDownloadURL(imgsRef);
  };

  const clearFileInput = () => {
    fileInputRef.current.value = "";
    setImg(null);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(data.password)) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (!validateEmail(data.email)) {
      alert("Invalid email address");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      let imgUrl = "";
      if (data.idno === "") {
        imgUrl = img ? await handleImageUpload() : "";
        await addDoc(collection(firestore, "courseData"), { ...data, urlImg: imgUrl });
      } else {
        if (img) {
          imgUrl = await handleImageUpload();
          await updateDoc(doc(firestore, "courseData", data.idno), { ...data, urlImg: imgUrl });
        } else {
          await updateDoc(doc(firestore, "courseData", data.idno), data);
        }
      }

      setData({
        restaurant: "",
        restaurantId: "",
        urlImg: null,
        vegNonVeg: "",
        foodItems: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
        idno: ""
      });

      clearFileInput();

      alert(data.idno === "" ? "Added successfully" : "Updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const contextValue = {
    data,
    setData,
    courseData,
    img,
    fileInputRef,
    change,
    handleSubmit,
    setItems,
    deleteData, 
    items,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
