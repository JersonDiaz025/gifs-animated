import PropTypes from "prop-types";
import React, {useState} from 'react';

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
        <div className="form">
            <form onSubmit={handlerAddItems} className="sub_form">
                <h1>Search superhero gifs</h1>
                <input type="text" value={value1} placeholder="Superhero name" onChange={handlerSetValue}/>
                <button onChange={handlerSetValue}>Search</button>
            </form>
        </div>
    );
}

AddItems.prototype = {
    studentsNames: PropTypes.func.isRequired
}


export default AddItems;
