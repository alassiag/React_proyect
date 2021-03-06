import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost.com/api'
})



const sendEmail = async (data) => {
    const response = await instance({
      method: 'post',
      url: 'contact/store',
      data: data
    });
    return response
  };


export {
    sendEmail
}