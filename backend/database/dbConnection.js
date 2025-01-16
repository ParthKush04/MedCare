import mongoose from "mongoose"

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName : process.env.DB_NAME
    }).then(()=>{
        console.log("database Connected successfully")
    }).catch((err)=>{
     console.log(`Connection failed due to error ${err}`)
    })
} 