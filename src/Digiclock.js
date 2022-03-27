import React,{useState} from "react";


const Digiclock = () => {
let time = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(time);

const newTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
}
setInterval(newTime,1000)
return (
    <>
    <h1> {ctime}  </h1>
 
    </>
)
} 


export default Digiclock;