import 'reflect-metadata';
import express from 'express';
import '../typeorm';
import '../../container';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log('Server up on port 3001'));
