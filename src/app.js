import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express ()


//app.use is used in middleware.

//we use cors [cross origin resource sharing to connect frontend. we decide which request of our front can access backend]

app.use(cors({
    origin: process.env.CORS_ORIGIN, //which origin
    credentials: true 
}))

//We handle data coming from different source.

//limiting data coming in json form. It depends on server's power.
app.use(express.json({limit: "16kb"})) 

//setting for configuring data coming from url.
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//setting for storing file folder in public folder. Name can be different. eg. pdf files, favicons etc.

app.use(express.static("public"))

//Cookie Parser is used to access and set user browers cookies

app.use(cookieParser())

export  { app }  