const { Client } = require("pg");

const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "ezeanwe3942",
  database: "dvdrental",
});

db.connect()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB error:", err));

module.exports = db;

// const { Client } = require("pg");

// const db = new Client({
//   host: "127.0.0.1",
//   user: "postgres",
//   port: 5432,
//   password: "ezeanwe3942",
//   database: "dvdrental",
// });

// db.connect()
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.error("DB error:", err));

// module.exports = db;
