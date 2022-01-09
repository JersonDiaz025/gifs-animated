import {useState, useEffect} from 'react';
import getDataApi from '../helpers/getAxiosApi';

export const useAxiosAPI = (inputData) =>{

    const [state, setState] = useState({data:[], loading: true})

    useEffect( ()=>{

        getDataApi({inputData})
        .then((images)=>setState({data: images, loading: false}))

    }, [inputData])

    return state
}
