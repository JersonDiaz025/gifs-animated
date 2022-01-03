import React, {useState} from "react";
import AddItems from "./AddItems";
import Apigif from "./ApiGifs";

const GifApp = () => {

    const [students, setStudent] = useState(['Juan']);

    const handlerAddName = (e) =>{
        // setStudent([...students, 'Daniel'])
    }

    return(
        <div>
            <h1>Gif-App</h1>
            <AddItems studentsNames={setStudent}/>
            <hr/>
            <button onClick={handlerAddName}>Add name</button>
            <ol>
                {
                    students.map((names, i)=>{
                        return <Apigif key={i} dates={names}/>
                    })
                }
            </ol>
        </div>
    )
}
export default GifApp;