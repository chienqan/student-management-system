import axios from "axios";
const endpoint = 'http://localhost:3001'

export const getListStudent = () => {
    return axios.get(endpoint + '/api/students')
};

export const deleteStudent = (StudentId) => {
    return axios.delete(endpoint + '/api/students/'+ StudentId)
}

export const createNewStudent = (Student) => {
    return axios.post(endpoint + '/api/students', Student)
}
export const updateStudent = (Student) => {
    return axios.patch(endpoint + '/api/students/' + Student._id, Student)
}


