import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ urlImg, vegNonVeg, restaurant, foodItems, address, restaurantId }) {
  const navigate = useNavigate(); // useNavigate outside the component

  const [value,setValue]=useState();
  console.log(value);
  switch (value) {
    case 'panditjii':
      navigate('/restaurantAdmin');
      break;
  
    default:
      break;
  }
  return (
    <div className="mb-5 bg-fuchsia-900 shadow-2xl shadow-black font-sans w-[300px] border border-gray-200 rounded-lg mt-10 dark:border-gray-700">
      <div>
        <img className="rounded-t-lg items-center" src={urlImg} alt="" />
        <div className="bg-rose-600 w-20">
          <span className="font-normal dark:text-gray-200 text-center truncate">
            {vegNonVeg === 'veg' ? 'Pure Veg' : vegNonVeg}
          </span>
        </div>
      </div>
      <div className="p-1">
        <h5 className=" truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{restaurant}</h5>
      </div>
      <div className="pl-1">
        <p className=" truncate font-normal text-gray-700 dark:text-gray-400">{foodItems}</p>
      </div>
      <div className="pl-1 py-2">
        <p className=" truncate font-normal text-gray-700 dark:text-gray-400">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {address}
        </p>
      </div>
      <div className="mt-5 flex flex-col px-10 pb-3">
        <button
          className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"          
          onClick={() => setValue(restaurantId)}                
        >
          Visit Restaurant
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  urlImg: PropTypes.string.isRequired,
  vegNonVeg: PropTypes.string.isRequired,
  restaurant: PropTypes.string.isRequired,
  foodItems: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  restaurantId: PropTypes.string.isRequired,
};
