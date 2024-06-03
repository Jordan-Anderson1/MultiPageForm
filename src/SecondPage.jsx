import React, { useState} from 'react'
import PlanCard from './PlanCard'
import ToggleSwitch from './ToggleSwitch';

const SecondPage = ({pageNumber, setPageNumber, isYearly, setIsYearly, setPlanName, planName, planPrice, setPlanPrice, addOnsPrice}) => {

    


  return (
    <div className=' flex flex-col mx-12 my-16 flex-grow   '>
        <h1 className='text-[#244A86] text-4xl font-bold mb-2'>Select Your Plan</h1>
        <p className='text-gray-500 font-bold mb-10'>You have the option of monthly or yearly billing</p>
        <div className='flex flex-row justify-between space-x-4 mb-6'>
            <PlanCard
                src={'icon-arcade.svg'}
                title='Arcade'
                itemPrice={isYearly? 90 : 9}
                frequency={isYearly ? 'Yearly' : 'Monthly'}
                isYearly={isYearly}
                setPlanName={setPlanName}
                setPlanPrice={setPlanPrice}
                />
            <PlanCard
                src={'/icon-advanced.svg'}
                title='Advanced'
                itemPrice={isYearly ? 120 : 12}
                frequency={isYearly ? 'Yearly' : 'Monthly'}
                isYearly={isYearly}
                setPlanName={setPlanName}
                setPlanPrice={setPlanPrice}
                />
            <PlanCard
                src={'/icon-pro.svg'}
                title='Pro'
                itemPrice={isYearly ? 150 : 15}
                frequency={isYearly ? 'Yearly' : 'Monthly'}
                isYearly={isYearly}
                setPlanName={setPlanName}
                setPlanPrice={setPlanPrice}
                />

               
        </div>

        <ToggleSwitch 
            isYearly={isYearly}
            setIsYearly={setIsYearly}   
        /> 
        
        

        <div className=' flex flex-row justify-between mt-auto'>
            <button onClick={() => {setPageNumber(pageNumber - 1)}} className='bg-white text-[#244A86] font-bold focus:outline-none border-none'>Go Back</button>
            <button onClick={() => {if(planName !== ''){setPageNumber(pageNumber + 1)}}} className='bg-[#244A86] font-bold focus:outline-none text-white'>Next Step</button>
        </div>

    </div>
  )
}

export default SecondPage