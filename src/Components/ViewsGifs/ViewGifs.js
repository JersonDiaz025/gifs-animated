import React from 'react';
import classes from './ViewsStyled'

const Gifsgrid = ({dataInfo}) => {
    return (
        <div style={classes.container2}>
            <p style={classes.paragraph}>{dataInfo[0]}</p>
            <img style={classes.images} src={dataInfo[1].downsized.url} alt={dataInfo} />
        </div>
    );
}
export default Gifsgrid;
