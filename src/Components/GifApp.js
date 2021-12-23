import React, {useState} from "react";
import Additems from "./AddItems";

const GifApp = () => {

    const [students, setStudent] = useState(['Juan','Maria','Pedro','Ana','Francisco','Alex','Josue']);

    const handlerAddName = (e) =>{
        // setStudent([...students, 'Daniel'])
    }

    return(
        <div>
            <h1>Gif-App</h1>
            <Additems studentsNames={setStudent}/>
            <hr></hr>
            <button onClick={handlerAddName}>Add name</button>
            <ol>
                {
                    students.map((names, i)=>{
                        return <li key={i}>{names}</li>
                    })
                }
            </ol>
        </div>


    )
}
export default GifApp;