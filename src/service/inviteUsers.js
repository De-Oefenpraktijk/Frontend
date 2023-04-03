import axios from 'axios';

const API_BASE_URL = "http://20.13.84.62/Person";

export function GetDataBySubstr(substr){
    return axios.get(API_BASE_URL + "/dtos/emailandid/" + substr);
}