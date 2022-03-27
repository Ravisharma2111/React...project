import React, {useState} from 'react'

const RulesHook = () => {
    const MyBioData = [{id:0, myName:"vinod" , age:24, deegre:'msc'},{
            id:1, myName:"Aman" , age:25 , deegre:'bsc'},{
            id:2, myName:"Vijay" , age:26, deegre:'nsc'},{
            id:3, myName:"Ravi" , age:27, deegre:'tsc'}]

    const [myArray, setMyArray] = useState(MyBioData);
const clearArray = () => {
    setMyArray([]);
}

    return (
    <>
    {
 myArray.map((curElem) => <h1>Name:{curElem.myName} & Age:{curElem.age} & deegre:{curElem.deegre}</h1>)
    }
   
<button onClick={clearArray}>CLear array</button>
    </>
  )
}

export default RulesHook;






