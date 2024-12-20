import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoutes.js'
import connectDB from './config/connectdb.js'
import passport from 'passport'
const app=express()
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL

const corsOptions={
    origin: process.env.FRONTEND_HOST,
    credentials:true,
    optionSuccessStatus:200,
};

// resolve CORS policy erros
app.use(cors(corsOptions))   //midddleware


//DB connection
connectDB(DATABASE_URL)


//JSON
app.use(express.json())

//passport middlewaare
app.use(passport.initialize())

//Cookie Parser
app.use(cookieParser())

app.use('/api/user/', userRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})


