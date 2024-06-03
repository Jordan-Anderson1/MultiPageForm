import React from 'react'

const ThankYou = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-grow'>
        <img src="../images/icon-thank-you.svg"/>
        <p className='text-4xl font-bold text-[#244A86] my-4'>Thank you!</p>
        <p className='text-center text-xl text-gray-500 font-medium'>Thanks for confirming your subscription! We hope you have <br/>fun using our platform. If you ever need support, please feel <br/> free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default ThankYou