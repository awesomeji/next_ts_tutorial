import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
    //h-screen => height: 100vh
    //w-screen => width: 100vw
    //flex-col => flex-direction: column
    //flex-row => flex-direction: row
  
    //items-center => justify-content: center
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center' >
   {/* <div className='text-1xl text-red-100'>Hillow WOrld(최소범위)</div> 
   <div className='text-9xl text-red-900'>Hillow WOrld(최대범위)</div> */}
            
            <div className='text-2xl text-center max-w-2xl'>Which Pokemon is rounder?</div>
                <div className='p-2'></div> 
            <div className='border rounded p-8 flex justify-between max-w-2xl'>
                <div className='w-16 h-16 bg-red-200'> </div>
                <div className='p-8'>Vs</div>
                <div className='w-16 h-16 bg-pink-400'> </div>

            </div>
      </div>
  )
}

export default Home
