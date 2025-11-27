const db = require("../postgesdb");
const sanitizeHtml = require("sanitize-html");

const UpdateUser = async (req, res) => {
  const { email, address } = req.body;

  if (!email || !address) {
    return res.status(400).json({ message: "Please provide all values" });
  }

  try {
    const result = await db.query(
      "UPDATE users SET  name = $1 WHERE email = $2 RETURNING *",
      [sanitizeHtml(address), sanitizeHtml(email)]
    );
    db.end();
    return res.json(result.rows[0]);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { UpdateUser };
