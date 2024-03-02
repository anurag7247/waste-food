import PropTypes from 'prop-types';

export default function Card({ urlImg, vegNonVeg, restaurant, foodItems, address, setData, deleteData}) {
  return (
    <div className="mb-5 shadow-2xl shadow-black font-sans w-[300px] bg-white border border-gray-200 rounded-lg mt-10 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="rounded-t-lg items-center" src={urlImg} alt="" />
        <div className="bg-rose-600 w-20 rounded-r-md">
          <span className=" truncate font-normal dark:text-gray-200 text-center">
            {vegNonVeg === 'veg' ? 'Pure Veg' : vegNonVeg}
          </span>
        </div>
      </div>
      <div className="pl-1">
        <h5 className=" truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{restaurant}</h5>
      </div>
      <div className="pl-1">
        <p className=" truncate font-normal text-gray-700 dark:text-gray-400">{foodItems}</p>
      </div>
      <div className="pl-1">
        <p className=" truncate font-normal text-gray-700 dark:text-gray-400">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {address}
        </p>
      </div>
      <div className="mt-5 flex flex-col px-10 justify-between">
        <button
          className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setData()}
        >
          Update
        </button>
        <button
          className="mt-2 mb-2 px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            deleteData();
            alert('deleted successfully');
          }}
        >
          Delete
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
  setData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};
