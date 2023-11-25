import { createContext, useEffect, useState } from "react";
import { Web3 } from 'web3'

export const AccountContext = createContext(null)

export const AccountProvider = ({ children }) => {

    const [walletConnected, setWalletConnected] = useState(false)
    const [instruction, setInstruction] = useState("Connecting to metamask...")
    
    // let ethereum;
    // if(window.ethereum){
    //     console.log('has eth obj')
    // }
    // else{
    //     console.log('not found')
    // }

    
    useEffect(() => {
        const connectWallet = async () => {
            if(!ethereum){
                setInstruction("Please connect to metamask wallet extension or app to use this application")
                return ;
            }
    
            try{
                await ethereum.send('eth_requestAccounts')
                window.web3 = new Web3(ethereum)
            }
    
            catch(e){
                console.log(e)
                setInstruction("Wallet connection denied, please reload the page and try again")
            }

            setInstruction("")
            setWalletConnected(true)
        }

        // connectWallet()
        
    }, [])

    return (
        <AccountProvider value={{
            instruction
        }}>
            { children }
        </AccountProvider>
    )
}