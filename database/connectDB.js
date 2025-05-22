import mongoose from "mongoose";
import mangoose from "mongoose";


const connectDB = async ()=>{
    console.log(process.env.MODBRUL)
    try{
        await mongoose.connect(process.env.MODBRUL)
        console.log("Database connected successfully")

    }
    catch (error){
        console.log(error)
    }
}
export default connectDB;