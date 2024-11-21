// Creating connection with mongodb database here.
import mongoose from 'mongoose';


const url = "mongodb+srv://asimswar:asimswar@cluster0.yikjw1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
