import mongoose from 'mongoose';
import colors from 'colors';

const connectDB= async() =>
{

    try{
            const conn=await mongoose.connect(process.env.MONGO_URL);
            console.log(`Connected to Mongodb DataBase ${conn.connection.host}`.bgMagenta.white);
    }
    catch(err)
    {
        console.log(`Error in Mongoose ${err}`.bgRed.white)
    }
}

export default connectDB;