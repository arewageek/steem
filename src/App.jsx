import { useEffect, useState } from 'react'
import './App.css'
// import { AccountProvider } from './contexts/AccountContext'
import { Web3 } from 'web3'

import { HomePage } from './pages'
import { WalletNotConnected } from './components/WalletNotConnected'

function App() {

  // setup state variables
  const [instruction, setInstruction] = useState("Connecting to Metamask...")
  const [connectedAccount, setConnectedAccount] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)

  // setup the ethereum object
  let ethereum
  if(typeof window != undefined) ethereum = window.ethereum

  const checkWallet = () => {
    if(!ethereum){
      setInstruction("Please metamask first before using this application")
      return ;
    }
  }
  
  const connectWallet = async () => {
    try{
      checkWallet()

      await ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(ethereum)

      setWalletConnected(true)
    }

    catch(e){
      console.log(e)
      setInstruction("Wallet connection denied, please reload the page and try again")
      setWalletConnected(false)
    }

    setInstruction("")
    setWalletConnected(true)
  }
  
  useEffect(() => {
    // connectWallet()
  }, [ethereum])
  
  return (
    <div className='m-0 w-screen max-w-screen min-h-screen bg-gray-100 p-2 text-gray-700'>
      {
        walletConnected ? (
          <HomePage />
        )
        : (
          <WalletNotConnected instruction={instruction} connect={connectWallet} />
        )
      }
    
    </div>
  )
}

export default App
