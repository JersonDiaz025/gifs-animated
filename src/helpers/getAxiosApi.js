import  Axios from "axios";

export default async function getDataApi({inputData}){
    try {
        const getInfo = await Axios.get(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(inputData)}&limit=10&api_key=8vHpsqKGNmpzuY0CtRMztnCFd0neu1NT`)
        const {data} = getInfo.data
        return data

    } catch (error) {
        console.error(error)
    }

}


