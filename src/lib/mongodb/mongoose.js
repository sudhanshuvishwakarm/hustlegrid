import mongoose from "mongoose";
let isConnected = false;
const connect_db = async () => {
    if(isConnected){
        console.log('Already connected to mongodb');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, () => {
            console.log("Mongodb Connection Successful");
        })
        isConnected=true;
    } catch (error) {
        console.log("Mongodb Connection Failed error -", error); 
    }
}

export default connect_db