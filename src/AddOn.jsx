import React, { useState } from 'react'


const AddOn = ({title, description, price, value, setValue, addOnsPrice, setAddOnsPrice, isYearly}) => {


  return (
        <div className={`flex flex-row border border-gray-500 p-2 px-4 rounded-xl ${value ? 'border-[#244A86] bg-[#F8F9FE]' : 'bg-white'}`}>
     
          <input type='checkbox' value={value} checked={value} onChange={() => {
            setValue(!value);
            if(!value){
              setAddOnsPrice(addOnsPrice + price);
            }else{
              setAddOnsPrice(addOnsPrice - price);
            }
          }}/>

          <div className='flex flex-col ml-6 p-2'>
            <p className='text-[#244A86] font-bold'>{title}</p>
            <p className='text-gray-500 font-bold'>{description}</p>
          </div>

          <p className='text-[#244A86] font-bold ml-auto self-center'>{`+$${price}/${isYearly ? 'yr' : 'mo'}`}</p>
          


        </div>
  )
}

export default AddOn