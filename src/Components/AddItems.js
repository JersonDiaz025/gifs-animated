import PropTypes from "prop-types";
import React, {useState, useEffect} from 'react';

const AddItems = ({studentsNames}) => {

 const [value1, setValue] = useState(' ');

 const handlerAddItems = (e)=>{
    e.preventDefault()
    if(value1.trim().length > 2){
        studentsNames((elem)=>[value1, ...elem]);
        setValue(' ')
    }
 }

 const handlerSetValue = (e)=>{
    setValue(e.target.value)
}
    return (
        <form onSubmit={handlerAddItems}>
            <h1>Add-Items</h1>
            <input type="text" value={value1} onChange={handlerSetValue}/>
            <button onChange={handlerSetValue}>submit</button>
        </form>

    );
}

AddItems.prototype = {
    studentsNames: PropTypes.func.isRequired
}


export default AddItems;
