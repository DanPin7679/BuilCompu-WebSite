import express from "express";
import { errorHandler } from "./middleware/errorMiddleware.js";

import { connectDB } from "./data/graph-data.js";
import graphData_router from "./routes/graphData.js";
import logicGates_router from "./routes/logicGates.js";
import findAllPath from "./routes/findAllPaths.js";

connectDB();

const app = express();

// const PORT = process.env.PORT;
const PORT = 5000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/getgoals", (req, res) => {
  res.send("getgoal");
});

app.use("/api/graphdata", graphData_router);
app.use("/api/logicGates", logicGates_router);
app.use("/api/findAllPaths", findAllPath);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
