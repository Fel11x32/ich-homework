import express from 'express';
import dotenv from 'dotenv'
import sequelize from './config/db.js';
import routerBook from './routes/book.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (_, res) => {
    res.send({success: true, message: "Server is running"});
});

app.use('/books', routerBook)

app.use((err, _, res, next)=>{
    console.error(err.message);
    res.status(500).send({success:false, message:err.message});
})

app.listen(PORT, async()=>{
    try{
        await sequelize.authenticate();
        console.log('Connection to database was successfully');
        console.log(`Server is running on http://localhost:${PORT}`);
    }catch(e){
        console.error('Error don`t correct connection to basa date:', e.message)
    }
});