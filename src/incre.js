import React,{useState} from 'react';
import  ReactDOM from 'react-dom';

const TodoList = () => {

  const [num, setNum] = useState(0)

  const incNum = () => {
    setNum(num + 1)
  }
  const decNum = () => {
    if(num > 0){
    setNum(num - 1);
    }else{
      alert('here is the last number')
setNum(1);
    }
  }

  return (
<>
<div className='main_div'>
<div className='center_div'>
<h1> {num} </h1>
<div className='buttuon_div'>
<button onClick={incNum} >Increment</button>
<button onClick={decNum} >Decrement</button>
</div>
</div>
</div>
</>
  )
  }

  export default TodoList;