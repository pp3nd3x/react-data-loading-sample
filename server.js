import express from 'express';
import path from 'path';
import reactApp from './reactApp';

const app = express();

app.use('/client', express.static(path.resolve(__dirname, './dist')));
console.log(path.resolve(__dirname, './dist'));

app.get('*', reactApp);

app.listen(3000, () => console.log('Express running on port 3000'));
