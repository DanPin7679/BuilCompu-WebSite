import mongoose from "mongoose";

const graph = mongoose.Schema(
  {
    nodes: {
      type: [Number],
    },
    edges: {
      type: [Number],
    },
  },
  { timestamps: true }
);

export const Graph = mongoose.model("Graph", graph);
