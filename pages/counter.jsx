import React, {useState, useEffect} from "react";

export default function Counter(){
  const [num, setNum]= useState(Number(localStorage.getItem("counterValue")) || 0);

  const incNum =()=>{
    num < 100 ? setNum(Number(num)+1) : false
  };

  const decNum = () => {
    num > 0 ? setNum(num-1) : false
  }

  const handleChange = (e)=>{
   setNum(e.target.value);
   localStorage.setItem("counterValue", e.target.value);
  }

   return(
    <div className="mt-3 grid grid-cols-3">         
        <button className="ml-24 h-10 bg-transparent font-semibold text-lg " type="button" onClick={decNum}>-</button>
        <input type="text" className="bg-transparent w-32 h-10 text-lg drop-shadow-lg rounded-lg text-center" value={num} onChange={handleChange}/>
        <button className="mr-24 h-10 bg-transparent font-semibold text-lg text-gray-500" type="button" onClick={incNum}>+</button>
    </div>
  );
}
