import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../../../Firebase/firebase";
import { collection, onSnapshot } from "@firebase/firestore";
// import { useNavigate } from "react-router-dom";
const ResAdminLoginContext = createContext();

export function useResAdminLogin() {
  return useContext(ResAdminLoginContext);
}

export function ResAdmProvider({ children }) {
  const [resAdmReg, setResAdmReg] = useState([]);
  const [data, setData] = useState({ email: "", pwd: "" });
  const [userFound, setUserFound] = useState(false);
  const [userData, setUserData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     collection(firestore, "courseData"),
  //     (querySnapshot) => {
  //       const myarray = querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         idno: doc.id,
  //       }));
  //       setResAdmReg(myarray);
  //       // setLoading(false);
  //     }
  //   );

  //   return unsubscribe;
  // }, []);

  const getResData = () => {
      const unsubscribe = onSnapshot(
      collection(firestore, "courseData"),
      (querySnapshot) => {
        const myarray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          idno: doc.id,
        }));
        setResAdmReg(myarray);
        // setLoading(false);
      }
    );

    return unsubscribe;
  }

  useEffect(() => {
    getResData();
  }, [])
  

  const change = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const Login = () => {
    for (let i of resAdmReg) {
      if (i.email === data.email && i.password === data.pwd) {
        setUserData(i);
        // console.log(userData);
        break;
      }
    }
  };
  useEffect(() => {
    console.log('context user data',userData); // Log userData whenever it changes
  }, [userData]);

  //   const found = resAdmReg.some((i) => i.email === data.email && i.password === data.pwd);

  //   if (found) {
  //     setUserFound(true);
  //     alert('Correct id and password');

  //   } else {
  //     setUserFound(false);
  //     alert('Invalid id and password');
  //   }

  //   setData({ email: "", pwd: "" });
  // };

  const value = {
    change,
    data,
    resAdmReg,
    setUserFound,
    setData,
    userFound,
    Login,
    userData,
    setUserData
  };

  return (
    <ResAdminLoginContext.Provider value={value}>
      {children}
    </ResAdminLoginContext.Provider>
  );
}
