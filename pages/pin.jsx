import React, { useState } from 'react'
import Link from 'next/link';

const PinInput = () => {
    const [pin, setPin] = useState('');
  
    const handlePinChange = (event) => {
      setPin(event.target.value);
    };
  
    const handlePinSubmit = (event) => {
      event.preventDefault();
  
      // Call your checking algorithm here to validate the entered PIN
      const isValid = checkPin(pin);
  
      // Provide feedback to the user
      if (isValid) {
        alert('PIN is correct!');
      } else {
        alert('Invalid PIN. Please try again.');
      }
    };
  
    return (
        <div className='h-screen bg-[url(../images/bg-pay.png)]'>
            <div className='text-white font-bold text-center pt-[8rem] pb-[5rem]'>
                <p className="text-[40px]">Rp118.560</p>
                <p className='text-sm'>Enter pin to pay</p>
            </div>
            <form onSubmit={handlePinSubmit} id='inputpin' className='w-full'>
                <input
                required
                type="password"
                value={pin}
                onChange={handlePinChange}
                maxLength={4}
                className='text-center' // Set the desired maximum PIN length
                />
                <Link href='/' className='flex justify-center'>
                    <div id='submitbtn'>
                        <h1>Submit</h1>
                    </div>
                </Link>
            </form>
        </div>
    );
  };
  
  export default PinInput;
