import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const render = () => {
  return `
    <div id="root">
      ${renderToString(<App />)}
    </div>
    <script src="client/client.js">
  `;
};

const reactApp = async (req, res, next) => {
  const html = await render();

  res.send(html);
};

export default reactApp;
