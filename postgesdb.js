const { Client } = require("pg");

const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "ezeanwe3942",
  database: "cohort7",
});

db.connect()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB error:", err));

module.exports = db;
