import { useResAdmin } from "./ContextResAdmin/ContextResAdmin"


function Table() {
    const {sItemData} = useResAdmin();
  return (
    <>
        <div className=" justify-center flex">
        {sItemData.map((v, i) => (

           <div key={i} className="relative overflow-x-auto">
             <table className="w-[500px] text-center text-sm  rtl:text-right text-gray-500 dark:text-gray-400" >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <th scope="col" className="px-6 py-3">Item Name</th>
                    <th scope="col" className="px-6 py-3">Update Btn</th> 
                    <th scope="col" className="px-6 py-3"> Btn</th> 

                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{v.name}</td>
                        <td scope="row"><button className=" bg-blue-600 py-1 px-2 rounded-md text-white">Update</button></td>
                        <td scope="row"><button className=" bg-red-600 py-1 px-2 rounded-md text-white">Delete</button></td>
                    </tr>
                </tbody>
            </table>
           </div>

        ))}

        </div>
    </>
  )
}

export default Table