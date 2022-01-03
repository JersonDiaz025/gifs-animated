import React from 'react';

const Gifsgrid = ({dataInfo, gifs}) => {
    return (
        <div className='container2'>
            <img src={gifs.downsized_medium.url} alt={dataInfo} />
            <p>{dataInfo}</p>

        </div>
    );
}
export default Gifsgrid;
