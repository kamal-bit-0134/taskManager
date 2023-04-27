import mongoose from "mongoose"



// MONGO_URI = mongodb://127.0.0.1:27017

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendapi",
})
.then((c)=>console.log(`Database Connected with ${c.connection.host}`))
.catch((error)=>console.log(error))
}
