import Gifsgrid from '../ViewsGifs/ViewGifs';
import classes from './GetGifStyled';
import {useAxiosAPI} from '../../hooks/useAxiosAPI';
import 'animate.css'

const Apigif = ({inputData}) => {

    const {data, loading} = useAxiosAPI(inputData);

    return (
        <>
            <hr/>
            {loading && <p style={classes.text}>Loading...</p>}
            <h2 style={classes.subTitle} className='animate__bounceIn'>{inputData}</h2>
            <div style={classes.container}>
                {
                    data.map(({title, images, id})=>(
                        <Gifsgrid key={id} dataInfo={[title,images]} />
                    ))
                }
            </div>
        </>
    );
}

export default Apigif;
