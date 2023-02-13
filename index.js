import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'
import MenuRouter from '../Server/ItemRouters/ItemRouter.js'
dotenv.config()


// port
const PORT=process.env.PORT || 5000

const app=express()

app.use('/uploads',express.static('uploads'))
// middlewares
app.use(morgan('dev'))
app.use(bodyparser.json({limit:'30mb',extended:true}))
app.use(bodyparser.urlencoded({limit:"30mb",extended:false}))
app.use(cors())

// routers
app.use('/api/menu/',MenuRouter)

// app.get('/',(req,res)=>{
//     res.send('hello')
// })


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log("server is connected to", PORT)
    })
}).catch((error)=>{
   console.log("something wrong",error)
})

