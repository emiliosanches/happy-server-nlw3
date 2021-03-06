import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import { router } from './routes';
import errorHandler from './errors/handler';
import './database/connection'

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(25565, () => console.log("Listening on port 25565"));
