import axios from 'axios';

const getUserInfo = () => {
  return axios
    .get('https://randomuser.me/api/')
    .then(response => {
      console.log('getUserInfo Request completed >>>');
      return response;
    })
    .catch(error => {
      error;
    });
};

export { getUserInfo };
