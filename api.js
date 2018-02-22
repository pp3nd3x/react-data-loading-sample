import axios from 'axios';

const getPizzaInfo = () => {
  return axios
    .get(
      'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=pizza&format=json'
    )
    .then(response => {
      console.log('getPizzaInfo Request completed >>>');
      return response;
    })
    .catch(error => {
      error;
    });
};

const getPeruInfo = () => {
  return axios
    .get(
      'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=peru&format=json'
    )
    .then(response => {
      console.log('getPeruInfo Request completed >>>');
      return response;
    })
    .catch(error => {
      error;
    });
};

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

export { getPizzaInfo, getPeruInfo, getUserInfo };
