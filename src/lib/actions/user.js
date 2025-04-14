import User from "../models/user.model";
import connect_db from "../mongodb/mongoose";


export const createOrUpdateUser = async (id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username) => {
    try {
        await connect_db();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    avatar: image_url,
                    userName: username,
                    email: email_addresses,
                }
            },
            { new: true, upsert: true }
        )
        return user
    } catch (error) {
        console.log('actions error create or updated user -',error);
        
    }
}

export const deleteUser=async(id)=>{
   try {
    await connect_db();
    const deleted = await User.findOneAndDelete({ clerkId: id })
    return deleted    
   } catch (error) {
    console.log("action delete user error -",error);
   }
}

