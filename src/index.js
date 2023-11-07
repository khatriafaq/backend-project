import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=> {
    app.on ("Error", (error)=> {
        console.log("ERROR IN CONNECTION", error);
        throw error
    })
    app.listen (process.env.PORT || 3000, ()=> {
        console.log(`Server is running on Port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILED", error);
})





























/*
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONODB_URI}/${DB_NAME}`)
        
    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})();

*/