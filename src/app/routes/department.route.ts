import express from "express";
import * as departmentController from "../controllers/department.controller";

const router = express.Router();

router.post("/", departmentController.createDepartment);
router.get("/", departmentController.getAllDepartments);
router.get("/:id", departmentController.getDepartmentById);
router.put("/:id", departmentController.updateDepartment);
router.delete("/:id", departmentController.deleteDepartment);

export const departmentRoutes= router;
