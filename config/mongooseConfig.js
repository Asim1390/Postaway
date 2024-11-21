// Creating connection with mongodb database here.
import mongoose from 'mongoose';


const url = process.env.DB_URL;

export const connectUsingMongoose = async()=>{
    try {
        await mongoose.connect(url, {
            family: 4 
        });
        console.log("Mongodb connected using mongoose.");
    } catch (error) {
        console.log("Error while connecting to db");
        console.log(error);
    }
}
