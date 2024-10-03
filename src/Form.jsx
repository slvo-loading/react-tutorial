import { useState } from 'react';

export default function Form() {
  // const[name, setName] = useState('');
  //multiple inputs
  const [name, setName] = useState({ firstName: '', lastName: '' });

  // function handleChange(e){
  //     setName(e.target.value);
  // }

  function handleSubmit(e){
     e.preventDefault();
     console.log(name);
  }

  return (
    <div>
      <form>
        <input
          // onChange={function demo(e) {
          //     return handleChange(e);
          // }}
          // onChange={(e)=>handleChange(e)}
          onChange={(e) => setName({...name, firstName:e.target.value})}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({...name, lastName:e.target.value})}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e)=>handleSubmit(e)}>add</button>
      </form>
    </div>
  );
}
