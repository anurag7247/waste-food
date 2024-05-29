import { useEffect, useState } from "react";
import { useResAdminLogin } from "../RestaurentAdminLogin/Context/ResAdmCon";
import { collection, query, onSnapshot,} from "@firebase/firestore";
import { firestore } from "../../Firebase/firebase";


function Table() {
  const { userData, resAdmReg, setUserData } = useResAdminLogin();
  console.log('userdata',userData);
  console.log('resadmRed',resAdmReg);

  const [user, setUser] = useState()


  useEffect(() => {
    const q = query(collection(firestore, "logRest"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let myarray = [];
      querySnapshot.forEach((d) => {
        myarray.push({ ...d.data(), idno: d.id });
      });
      // 
      console.log('tabel',myarray[0]);
      let logData = myarray[0];

      console.log('logdata',logData)

      for (let i of resAdmReg) {
        if (i.email === logData.email && i.password === logData.pwd) {
          setUser(i);
           console.log('i',i);
           setUserData(i);
          // console.log(userData);
          break;
        }
      }

    });

    return () => unsub();
  }, [resAdmReg, setUserData]);

  return (
    <div className="justify-center flex">
      <div className="relative overflow-x-auto">
        <table className="w-[500px] text-center text-sm rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item Name
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Update Btn
              </th> */}
              <th scope="col" className="px-6 py-3">
                Btn
              </th>
            </tr>
          </thead> 
          <tbody>
            {user && user.items.map((v, i) => (
              <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {v}
                </td>
                {/* <td scope="row">
                  <button className="bg-blue-600 py-1 px-2 rounded-md text-white">Update</button>
                </td> */}
                <td scope="row">
                  <button className="bg-red-600 py-1 px-2 rounded-md text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;