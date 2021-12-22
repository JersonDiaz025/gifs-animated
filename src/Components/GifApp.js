import React, {useState} from "react";

const GifApp = () => {

    const [students, setStudent] = useState(['Juan','Maria','Pedro','Ana','Francisco','Alex','Josue']);

    return(
        <div>
            <h1>Gif-App</h1>
            <hr></hr>
                {
                    <ol>
                        <li></li>
                    </ol>
                }

        </div>


    )
}
export default GifApp;