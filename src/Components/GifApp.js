import React, {useState} from "react";
import Form from "./Form/Form";
import Apigif from "./GetGifs/ApiGifs";

const GifApp = () => {

    const [students, setStudent] = useState([]);

    return(
        <div>
            <Form studentsNames={setStudent}/>
            <ol>
                {
                    students.map((names, i)=>{
                        return <Apigif key={i} inputData={names} />
                    })
                }
            </ol>
        </div>
    )
}
export default GifApp;