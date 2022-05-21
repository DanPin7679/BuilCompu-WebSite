import asyncHandler from "express-async-handler";
import { Graph } from "../model/graph.js";

export const getGraphs = asyncHandler(async (req, res) => {
  const graphs = await Graph.find();
  // const graphs = { data: "test" };
  res.status(200).json(graphs);
});

export const setGraph = asyncHandler(async (req, res) => {
  console.log(Graph);
  if (!req.body.nodes || !req.body.edges) {
    res.status(400);
    throw new Error("Please add a text field");
  } else {
    const graph = await Graph.create({
      nodes: req.body.nodes,
      edges: req.body.edges,
    });
    console.log(graph);
    res.status(200).json(graph);
  }
});
