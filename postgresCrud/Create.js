const db = require("../postgesdb");
const sanitizeHtml = require("sanitize-html");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, email, password, phone, address, dob, profileImage } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !dob ||
    !profileImage
  ) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters" });
  }

  try {
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (rows.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const cleanName = sanitizeHtml(name);
    const cleanEmail = sanitizeHtml(email);
    const cleanPhone = sanitizeHtml(phone);
    const cleanAddress = sanitizeHtml(address);
    const cleanProfileImage = sanitizeHtml(profileImage);
    const hashedPassword = await bcrypt.hash(password, 10);
    const query =
      "INSERT INTO users (name, email, password, phone, address,dob,profileImage) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      cleanName,
      cleanEmail,
      hashedPassword,
      cleanPhone,
      cleanAddress,
      dob,
      cleanProfileImage,
    ];
    const result = await db.query(query, values);
    db.end();
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };
