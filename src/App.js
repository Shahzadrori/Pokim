import React, { useState } from 'react';

const Poki =() =>{
let [num,setnum] = useState();


return (
<React.Fragment>
    <h1>You have choose {num}</h1>
    <select
    value={num}
    onChange={(eve) =>{
      setnum(eve.target.value);
    }}
    >
        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
    </select>
</React.Fragment>
)

}

export default Poki;