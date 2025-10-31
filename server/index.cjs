const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path = require('path'); 
dotenv.config({path:'./.env'})

const app=express()

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const connectDb=require('./db.cjs')
connectDb()
console.log('db connected')
const PORT=process.env.PORT ||5000
const Route=require('./routes/userroute.cjs')

app.use('/',Route)


app.listen(PORT, () =>{
        console.log(`server is running on port ${PORT}`)
})

