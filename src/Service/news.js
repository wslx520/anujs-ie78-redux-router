import axios from "axios";

export let GetNewsList = async (type = 1) => {
    let response = await axios(`http://api.dufe.online/getNewsList?type=${type}`)
    return response.data.notes;
}