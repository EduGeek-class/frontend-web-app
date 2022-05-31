import axios from "axios";

const baseUrl = 'http://edugeek.pythonanywhere.com';

export const createBatch = async (batch_start, batch_code, course) => {
    var body = {
        'batch_start' : batch_start, 
        'batch_code' : batch_code,
        'course' : course
    }
    await axios.post(baseUrl + '/batches/', body)
}

export const getBatches = async () => {
    const res = await axios.get(baseUrl + '/batches/')
    return res
}

export const getVideos = async () => {
    const res = await axios.get(baseUrl + '/courses/')
    return res
}

export const addVideos = async (title, class_number, video) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('class_number', class_number);
    formdata.append('video', video);

    const res = await axios.post(baseUrl + '/courses/', formdata);
    return res;
}

export const getMaterial = async () => {
    const res = await axios.get(baseUrl + '/material/')
    return res;
}

export const addMaterial = async (title, class_number, material) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('class_number', class_number);
    formdata.append('material', material);

    const res = await axios.post(baseUrl + '/material/', formdata);
    return res;
}

export const getAdmin = async () => {
    const res = await axios.get(baseUrl + '/site-admin/')

    return res
}