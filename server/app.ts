import express, { Request, Response } from 'express';


const app = express();

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
    return res
        .status(404)
        .send({ error: 'Endpoint not found'})
});


// Import Routes
import initRoute from './routes/initRoute.ts';

