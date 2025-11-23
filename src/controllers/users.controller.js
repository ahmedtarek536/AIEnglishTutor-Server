const prisma = require("../configurations/prismaClient");
const { successResponse, errorResponse } = require("../utils/responseHandler");

const getAllUsers = async (req, res) => {
  try {
    const data = await prisma.user.findMany();

    return successResponse(res, "Users fetched successfully", data);
  } catch (error) {
    return errorResponse(res, "Error fetching users", 500, [error?.message]);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: req.body,
    });
    return successResponse(res, "User created successfully", newUser, 201);
  } catch (error) {
    return errorResponse(res, "Error creating user", 500, [error?.message]);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!user) {
      return errorResponse(res, "User not found", 404);
    }
    return successResponse(res, "User fetched successfully", user);
  } catch (error) {
    return errorResponse(res, "Error fetching user", 500, [error?.message]);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: req.body,
    });
    return successResponse(res, "User updated successfully", updatedUser);
  } catch (error) {
    return errorResponse(res, "Error updating user", 500, [error?.message]);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: parseInt(id, 10) } });
    return successResponse(res, "User deleted successfully", null);
  } catch (error) {
    return errorResponse(res, "Error deleting user", 500, [error?.message]);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
