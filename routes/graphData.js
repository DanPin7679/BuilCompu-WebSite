import express, { request } from "express";
import { getGraphs, setGraph } from "../controllers/graphData.js";

const graphData_router = express.Router();

graphData_router.route("/").get(getGraphs).post(setGraph);
// router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

export default graphData_router;
