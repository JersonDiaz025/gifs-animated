import React, {useState, useEffect} from 'react';
import getDataApi from '../helpers/handlers';
import Gifsgrid from './ViewGifs';

const Apigif = ({inputData}) => {

    const [image, setImages] = useState([]);

    // useEffect run one time
    useEffect(()=>{
        getDataApi({inputData})
        .then((data=>setImages(data)))
    }, [inputData])

    return (
        <>
            <hr/>
            <h2>{inputData}</h2>
            <div className='container1'>
                {
                    image.map(({title,id,images})=>(
                        <Gifsgrid key={id} dataInfo={title} gifs={images} />
                    ))
                }
            </div>
        </>
    );
}
export default Apigif;
