import React from 'react'

export const WalletNotConnected = ({ instruction, connect }) => {
    
    return (
        <div className='w-full p-5 text-center font-bold text-sm h-screen flex justify-center items-center flex-col space-y-5'>
            <div className='bg-gray-50 min-w-2/3 md:min-w-1/3 shadow-xl p-5 rounded-md italic'>
                { instruction }
            </div>

            <div className='bg-gray-50 min-w-2/3 md:min-w-1/3 shadow-xl p-5 rounded-md'>
                <button 
                    className='bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-slate-50 px-4 py-3 rounded-md'
                    onClick={connect}
                >
                    Connect Wallet
                </button>                
            </div>
        </div>
    )
}
