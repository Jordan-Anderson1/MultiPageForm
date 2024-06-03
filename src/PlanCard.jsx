import React from 'react'

const PlanCard = ({src, title, itemPrice, frequency, isYearly, setPlanName, setPlanPrice}) => {


  return (
    <div className='min-w-[150px] flex flex-col outline-none border-2 border-gray-300 p-4 rounded-xl focus:border-[#244A86] focus:bg-[#F8F9FE] cursor-pointer' 
      tabIndex={0}
      onClick={() => {
        setPlanName(title);
        setPlanPrice(itemPrice);
        }}>

        <img src={src} className='max-h-[30%] m-2 self-start mb-12'/>
        <p className='text-[#244A86] font-bold mt-auto mb-2'>{title}</p>
        <p className='text-gray-500 font-bold mb-2'>{`$${itemPrice}/${frequency}`}</p>
        {isYearly && <p className='text-[#244A86] font-bold'>2 months free</p>}

    </div>
  )
}

export default PlanCard