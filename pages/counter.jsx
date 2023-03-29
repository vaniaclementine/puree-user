import React, {useState} from "react";

export default function Counter(){
  let [num, setNum]= useState(0);

  let incNum =()=>{
    if(num<100) //nanti diganti jumlah stock
    {
    setNum(Number(num)+1);
    }
  };

  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }

 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <div className="mt-3 grid grid-cols-3">         
        <button className="ml-24 h-10 bg-transparent font-semibold text-lg " type="button" onClick={decNum}>-</button>
        <input type="text" className="bg-transparent w-32 h-10 text-lg drop-shadow-lg rounded-lg text-center" value={num} onChange={handleChange}/>
        <button className="mr-24 h-10 bg-transparent font-semibold text-lg text-gray-500" type="button" onClick={incNum}>+</button>
    </div>
  );
}
