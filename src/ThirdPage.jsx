import React, { useState } from 'react'
import AddOn from './AddOn'

const ThirdPage = ({pageNumber, setPageNumber, onlineChecked, setOnlineChecked, storageChecked, setStorageChecked, customizableChecked, setCustomizableChecked, 
  isYearly, addOnsPrice, setAddOnsPrice, setPlanName}) => {




  return (
    <div className='flex flex-col justify-center flex-grow mx-12 my-16'>
        <h1 className='text-[#244A86] text-4xl font-bold mb-2'>Pick add-ons</h1>
        <p className='text-gray-500 font-bold mb-10'>Add-ons help to enhance your gaming experience</p>

        <div className='flex flex-col space-y-4 '>
          <AddOn
            title='Online service'
            description='Access to multiplayer games'
            price={isYearly ? 10 : 1}
            value={onlineChecked}
            setValue={setOnlineChecked}
            addOnsPrice={addOnsPrice}
            setAddOnsPrice={setAddOnsPrice}
            isYearly={isYearly}
          />

          <AddOn
            title='Larger storage'
            description='Extra 1TB of cloud save'
            price={isYearly ? 20 : 2}
            value={storageChecked}
            setValue={setStorageChecked}
            addOnsPrice={addOnsPrice}
            setAddOnsPrice={setAddOnsPrice}
            isYearly={isYearly}
          />

          <AddOn
            title='Customizable profile'
            description='Cutome theme on your profile'
            price={isYearly ? 20 : 2}
            value={customizableChecked}
            setValue={setCustomizableChecked}
            addOnsPrice={addOnsPrice}
            setAddOnsPrice={setAddOnsPrice}
            isYearly={isYearly}
          />
        </div>

        <div className='mt-auto flex flex-row justify-between'>
            <button onClick={() => {
              setPageNumber(pageNumber - 1)
              setOnlineChecked(false);
              setCustomizableChecked(false);
              setStorageChecked(false);
              setAddOnsPrice(0);
              setPlanName('');
            }} className='bg-white text-[#244A86] font-bold focus:outline-none border-none'>Go Back</button>
            <button onClick={() => {setPageNumber(pageNumber + 1); }} className='bg-[#244A86] font-bold focus:outline-none text-white'>Next Step</button>
        </div>

        


    </div>
  )
}

export default ThirdPage