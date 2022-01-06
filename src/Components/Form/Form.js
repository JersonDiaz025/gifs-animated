import PropTypes from "prop-types";
import React, {useState} from 'react';
import classes from "./FormStyle";

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
        <div style={classes.containerForm}>
            <form onSubmit={handlerAddItems} style={classes.formFirst}>
                <h1 style={classes.title}>Search superhero gifs</h1>
                <input style={classes.input} type="search" value={value1} placeholder="Superhero name" onChange={handlerSetValue}/>
                <button onChange={handlerSetValue} style={classes.buttonForm}>Search</button>
            </form>
        </div>
    );
}

AddItems.prototype = {
    studentsNames: PropTypes.func.isRequired
}

export default AddItems;
