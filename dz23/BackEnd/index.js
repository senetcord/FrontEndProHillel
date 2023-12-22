const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const TodoList = require("./json/data.json");

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

app.get("/todoList", (req, res) => {
  res.send(TodoList);
});
