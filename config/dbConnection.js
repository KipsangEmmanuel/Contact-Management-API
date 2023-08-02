const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            'Database connected successfully: ', 
            connect.connection.host, 
            connect.connection.name)

    }catch (err) {
        console.log(err);//if there is an error, exit
        process.exit(1);
    }
};


module.exports = connectDB;

