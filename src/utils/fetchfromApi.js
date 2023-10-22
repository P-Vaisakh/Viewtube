import axios from "axios";

const base = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};



export const fetchFromApi = async (url) => {
  try {
    const {data} = await axios.get(`${base}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error is", error);
  }
};
