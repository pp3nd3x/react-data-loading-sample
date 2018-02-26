import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const render = async (req, res, next) => {
  // render the page without data
  const appWithOutData = renderToString(<App />);

  // render the page with fetched data
  let appWithData = null;
  // const loaders = routeLoaders(request.url);
  // if (loaders) {
  //   const data = await resolveLoaders(loaders);
  //   appWithData = renderToString(<App data={data} loaders={loaders} />);
  // }

  return `
    <div id="root">
      ${appWithData || appWithOutData}
    </div>
    <script src="assets/vendor.js"></script>
    <script src="assets/app.js"></script>
  `;
};

const reactApp = async (req, res, next) => {
  const html = await render(req, res, next);

  res.send(html);
};

export default reactApp;
