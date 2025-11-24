const prisma = require("../configurations/prismaClient");
const { successResponse, errorResponse } = require("../utils/responseHandler");

// Get all lessons
const getAllLessons = async (req, res) => {
  try {
    const data = await prisma.lesson.findMany();
    return successResponse(res, "Lessons fetched successfully", data);
  } catch (error) {
    return errorResponse(res, "Error fetching lessons", 500, [error?.message]);
  }
};

// Create lesson
const createLesson = async (req, res) => {
  const data = req.body;
  try {
    const newLesson = await prisma.lesson.create({ data });
    return successResponse(res, "Lesson created successfully", newLesson, 201);
  } catch (error) {
    return errorResponse(res, "Error creating lesson", 500, [error?.message]);
  }
};

// Get lesson by ID
const getLessonById = async (req, res) => {
  const { id } = req.params;
  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!lesson) {
      return errorResponse(res, "Lesson not found", 404);
    }

    return successResponse(res, "Lesson fetched successfully", lesson);
  } catch (error) {
    return errorResponse(res, "Error fetching lesson", 500, [error?.message]);
  }
};

// Update lesson
const updateLesson = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLesson = await prisma.lesson.update({
      where: { id: parseInt(id, 10) },
      data: req.body,
    });

    return successResponse(res, "Lesson updated successfully", updatedLesson);
  } catch (error) {
    return errorResponse(res, "Error updating lesson", 500, [error?.message]);
  }
};

// Delete lesson
const deleteLesson = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.lesson.delete({ where: { id: parseInt(id, 10) } });
    return successResponse(res, "Lesson deleted successfully", null);
  } catch (error) {
    return errorResponse(res, "Error deleting lesson", 500, [error?.message]);
  }
};

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
};
