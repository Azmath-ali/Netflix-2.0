
import express from 'express'
import dotenv from "dotenv"
import {dataBaseConnection}  from './utils/dataBase.js'
import cookieparser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import cors from "cors"


const app = express()


dataBaseConnection()

dotenv.config({
    path : ".env"
})



// Middlewares...
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cookieparser())

const corsOption = {
    // origin : "http://localhost:5173",
    origin : "https://netflix-2-0-1.onrender.com",
    credentials : true
}

app.use(cors(corsOption))




// API...

app.use("/api/v1/user", userRoute)




app.listen(process.env.PORT, ()=>{
    console.log(`Server Working at ${process.env.PORT}`)
})
