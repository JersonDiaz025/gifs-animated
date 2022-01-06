// import React, {useState, useEffect} from 'react';
// import getDataApi from '../../helpers/handlers';
// import Gifsgrid from '../ViewsGifs/ViewGifs';
import classes from './GetGifStyled';

import {useAxiosAPI} from '../../hooks/useAxiosAPI';

const Apigif = ({inputData}) => {

    const {loading} = useAxiosAPI();

    // const [image, setImages] = useState([]);

    // useEffect run one time
    // useEffect(()=>{
    //     getDataApi({inputData})
    //     .then((data=>setImages(data)))
    // }, [inputData])

    return (

        <>
            <hr/>
            <h2 style={classes.subTitle}>{inputData}</h2>
            {loading?"Cargando...": "Fin de carga"}
            {/* <div style={classes.container}>
                {
                    image.map(({title,id,images})=>(
                    <Gifsgrid key={id} dataInfo={title} gifs={images} />
                    ))
                }
            </div> */}
        </>
    );
}
export default Apigif;
