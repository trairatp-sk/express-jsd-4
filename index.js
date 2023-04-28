const express = require("express");
const workRouter = require("./routes/works");
const protectedRouter = require("./routes/protected");
const database = require("./database");
const PORT = 3333;

const app = express();

const env = process.env;
// export API_KEY=password123
console.log("apiKey", env.API_KEY);

app.use(express.json());

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  // ดึงข้อมูลจาก database
  const user = database[id];
  res.send(user);
});

app.use("/users/:name", (req, res, next) => {
  const { name } = req.params;
  req.username = name;
  next();
});
// GET /users/touch/works/jamming
app.use("/users/:name/works", workRouter);
app.use("/protected", protectedRouter);

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});
