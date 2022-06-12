import axios from "axios";

const baseUrl = 'https://edugeek.pythonanywhere.com';

export const createBatch = async (batch_start, batch_code, course) => {
    var body = {
        'batch_start' : batch_start, 
        'batch_code' : batch_code,
        'course' : course
    }
    await axios.post(baseUrl + '/batch/', body)
}

export const getBatches = async () => {
    const res = await axios.get(baseUrl + '/batch/')
    return res
}

export const getVideos = async () => {
    const res = await axios.get(baseUrl + '/video/')
    return res
}

export const addVideos = async (title, class_number, video) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('class_number', class_number);
    formdata.append('video', video);

    const res = await axios.post(baseUrl + '/video/', formdata);
    return res;
}

export const getMaterial = async () => {
    const res = await axios.get(baseUrl + '/study_material/')
    return res;
}

export const addMaterial = async (title, class_number, material) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('class_number', class_number);
    formdata.append('material', material);

    const res = await axios.post(baseUrl + '/study_material/', formdata);
    return res;
}
export const getNotif = async () => {
    const res = await axios.get(baseUrl + '/notif/')
    return res
}

export const getAdmin = async () => {
    const res = await axios.get(baseUrl + '/admins/')

    return res
}