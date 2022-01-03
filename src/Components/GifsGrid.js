import React from 'react';

const Gifsgrid = ({dataInfo, gifs}) => {
    return (
        <div className='gif-grid'>
            <img src={gifs.downsized_medium.url} alt={dataInfo} />
            <p>{dataInfo}</p>

        </div>
    );
}
export default Gifsgrid;
