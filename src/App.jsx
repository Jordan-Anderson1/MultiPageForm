import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

import ThirdPage from './ThirdPage'
import React from 'react'
import FourthPage from './FourthPage'
import Tracker from './Tracker'
import ThankYou from './ThankYou'

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isYearly, setIsYearly] = useState(true);
  const [onlineChecked, setOnlineChecked] = useState(false);
  const [storageChecked, setStorageChecked] = useState(false);
  const [customizableChecked, setCustomizableChecked] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planPrice, setPlanPrice] = useState(''); 
  const [addOnsPrice, setAddOnsPrice] = useState(0);
 

  return (
    <>
      <div className='h-screen w-screen  bg-slate-200 overflow-hidden flex items-center justify-center min-h-[600px]  min-w-[1000px]'>
        <div className='bg-white h-2/3 w-3/5 rounded-xl flex flex-row max-w-[50%] min-h-[590px] max-h-[590px] min-w-[900px] '>
            <Tracker
              pageNumber={pageNumber}
            />

          {pageNumber === 1 && <FirstPage 
            setPageNumber={setPageNumber} 
            pageNumber={pageNumber}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            setName={setName}
            setPhoneNumber={setPhoneNumber}
            setEmail={setEmail}
          />}

          {pageNumber === 2 && <SecondPage 
            setPageNumber={setPageNumber} 
            pageNumber={pageNumber}
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            planName={planName}
            setPlanName={setPlanName}
            planPrice={planPrice}
            setPlanPrice={setPlanPrice}
            addOnsPrice={addOnsPrice}
          />}

          {pageNumber === 3 && <ThirdPage 
            setPageNumber={setPageNumber} 
            pageNumber={pageNumber}
            onlineChecked={onlineChecked}
            setOnlineChecked={setOnlineChecked}
            storageChecked={storageChecked}
            setStorageChecked={setStorageChecked}
            customizableChecked={customizableChecked}
            setCustomizableChecked={setCustomizableChecked}
            planPrice={planPrice}
            setPlanPrice={setPlanPrice}
            isYearly={isYearly}
            addOnsPrice={addOnsPrice}
            setAddOnsPrice={setAddOnsPrice}
            planName={planName}
            setPlanName={setPlanName}
          />}

          {pageNumber === 4 && <FourthPage
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            planName={planName}
            planPrice={planPrice}
            setPlanPrice={setPlanPrice}
            isYearly={isYearly}
            setStorageChecked={setStorageChecked}
            setOnlineChecked={setOnlineChecked}
            setCustomizableChecked={setCustomizableChecked}
            storageChecked={storageChecked}
            onlineChecked={onlineChecked}
            customizableChecked={customizableChecked}
            addOnsPrice={addOnsPrice}
            setAddOnsPrice={setAddOnsPrice}
            setPlanName={setPlanName}
            />}

            {pageNumber === 5 && <ThankYou />}
          </div>
        </div>
     
    </>
  )
}

export default App
