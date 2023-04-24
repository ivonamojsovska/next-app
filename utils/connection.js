import mongoose from 'mongoose';

export const connect = async () => {
    ///Creating the mongoose connection
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    //Connection alert 
    mongoose.connection.on('open', () => console.log('Connected to MONGO')).on('error', (error) => console.log(error))

    return conn
}