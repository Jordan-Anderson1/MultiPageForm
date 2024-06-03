import React from 'react'

const FourthPage = ({pageNumber, setPageNumber, planName, setPlanName, planPrice, isYearly, setOnlineChecked, setCustomizableChecked, setStorageChecked, onlineChecked, 
  customizableChecked, storageChecked, addOnsPrice, setPlanPrice, setAddOnsPrice}) => {


  return (
    <div className=' flex flex-col mx-12 my-16 flex-grow'>
        <h1 className='text-[#244A86] text-4xl font-bold mb-2'>Finishing Up</h1>
        <p className='text-gray-500 font-bold mb-10'>Double check everything looks OK before confirming</p>

        <div className='bg-[#F8F9FE] p-8 rounded-xl'>

          <div className='flex flex-row'>
              <div className='flex flex-col'>
                  <p className='text-[#244A86] font-bold'>{`${planName}(${isYearly ? 'Yearly' : 'Monthly'})`}</p>
                  <p 
                  className='underline text-gray-500 font-bold'
                  onClick={() => {
                    setPageNumber(2)
                    setOnlineChecked(false);
                    setCustomizableChecked(false);
                    setStorageChecked(false);
                    setPlanName('');
                    setPlanPrice(0);
                    setAddOnsPrice(0);
                  }}>change</p>
              </div>
              <p className='text-[#244A86] font-bold ml-auto'>{`$${planPrice}/${isYearly ? 'yr' : 'mo'}`}</p>
          </div>

          <hr className='h-[2px] bg-gray-200 border-0 my-6'></hr>


          {onlineChecked && 
            <div className='flex flex-row'>
              <p className='text-gray-500 font-medium'>Online Service</p>
              <p className='ml-auto text-[#244A86] font-medium text-sm'>{`+$${isYearly ? 10 : 1}/${isYearly ? 'yr' : 'mo'}`}</p>
            </div>}

          {customizableChecked && 
          <div className='flex flex-row'>
            <p className='text-gray-500 font-medium'>Customizable profile</p>
            <p className='ml-auto text-[#244A86] font-medium text-sm'>{`+$${isYearly ? 20 : 2}/${isYearly ? 'yr' : 'mo'}`}</p>
          </div>}

          {storageChecked && 
          <div className='flex flex-row'>
            <p className='text-gray-500 font-medium'>Larger storage</p>
            <p className='ml-auto text-[#244A86] font-medium text-sm'>{`+$${isYearly ? 20 : 2}/${isYearly ? 'yr' : 'mo'}`}</p>
          </div>}

          
          

          

        </div>

        <div className='p-8 flex flex-row'>
            <p className='text-gray-500 font-medium'>{`Total(${isYearly ? 'per year' : 'per month'})`}</p>
            <p className='ml-auto text-[#2B22AB] text-xl font-bold'>{`$${planPrice + addOnsPrice}/${isYearly ? 'yr' : 'mo'}`}</p>
          </div>

        <div className=' flex flex-row justify-between mt-auto'>
            <button onClick={() => {setPageNumber(pageNumber - 1)}} className='bg-white text-[#244A86] font-bold focus:outline-none border-none'>Go Back</button>
            <button onClick={() => {setPageNumber(pageNumber + 1)}} className='bg-[#244A86] font-bold focus:outline-none text-white'>Confirm</button>
        </div>

    </div>
  )
}

export default FourthPage