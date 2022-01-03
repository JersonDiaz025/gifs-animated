import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Gifsgrid from './GifsGrid';

const Apigif = ({dates}) => {

    const [image, setImages] = useState([]);

    // useEffect run one time
    useEffect(()=>{
        Axios.get('https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=8vHpsqKGNmpzuY0CtRMztnCFd0neu1NT')
        .then(resp =>{
            setImages(resp.data.data);
        })










        // try {
        //     const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=8vHpsqKGNmpzuY0CtRMztnCFd0neu1NT';
        //     const gifs = await fetch(url);
        //     const {data} = await gifs.json();
        //     setImages(data);
        //     // console.log('klkf')

        // } catch (error) {
        //     console.error(error);
        // }

    }, [])

    return (
        <>
            <h2>{dates}</h2>
            <div className='container'>
                {
                    image.map(({title, id, images})=>(
                        <Gifsgrid key={id} dataInfo={title} gifs={images} />
                        // console.log(image)
                    ))
                }
            </div>
        </>
    );
}

export default Apigif;
