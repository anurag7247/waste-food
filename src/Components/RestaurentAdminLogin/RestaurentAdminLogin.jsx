import { useNavigate } from "react-router-dom";
import { useResAdminLogin } from "./Context/ResAdmCon";

function RestaurentAdminLogin() {
  const { change,  data, resAdmReg ,setUserFound, setData,Login} = useResAdminLogin();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    Login();
    
    const found = resAdmReg.some((i) => i.email === data.email && i.password === data.pwd);

    if (found) {
      setUserFound(true);
      alert('Correct id and password');
      navigate("/restaurantAdmin")
    } else {
      setUserFound(false);
      alert('Invalid id and password');
    }

    setData({ email: "", pwd: "" });
  
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="justify-center flex">
          <div className="w-[500px] rounded-xl mt-36 mb-36 bg-slate-800">
            <div className="max-w-[400px] my-12 w-full mx-auto ">
              <div className="flex flex-col px-8">
                <label htmlFor="email" className="ml-2 text-white text-lg font-bold">
                  Enter Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Id"
                  className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  value={data.email}
                  onChange={change}
                />
              </div>
              <div className="flex flex-col px-8">
                <label htmlFor="password" className="ml-2 mt-3 text-lg text-white font-bold">
                  Enter Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="pwd"
                  placeholder="Enter Password"
                  className="py-2 pl-2 rounded-xl text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  value={data.pwd}
                  onChange={change}
                />
              </div>

              <div className="flex flex-col items-center px-8">
                <button
                  className="bg-blue-500 py-2 px-36 mt-3 rounded-xl text-white hover:bg-yellow-400"
                  type="submit"
                  // disabled={loading} // Disable the button while loading
                >
                  {/* {loading ? "Loading..." : "Submit"} */} submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RestaurentAdminLogin;
