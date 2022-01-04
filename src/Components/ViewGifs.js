import React from 'react';

const Gifsgrid = ({dataInfo, gifs}) => {
    return (
        <div className='container2'>
            <p>{dataInfo}</p>
            <img src={gifs.downsized.url} alt={dataInfo} />
        </div>
    );
}
export default Gifsgrid;
