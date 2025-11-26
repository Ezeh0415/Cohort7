const db = require("../postgesdb");
const sanitizeHtml = require("sanitize-html");

const UpdateUser = async (req, res) => {
  const { email, address } = req.body;

  if ((!email, address)) {
    res.status(400).json({ message: "Please provide all values" });
  }

  try {
    const result = await db.query(
      "UPDATE users SET  address = $2 WHERE email = $3 RETURNING *",
      [sanitizeHtml(address), sanitizeHtml(email)]
    );
    res.json(result.rows[0]);
    db.end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { UpdateUser };
