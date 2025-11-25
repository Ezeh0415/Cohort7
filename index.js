const express = require("express");
const db = require("./postgesdb");
const app = express();
const port = 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const data = await db.query("SELECT * FROM rental");
  const names = data.rows;
  res.send(names);
  res.end();
  db.end();
});

app.post("/post", (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).send("No data provided");
  }

  try {
    // send data to external service/database
    res.status(200).send("Data received successfully");
  } catch (error) {
    res.status(500).send("Error processing data");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
