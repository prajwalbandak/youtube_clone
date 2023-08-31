import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '2c24112043msh29c8d390313b951p1d2ab9jsn2af56e82ce52',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url ) =>{
    console.log("URL IS", url);
    const { data } = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }