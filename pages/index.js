import { useState, useEffect } from "react";
import {ethers} from 'ethers';
import * as Constans from '../Utils/config';





export default function Home() {

  //const [tasks, setTasks] = useState("");
  const [tasks, setTask] = useState([]);

  useEffect(() => {

    const connectToMetaMask = async () => {
      try {
          if(window.ethereum){
            const provider = new ethers.providers.JsonRpcProvider(`HTTP://127.0.0.1:7545`); 
            const signer   = await provider.getSigner();
            console.log(await signer.getAddress());
            //console.log(await provider.getCode('0x40961a06CD3e5e567108f24d8D028cBb11143769'));
            const contractInstance = new ethers.Contract(Constans.contractAddress, Constans.contractAbi, signer);
            var tasks = await contractInstance.getAllTasks();
            setTasks(tasks)
            console.log(tasks)
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

        <div className="py-5"></div>
        <table className="table-auto w-1/2 ">
          <thead className=" bg-green-100">
            <tr>
              <th>task ID</th>
              <th>task Describtion</th>
              <th>task status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Malcolm Lockyer</td>
              <td>pending</td>
            </tr>
            <tr>
              <td>2</td>
              <td>The Eagles</td>
              <td>1972</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
              <td>1972</td>
            </tr>
          </tbody>
        </table>

    </div>
  );
};
