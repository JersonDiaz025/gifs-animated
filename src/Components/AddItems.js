import React, {useState} from 'react';

const Additems = ({studentsNames}) => {

 const [value, setValue] = useState('Escribe aqui');

 const handlerAddItems = (e)=>{
    e.preventDefault()
    studentsNames((elem)=>[value, ...elem]);
 }

 const handlerSetValue = (e)=>{
    setValue(e.target.value)
 }
    return (
        <form onSubmit={handlerAddItems}>
            <h1>Add-Items</h1>
            <input type="text" placeholder='Escribe aqui' onChange={handlerSetValue}/>
        </form>

    );
}

export default Additems;
