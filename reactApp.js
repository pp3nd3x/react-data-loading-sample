import React from 'react';
import { renderToString } from 'react-dom/server';
import { getPizzaInfo, getPeruInfo, getUserInfo } from './api';
import App from './App';

const getInfo = () => {
  const promises = [];
  promises.push(getUserInfo());
  promises.push(getUserInfo());
  promises.push(getUserInfo());
  promises.push(getUserInfo());
  return Promise.all(promises);
};

const reactApp = async (req, res, next) => {
  // const peru = await getPeruInfo();
  // console.log('peru info >>>');
  const info = await getInfo();
  // console.log('>>> info loaded', info);

  const html = `
  <div id="root">
    ${renderToString(<App initialData={info} />)}
  </div>
  <script src="client/client.js">
`;

  res.send(html);
};

export default reactApp;
