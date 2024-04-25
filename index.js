import express from 'express';
import cors from 'cors'
import bodyparser from 'body-parser';
import env from 'dotenv';
import router from './src/routes/index.js'

env.config();



const app = express()
app.use(express.json())
app.use(bodyparser.json())
app.use(cors())


let PORT = process.env.PORT;

app.use('/api',router)


app.listen(PORT, ()=>console.log(`App listening ${PORT}`))

app.use((err,req,res,next)=>{
    // console.log(err.message)
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})