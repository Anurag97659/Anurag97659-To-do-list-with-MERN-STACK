import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { Todo } from '../models/tdl.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const createTodo = asyncHandler(async (req, res) => {
    const { content } = req.body;
    const userId = req.user?.id; 

    if (!content || content.trim().length < 2) {
        throw new ApiError(400, "Content is required and must be at least 2 characters long.");
    }

    if (!userId) {
        throw new ApiError(401, "User authentication required.");
    }

    const todo = await Todo.create({
        content,
        createdby: userId,
        completed: false
    });

    if (!todo) {
        throw new ApiError(500, "Failed to create todo.");
    }

    return res.status(200).json(
        new ApiResponse(200, todo, "Todo created successfully.")
    );
});

 const getObjectives = asyncHandler(async (req, res) => {
    const userId = req.user?.id; 

    if (!userId) {
        throw new ApiError(401, "User authentication required.");
    }

    const todos = await Todo.find({ createdby: userId }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, todos, "Todos fetched successfully.")
    );
});

const deleteTodo = asyncHandler(async (req, res) => {
    const {todoId} = req.body;
    const userId = req.user?.id;
    if (!todoId ) {
        throw new ApiError(400, "Todo ID is required.");
    }
    else if (!userId) {
        throw new ApiError(401, "User  authentication required.");
    }
    console.log(todoId); 
    if (!mongoose.Types.ObjectId.isValid(todoId)) {
        throw new ApiError(400, "Invalid Todo ID format.");
    }
    const deleteitem = await Todo.findOneAndDelete({ _id: todoId, createdby: userId });
    if (!deleteitem) {
        throw new ApiError(404, "Todo not found or unauthorized access.");
    }
   
    return res.status(200).json(
        new ApiResponse(200, deleteitem, "Todo deleted successfully.")
    );
});
const toggleTodoCompletion = asyncHandler(async (req, res) => { 
    const { todoId, completed } = req.body; 

    if (!todoId || completed === undefined) {
        throw new ApiError(400, "Todo ID and completion status are required.");
    }
      const todo = await Todo.findById(todoId);
  
      if (!todo) {
        throw new ApiError(404, 'Todo not found');
      }
      todo.completed = completed;
      await todo.save();
  
      return res.status(200).json({ success: true, message: 'Todo completion status updated', data: todo });
   
     
});
    

export {
    createTodo,
    getObjectives,
    deleteTodo,
    toggleTodoCompletion
};
