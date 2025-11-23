const prisma = require("../configurations/prismaClient");
const { successResponse, errorResponse } = require("../utils/responseHandler");

const getAllLanguages = async (req, res) => {
  try {
    const data = await prisma.language.findMany();
    return successResponse(res, "Languages fetched successfully", data);
  } catch (error) {
    return errorResponse(res, "Error fetching languages", 500, [
      error?.message,
    ]);
  }
};

const getLanguageById = async (req, res) => {
  const { id } = req.params;
  try {
    const language = await prisma.language.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!language) {
      return errorResponse(res, "Language not found", 404);
    }
    return successResponse(res, "Language fetched successfully", language);
  } catch (error) {
    return errorResponse(res, "Error fetching language", 500, [error?.message]);
  }
};

const createLanguage = async (req, res) => {
  const data = req.body;
  try {
    const newLanguage = await prisma.language.create({
      data,
    });
    return successResponse(
      res,
      "Language created successfully",
      newLanguage,
      201
    );
  } catch (error) {
    return errorResponse(res, "Error creating language", 500, [error?.message]);
  }
};

const updateLanguage = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLanguage = await prisma.language.update({
      where: { id: parseInt(id, 10) },
      data: req.body,
    });
    return successResponse(
      res,
      "Language updated successfully",
      updatedLanguage
    );
  } catch (error) {
    return errorResponse(res, "Error updating language", 500, [error?.message]);
  }
};

const deleteLanguage = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.language.delete({ where: { id: parseInt(id, 10) } });
    return successResponse(res, "Language deleted successfully", null);
  } catch (error) {
    return errorResponse(res, "Error deleting language", 500, [error?.message]);
  }
};

module.exports = {
  createLanguage,
  getAllLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
};
