import React from 'react'


const FirstPage = ({pageNumber, setPageNumber, name, setName, email, setEmail, phoneNumber, setPhoneNumber}) => {




  return (
    
            <div className=' flex flex-col mx-12 my-16 flex-grow'>
                <h1 className='text-[#244A86] text-4xl font-bold mb-2'>Personal Info</h1>
                <p className='text-gray-500 font-bold mb-4'>Please provide your name e-mail address and phone number</p>
                <form className='flex flex-col flex-grow'>
                    <label className='text-[#244A86] font-bold my-1' htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => {setName(e.target.value)}}
                        placeholder='e.g Stephen King'
                        className='text-[#244A86] border-2 bg-white p-4 placeholder-gray-500 font-bold border-gray-300 rounded-xl mb-4 outline-none focus:border-[#244A86]'/>

                    <label className='text-[#244A86] font-bold my-1' htmlFor="email">Email</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        placeholder='e.g stephenking@lorem.com'
                        className='text-[#244A86] bg-white p-4 placeholder-gray-500 font-bold border-gray-300 border-2 rounded-xl mb-4 outline-none focus:border-[#244A86]'/>

                    <label className='text-[#244A86] font-bold my-1' htmlFor="phone">Phone</label>
                    <input 
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => {setPhoneNumber(e.target.value)}}
                        placeholder='e.g +614 12 123 1234'
                        className='text-[#244A86] bg-white p-4 placeholder-gray-500 font-bold border-gray-300 border-2 rounded-xl mb-4 outline-none focus:border-[#244A86]'/>

                    <div className='mt-auto flex flex-row justify-between ml-auto'>
                        <button onClick={() => {setPageNumber(pageNumber + 1)}}type="submit" className='bg-[#244A86] font-bold focus:outline-none text-white'>Next Step</button>
                    </div>
                </form>
            </div>

     
  )
}

export default FirstPage