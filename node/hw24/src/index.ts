import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app:Application = express();

app.use(express.json());

const PORT:string | number = process.env.PORT || 3006

app.get('/', (_: Request, res: Response) => {
    res.send('Hello Express');
});

app.post('/', (req: Request, res: Response) => {
    const {message} = req.body
    res.send(`You sent: ${message}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});