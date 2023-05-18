import { useState, useEffect } from "react";
import ethers from 'ethers';

export default function Home() {

  useEffect(() => {

    const connectToMetaMask = async () => {
      try {
          if(window.ethereum){
            const provider = new ethers.providers.web3Provider(window.ethereum);
            const signer   = provider.getSigner();
            console.log(await signer.getAddress());
          }else{
            console.log("MetaMask not Found!");
          }
      }catch (error) {
        console.log(error); 
      }
    }

  }, []);


  return (
    <div>
      hello next
    </div>
  )
}
