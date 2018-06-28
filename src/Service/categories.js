import axios from "axios";

export let GetCourseCateList = async (isApp = 1) => {
    let response = await axios(`http://api.dufe.online/getCourseCateList?isApp=${isApp}`);
    return response.data
}

export let GetPlateList = async () => {
    let response =  await axios("http://api.dufe.online/getPlateList");
    return response.data
}

export let GetPlateCourses = async (plateId)=>{
    let response = await axios(`http://api.dufe.online/getPlateCourseList?plateId=${plateId}&page=0&size=10`);
    return response.data.courses;
}

export let GetCarouselList = async (type = 1)=>{
    let response = await axios(`http://api.dufe.online/getCarouselList?type=${type}`);
    return response.data;
}