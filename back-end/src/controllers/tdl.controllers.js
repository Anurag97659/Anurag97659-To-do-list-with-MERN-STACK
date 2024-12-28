import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { Todo } from '../models/tdl.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
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
    });

    if (!todo) {
        throw new ApiError(500, "Failed to create todo.");
    }

    return res.status(200).json(
        new ApiResponse(200, todo, "Todo created successfully.")
    );
});

export {
    createTodo
};
