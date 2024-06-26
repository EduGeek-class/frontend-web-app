import axios from "axios";

// const baseUrl = 'https://edugeeksuser.pythonanywhere.com/';
const baseUrl='http://127.0.0.1:8000/'
export const createBatch = async (course_validity, course_name,price,description) => {
 
    var body = {
        'course_validity' : course_validity, 
       
        'course_name' : course_name,
        'price':price,
        'description':description

    }
    await axios.post(baseUrl + '/batch/', body)
}



export const createSubject = async (subject_name, batch_code) => {
 
    var body = {
        'subject_name' : subject_name, 
        'batch_code' : batch_code,
        
     

    }
    await axios.post(baseUrl + '/subject/', body)
}

export const getBatches = async () => {
    const res = await axios.get(baseUrl + '/batch/')
    return res
}
export const getSubject = async (batch_code) => {
    const res = await axios.get(baseUrl + '/subject/?batch_code='+ batch_code)
    return res
}

export const getBatchesSingle = async (batch_code) => {
    const res = await axios.get(baseUrl + '/batch/'+ batch_code)
    return res
}

export const patchBatchesSingle = async (key, value, batch_code) => {
    var strdata = '{"' + key + '": "' + value + '"}'
    var data = JSON.parse(strdata)
      
    var res
    var config = {
      method: 'patch',
      url: baseUrl + '/batch/' + batch_code,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      res = JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    return res
}
export const getVideos = async (batch_code, subject_code) => {
    const res = await axios.get(baseUrl + '/video/?batch_code=' + batch_code + "&subject_code=" + subject_code)
    return res
}

export const addVideos = async (title, batch_code, subject_code, video) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('batch_code', batch_code);
    formdata.append('subject_code', subject_code);
    // console.log(video)
    for (let i = 0 ; i < video.length ; i++) {
        formdata.append("video", video[i]);
    }

    const res = await axios.post(baseUrl + '/video/', formdata, {
        headers: {
            "Content-Type": "multipart/form-data",
          }
    });
    return res;
}

export const getMaterial = async (batch_code, subject_code) => {
    const res = await axios.get(baseUrl + '/study_material/?batch_code=' + batch_code+ "&subject_code=" + subject_code)
    return res;
}

export const addMaterial = async (title, batch_code, subject_code, material) => {
    var formdata = new FormData()
    formdata.append('title', title)
    formdata.append('batch_code', batch_code)
    formdata.append('subject_code', subject_code)
    for (let i = 0 ; i < material.length ; i++) {
        formdata.append("material", material[i])
    }

    const res = await axios.post(baseUrl + '/study_material/', formdata, {
        headers: {
            "Content-Type": "multipart/form-data",
          }
    });
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

export const getStudents = async (batch_code) => {
    const res = await axios.get(baseUrl + '/user/')
    console.log(res)
    var batch_students = []
    for (let i = 0; i < res.data.length; i++) 
    {
        const codes = res.data[i]["batch_codes"];
        console.log(batch_code)
        for (let j = 0; j < codes.length; j++) 
        {
            if(codes[j] == batch_code)
            {
                // console.log(codes[j])
                batch_students.push(res.data[i])
            }
            // 
        }
        // console.log(res.data[i]["batch_codes"]);
    }
    console.log(batch_students)
    return batch_students
}

export const patchStudent = async (id, batch_codes) => {
    
    var data = {'batch_codes': batch_codes}
      
    var res
    var config = {
      method: 'patch',
      url: baseUrl + '/user/' + id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      res = JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    return res
}