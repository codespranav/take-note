import express from "express"
import dotenv from "dotenv"
const port = process.env.PORT_NAME || 3000
const app = express();
import connectToDB from "./db/db.js"
import AuthRoute from "./routes/AuthRoute.js"
import Note_Route from "./routes/Note_Route.js"
import cors from "cors"
dotenv.config();
app.use(express.json())
app.use(cors())
app.use("/api/auth", AuthRoute )
app.use("/api/note", Note_Route)
connectToDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`\napp is listening on port http://localhost:${port}`);
    })
})