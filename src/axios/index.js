import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://nelson-laravel-api.herokuapp.com/public/api/' 
})


//https://luiszelarrayan-back-laravel.herokuapp.com/
//https://nuestraweb.com.ar/api/
//https://nelson-laravel-api.herokuapp.com/public/api
//https://laravel-api-back.herokuapp.com/public/api/
//http://localhost/api/

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
