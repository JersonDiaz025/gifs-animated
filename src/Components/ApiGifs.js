import React, {useState, useEffect} from 'react';
import Gifsgrid from './GifsGrid';

const Apigif = ({dates}) => {

    const [image, setImages] = useState([]);

    // useEffect run one time
    useEffect(()=>{
        API()
    }, [])

    const API = async ()=> {
        const url = 'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=8vHpsqKGNmpzuY0CtRMztnCFd0neu1NT';
        const gifs = await fetch(url);
        const {data} = await gifs.json();
        setImages(data)
    }
    // console.log(images)

    return (
        <>
            <h2>{dates}</h2>
            <div className='info-grid'>
                {
                    image.map(({title, id, images})=>(
                        // <li key={id}>{title}</li>
                        <Gifsgrid key={id} dataInfo={title} gifs={images} />
                        // console.log(images.downsized_medium.url)
                    ))
                }
            </div>
        </>
    );
}

export default Apigif;
