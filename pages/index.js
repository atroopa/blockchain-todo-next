import { useState, useEffect } from "react";
import {ethers} from 'ethers';
import * as Constans from '../Utils/config';





export default function Home() {

  const [tasks, setTasks] = useState("");

  useEffect(() => {

    const connectToMetaMask = async () => {
      try {
          if(window.ethereum){
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer   = await provider.getSigner();
            console.log(await signer.getAddress());
          }else{
            console.log("MetaMask not Found!");
          }
      }catch (error) {
        console.log(error); 
      }
    }
    connectToMetaMask();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
  }

  const handleChange = async event  => {
    event.preventDefault();
    setTasks(event.target.value);
  }

  return (
    <div className="flex flex-col  items-center justify-center">
      <div className=" text-5xl font-bold py-10">
        Welcome to decenteralize To-do App 
      </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input className="appearance-none 
                              bg-transparent 
                              border-none 
                              w-full 
                              text-gray-700 
                              mr-3 py-1 px-2 
                              leading-tight 
                              focus:outline-none" 
                              aria-label="Full name" 
                              type="text"  
                              name="task"
                              placeholder="Add Task Here ..."
                              onChange={handleChange}
                              value={tasks} />
            <button className="flex-shrink-0 
                             bg-teal-500 
                             hover:bg-teal-700 
                             border-teal-500 
                             hover:border-teal-700 
                             text-sm border-4 
                             text-white 
                             py-1 px-2 rounded" 
                             type="button">
                             add
            </button>
            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              remove
            </button>
          </div>
        </form>

    </div>
  );
};
