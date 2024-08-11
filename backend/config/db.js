import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodapp:foodapp123@cluster0.ubak3rv.mongodb.net/food-del').then (()=>console.log("DB Connected"));

}