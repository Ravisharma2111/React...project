import React, {useState} from 'react'

const UseStateObject = () => {
const [myObject, setMyObject] = useState({MyName:'RaViiii'});

const changeObject = () => {
    setMyObject('Ravi VGVG')
}
  return (
    <div>
      <h1> Name: {myObject.MyName} & age: 29 & deegre: nsc</h1>
      <button onClick={changeObject}>UpDaTe</button>
    </div>
  );
}

export default UseStateObject
