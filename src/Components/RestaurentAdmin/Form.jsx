// import React from 'react'
import { useResAdmin } from "./ContextResAdmin/ContextResAdmin"


const Form = () => {
    const {items, handleChange, handleSubmit} = useResAdmin();
    return (
      <>
        
          
          <div className=" justify-center flex">
            <div className=" rounded-3xl mt-5 shadow-yellow-300 mb-4">
              <div>
                <form 
                 onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                >
                <input type="text" className=" px-52 py-2 rounded-xl" value={items} onChange={handleChange} />
                <button className="px-4 py-2 rounded-lg nd text-white bg-blue-600 ml-2 hover:bg-yellow-400 hover:text-black">Submit</button>
                </form>
                
              </div>
            </div>
          </div>
      
        
      </>
    )
}

export default Form