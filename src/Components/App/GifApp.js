import React, {useState} from "react";
import AddItems from "../Form/Form";
import Apigif from "../GetGifs/GetImages";

const GifApp = () => {

    const [students, setStudent] = useState([]);

    return(
        <div>
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