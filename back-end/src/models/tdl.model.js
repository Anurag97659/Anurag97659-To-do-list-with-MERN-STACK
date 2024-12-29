import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 2,
    },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    completed: {
        type: Boolean,
        default: false,
    },
   
},{timestamps: true});
export const Todo = mongoose.model("Todo", todoSchema);