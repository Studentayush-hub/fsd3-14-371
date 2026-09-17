import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>We are FSD Developer</h1>");
});

app.post("/login", (req, res) => {
  res.send({ msg: "User login" });
});

app.put("/user/update/1", (req, res) => {
  res.send({ msg: "User update" });
});

app.delete("/users/1", (req, res) => {
  res.send({ msg: "Remove User 1" });
});

app.use((req, res) => {
  res.status(404).send("<h1> Not Found</h1>");
});
const server = app.listen(3333, () => {
  console.log("Server is running on port 3333");
});


// server.on("error", (err) => {
//   console.error("Server listen error:", err);
// });