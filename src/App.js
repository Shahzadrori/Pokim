import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Poki =() =>{
let [num,setnum] = useState();
let [name,setname] = useState();
let [moves,setmoves] = useState();

useEffect(
    async function getdata(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setname(res.data.name);
        setmoves(res.data.moves.length);   
    }
);


return (
<React.Fragment>
    <h1>You have choose <span style={{color:'red'}}>{num}</span></h1>
    <h1>My name is <span style={{color:'red'}}>{name}</span></h1>
    <h1>I have <span style={{color:'red'}}>{moves}</span> moves</h1>
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