import React, { useState } from 'react'

function Stateex() {

const [chang, setChang] = useState('ravisharma')

const changeName = () => {
    let val = chang;
    val === 'ravisharma' ? setChang('RAVISHARMA') : setChang('ravisharma');
}




  return (
    <div>
      <h1>{chang}</h1>
      <button onClick={changeName}>click me go anothername</button>
    </div>
  )
}

export default Stateex;
