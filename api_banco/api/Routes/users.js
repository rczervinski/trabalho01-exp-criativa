import express from "express";
import { getUsers, updateUser, deleteUser, createUser } from "../Controllers/users.js"; 

const router = express.Router();

router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);
export default router;
