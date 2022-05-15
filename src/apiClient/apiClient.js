import axios from "axios";

const baseUrl = 'http://localhost:8000';

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

export const getAdmin = async () => {
    const res = await axios.get(baseUrl + '/site-admin/')
    return res
}