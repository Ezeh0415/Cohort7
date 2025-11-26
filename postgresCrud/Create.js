const db = require("../postgesdb");
const sanitizeHtml = require("sanitize-html");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  if ((!name, !email, !password, !phone, address)) {
    res.status(400).json({ error: "Please fill in all fields" });
  }
  const cleanName = sanitizeHtml(name);
  const cleanEmail = sanitizeHtml(email);
  const cleanPhone = sanitizeHtml(phone);
  const cleanAddress = sanitizeHtml(address);
  const hashedPassword = await bcrypt.hash(password, 10);
  const query =
    "INSERT INTO users (name, email, password, phone, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [
    cleanName,
    cleanEmail,
    hashedPassword,
    cleanPhone,
    cleanAddress,
  ];
  try {
    const result = await db.query(query, values);
    res.status(201).json(result.rows[0]);
    db.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };
