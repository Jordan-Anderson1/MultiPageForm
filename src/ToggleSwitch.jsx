import React from 'react'

const ToggleSwitch = ({isYearly, setIsYearly}) => {

    

  return (
    <>
    <div className='flex flex-row bg-[#F8F9FE] justify-center p-2 '>
        <p className={`font-bold mr-8 self-center ${isYearly ? 'text-gray-500' : 'text-[#244A86]'}`}>Monthly</p>
        <div 
            onClick={() => setIsYearly(!isYearly)}
            className='flex w-16 h-8 rounded-full bg-[#244A86] items-center px-1 py-1'>
            <span className={`transition-all duration-500 h-7 w-7 rounded-full bg-white ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}/>
        </div>

        <p className={`font-bold ml-8 self-center ${isYearly ? 'text-[#244A86]' : 'text-gray-500'}`}>Yearly</p>
    </div>
    </>
  )
}

export default ToggleSwitch