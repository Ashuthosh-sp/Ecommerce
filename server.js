import express from"express";
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from "./config/db.js ";
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
//config env
dotenv.config();

//database.config
connectDB();
//create rest object

const app=express();

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoutes);

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the ecommerce app</h1>");
});


//PORT
const PORT= process.env.PORT ||8000 ;
//to run listen
app.listen(PORT,()=>
{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});