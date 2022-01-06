import React from 'react';
import classes from './ViewsStyled'

const Gifsgrid = ({dataInfo, gifs}) => {
    return (
        <div style={classes.container2}>
            <p style={classes.paragraph}>{dataInfo}</p>
            <img style={classes.images} src={gifs.downsized.url} alt={dataInfo} />
        </div>
    );
}
export default Gifsgrid;
