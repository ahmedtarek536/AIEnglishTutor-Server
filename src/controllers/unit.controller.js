const prisma = require("../configurations/prismaClient");
const { successResponse, errorResponse } = require("../utils/responseHandler");

const getAllUnits = async (req, res) => {
  try {
    const data = await prisma.unit.findMany();
    return successResponse(res, "Units fetched successfully", data);
  } catch (error) {
    return errorResponse(res, "Error fetching Units", 500, [error?.message]);
  }
};

const createUnit = async (req, res) => {
  const data = req.body;
  try {
    const newUnit = await prisma.unit.create({
      data,
    });
    return successResponse(res, "Unit created successfully", newUnit, 201);
  } catch (error) {
    return errorResponse(res, "Error creating Unit", 500, [error?.message]);
  }
};

const getUnitById = async (req, res) => {
  const { id } = req.params;
  try {
    const unit = await prisma.unit.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (!unit) {
      return errorResponse(res, "Unit not found", 404);
    }
    return successResponse(res, "Unit fetched successfully", unit);
  } catch (error) {
    return errorResponse(res, "Error fetching unit", 500, [error?.message]);
  }
};

const updateUnit = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUnit = await prisma.unit.update({
      where: { id: parseInt(id, 10) },
      data: req.body,
    });
    return successResponse(res, "Unit updated successfully", updatedUnit);
  } catch (error) {
    return errorResponse(res, "Error updating unit", 500, [error?.message]);
  }
};

const deleteUnit = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.unit.delete({ where: { id: parseInt(id, 10) } });
    return successResponse(res, "Unit deleted successfully", null);
  } catch (error) {
    return errorResponse(res, "Error deleting unit", 500, [error?.message]);
  }
};
module.exports = {
  getAllUnits,
  getUnitById,
  createUnit,
  updateUnit,
  deleteUnit,
};
