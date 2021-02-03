import axios from 'axios'


export const getPastLaunches = () => {
    return axios.get('https://api.spacexdata.com/v4/launches/past')
}

export const getCompany=()=>{
    return axios.get('https://api.spacexdata.com/v4/company')
}
