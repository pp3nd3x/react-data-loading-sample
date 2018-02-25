import express from 'express';
import path from 'path';
import reactApp from './reactApp';

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, './dist/assets')));
console.log(path.resolve(__dirname, './dist/assets'));

app.get('*', reactApp);

app.listen(3000, () => console.log('Express running on port 3000'));
