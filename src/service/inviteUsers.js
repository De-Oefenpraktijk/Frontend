import axios from 'axios';

const API_BASE_URL = "https://localhost:7222/Person";

export function GetDataBySubstr(substr){
    return axios.get(API_BASE_URL + "/dtos/emailandid/" + substr);
}