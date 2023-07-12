import mongoose from 'mongoose';

const DBConnection = async ()=> {
    const MONODB_URI =`mongodb://fileshare:fileshare@ac-yowrwz0-shard-00-00.czc8cgj.mongodb.net:27017,ac-yowrwz0-shard-00-01.czc8cgj.mongodb.net:27017,ac-yowrwz0-shard-00-02.czc8cgj.mongodb.net:27017/?ssl=true&replicaSet=atlas-cqcmc5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
       console.log('Database connected successfully');
    }catch(error){
        console.error('Errorwhile connecting with the database',error.message);
    }
}

export default DBConnection;