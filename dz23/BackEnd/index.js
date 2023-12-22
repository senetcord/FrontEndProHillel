const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

let TodoList = require("./json/data.json");

const LOGIN = "MongoLearn";
const PASSWORD = "s6yKWs8bmflz3y1N";
const URL = `mongodb+srv://${LOGIN}:${PASSWORD}@cluster0.tcgkuyk.mongodb.net/?retryWrites=true&w=majority`;
const PORT = 5000;

const Schema = mongoose.Schema;

const TodoListSchema = Schema(
  {
    text: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const TodoModel = mongoose.model("TodoList", TodoListSchema);

mongoose.connect(URL).then(() => console.log("connected tp DB"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

app.get("/todoList", (req, res) => {
  res.send(TodoList);
});

app.post("/todoList", (req, res) => {
  TodoList.push({
    _id: Math.random(),
    text: req.body.text,
    checked: false,
  });

  res.send({ message: "OK!" });
});

app.delete("/todoList/:id", (req, res) => {
  const id = +req.params.id;
  TodoList = TodoList.filter((item) => item._id !== id);
  res.send({ message: "OK!" });
});

app.delete("/todoList", (req, res) => {
  TodoList = [];
  res.send({ message: "OK!" });
});

app.put("/todoList/:id", (req, res) => {
  const id = +req.params.id;
  TodoList = TodoList.map((item) => {
    if (item._id === id) {
      return {
        ...item,
        checked: !item.checked,
      };
    } else {
      return item;
    }
  });
  res.send({ message: "OK!" });
});
