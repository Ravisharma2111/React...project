import React, {useState} from 'react'

const BasicForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [allEntry, setAllEntry] = useState([]);
 
const submitForm = (e) => {
    e.preventDefault();
const newEntry = {email: email, password: password};
setAllEntry([ ... allEntry, newEntry]);
console.log(allEntry);
}


    return (
    <>
    <form action='' onSubmit={submitForm} >
       
     <div>     
      Email : 
<input type='text' name='email' id='email' placeholder='enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />  
 </div>
 <div>
 password :
 <input type='password' name='password' id='password' placeholder='enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />  
 </div>
.
 <button type='submit' > login </button>
</form>
<div>
{
allEntry.map((curElem) => {
    return(
        <div>
        <p>{curElem.email}</p>
        <p>{curElem.password}</p>
        </div>
    )
})
}
</div>
</>
  )
}

export default BasicForm

