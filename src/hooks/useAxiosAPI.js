import {useState} from 'react';


export const useAxiosAPI = () =>{

    const [state, setState] = useState({data:[], loading: true})

    setTimeout(()=>{

        setState({data:[], loading: false})
    }, 3000)
    



    return state
}
