import mongoose from "mongoose"



// MONGO_URI = mongodb+srv://admin:admin@cluster0.tmoxttg.mongodb.net/?retryWrites=true&w=majority

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendapi",
})
.then(()=>console.log("Database Connected"))
.catch((error)=>console.log(error))
}
