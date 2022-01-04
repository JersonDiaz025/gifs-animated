import React, {useState} from "react";
import AddItems from "./AddItems";
import Apigif from "./ApiGifs";

const GifApp = () => {

    const [students, setStudent] = useState([ ]);

    return(
        <div className="form">
            <AddItems studentsNames={setStudent}/>
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