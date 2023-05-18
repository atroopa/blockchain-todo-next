import { useState, useEffect } from "react";
import {ethers} from 'ethers';
import * as Constans from '../Utils/config';

export default function Home() {

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


  return (
    <div>
      hello next
    </div>
  )
}
