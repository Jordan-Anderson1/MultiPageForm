import React from 'react'

const Tracker = ({pageNumber}) => {
  return (
    <>
    <div className='relative self-center'>
        <img 
            className='max-h-full py-3 px-3'
            src='/bg-sidebar-desktop.svg'
        />
        <div className='flex flex-row absolute  top-12 left-10'>
            <div className={`border-white border-2 h-11 w-11  rounded-full flex justify-center ${pageNumber === 1 ? 'bg-white' : null}`}>
              <p className={`self-center font-bold ${pageNumber === 1 ? 'text-[#244A86]' : 'text-white'}`}>1</p>
            </div>

            <div className='flex flex-col mx-4 justify-center'>
              <p className='text-white my-0 text-sm self-bottom'>STEP 1</p>
              <p className='text-white my-0 text-sm font-extrabold'>YOUR INFO</p>
            </div>
        </div>

        <div className='flex flex-row absolute  top-28 left-10'>
            <div className={`border-white border-2 h-11 w-11  rounded-full flex justify-center ${pageNumber === 2 ? 'bg-white' : null}`}>
              <p className={`self-center font-bold ${pageNumber === 2 ? 'text-[#244A86]' : 'text-white'}`}>2</p>
            </div>

            <div className='flex flex-col mx-4 justify-center'>
              <p className='text-white my-0 text-sm self-bottom'>STEP 2</p>
              <p className='text-white my-0 text-sm font-extrabold'>SELECT PLAN</p>
            </div>
        </div>

        <div className='flex flex-row absolute  top-44 left-10'>
            <div className={`border-white border-2 h-11 w-11  rounded-full flex justify-center ${pageNumber === 3 ? 'bg-white' : null}`}>
              <p className={`self-center font-bold ${pageNumber === 3 ? 'text-[#244A86]' : 'text-white'}`}>3</p>
            </div>

            <div className='flex flex-col mx-4 justify-center'>
              <p className='text-white my-0 text-sm self-bottom'>STEP 3</p>
              <p className='text-white my-0 text-sm font-extrabold'>ADD-ONS</p>
            </div>
        </div>

        <div className='flex flex-row absolute  top-60 left-10'>
            <div className={`border-white border-2 h-11 w-11  rounded-full flex justify-center ${pageNumber === 4 || pageNumber === 5 ? 'bg-white' : null}`}>
              <p className={`self-center font-bold ${pageNumber === 4 || pageNumber === 5 ? 'text-[#244A86]' : 'text-white'}`}>4</p>
            </div>

            <div className='flex flex-col mx-4 justify-center'>
              <p className='text-white my-0 text-sm self-bottom'>STEP 4</p>
              <p className='text-white my-0 text-sm font-extrabold'>SUMMARY</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tracker