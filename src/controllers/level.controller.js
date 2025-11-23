const prisma = require("../configurations/prismaClient");
const { successResponse, errorResponse } = require("../utils/responseHandler");

const getAllLevels = async (req, res) => {
  try {
    const data = await prisma.level.findMany();
    return successResponse(res, "Levels fetched successfully", data);
  } catch (error) {
    return errorResponse(res, "Error fetching levels", 500, [error?.message]);
  }
};

const createLevel = async (req, res) => {
  const data = req.body;
  try {
    const newLevel = await prisma.level.create({
      data,
    });
    return successResponse(res, "Level created successfully", newLevel, 201);
  } catch (error) {
    return errorResponse(res, "Error creating level", 500, [error?.message]);
  }
};

const getLevelById = async (req, res) => {
  const { id } = req.params;
  try {
    const level = await prisma.level.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!level) {
      return errorResponse(res, "Level not found", 404);
    }
    return successResponse(res, "Level fetched successfully", level);
  } catch (error) {
    return errorResponse(res, "Error fetching level", 500, [error?.message]);
  }
};

const updateLevel = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLevel = await prisma.level.update({
      where: { id: parseInt(id, 10) },
      data: req.body,
    });
    return successResponse(res, "Level updated successfully", updatedLevel);
  } catch (error) {
    return errorResponse(res, "Error updating level", 500, [error?.message]);
  }
};

const deleteLevel = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.level.delete({ where: { id: parseInt(id, 10) } });
    return successResponse(res, "Level deleted successfully", null);
  } catch (error) {
    return errorResponse(res, "Error deleting level", 500, [error?.message]);
  }
};
module.exports = {
  createLevel,
  getAllLevels,
  getLevelById,
  updateLevel,
  deleteLevel,
};
