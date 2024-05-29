import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "@firebase/firestore";
import { firestore } from '../../Firebase/firebase';

const RestaurantTemplate = () => {
    const { id } = useParams();
    const [resData, setResData] = useState(null);

    const fetchDataById = async (collectionName, documentId) => {
        try {
            // Reference to the document by its ID
            const docRef = doc(firestore, collectionName, documentId);
        
            // Fetch the document
            const docSnap = await getDoc(docRef);
        
            // Check if the document exists
            if (docSnap.exists()) {
                // Access the document data
                const data = docSnap.data();
                console.log('Document data:', data);
                setResData(data);
            } else {
                console.log('No such document!');
                setResData(null);
            }
        } catch (error) {
            console.error('Error fetching document:', error);
            setResData(null);
        }
    };

    useEffect(() => {
        fetchDataById('courseData', id);
    }, [id]);

    return (
        <>
            <div className=" bg-gray-800 h-[800px]">
                <div className=" w-full h-[400px]">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex flex-col">
                            {resData && <img className="mt-10 ml-20 shadow-2xl shadow-black" src={resData.urlImg} alt="" style={{ height: '360px', width: '600px' }} />}
                        </div>
                        <div className=" flex flex-col">
                            <div className="bg-blue-700 w-[500px] mt-10 ml-44 rounded-3xl shadow-2xl shadow-black ">
                                <div className=" bg-white w-[300px] ml-[100px] h-full rounded-2xl ">
                                    {resData && (
                                        <table className="w-full border-collapse border-blue-800">
                                            <thead>
                                                <tr className="bg-blue-800 text-white">
                                                    <th className=" py-2 text-center text-2xl font-semibold font-serif"> Available Food</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {resData.items.map((item, index) => (
                                                    <tr key={index} className='bg-gray-200'>
                                                        <td className="px-5 py-2 text-xl font-semibold font-serif">{item}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[400px] px-20">
                    <div className=" bg-fuchsia-900 shadow-2xl shadow-black font-sans w-[300px] border border-gray-200 rounded-lg mt-9 dark:border-gray-700">
                        <div className="p-1">

                            { resData && <h5 className="truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{resData.restaurant}</h5>}

                        </div>
                        <div className="pl-1">
                           { resData &&    <p className="truncate font-normal text-gray-700 dark:text-gray-400">{resData.foodItems}</p>}
                        </div>
                        <div className="pl-1 py-2">
                            { resData && 
                            <p className="truncate font-normal text-gray-700 dark:text-gray-400">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                               {resData.address}
                            </p> }
                            
                        </div>
                        <div className="pl-1 py-2">
                           
                            <p className="truncate font-normal text-gray-700 dark:text-gray-400">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                              Contact:- +919111989822
                            </p> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantTemplate;
