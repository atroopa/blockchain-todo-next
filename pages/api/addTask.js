import { ethers } from "ethers";
import * as Constans from "../../Utils/config";


async function handler (req, res) {
    try {

        const task = req.body;
        const provider = new ethers.providers.JsonRpcProvider(Constans.API_URL);
        const signer   = new ethers.Wallet(Constans.PRIVATE_KEY, provider);
        const contract = new ethers.Contract(Constans.contractAddress, Constans.contractAbi, signer);
        const tx = await contract.addTask(task);
        await tx.wait();
        
        res.status(200).json({message : "Task has been added"});
        
    } catch (error) {
        console.error(error);
    }
}

export default handler;