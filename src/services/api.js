import axios from "axios";
const url = 'https://sastainsta.onrender.com';

export const getPostDetails = async () => {
    try {
        const data = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
    }
}