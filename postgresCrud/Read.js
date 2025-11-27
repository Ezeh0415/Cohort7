const db = require("../postgesdb");

const ReadUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      `SELECT id, name, email, phone, address  FROM users WHERE id = $1`,
      [id]
    );
    const post = result.rows[0];
    db.end();
    return res.json(post);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = { ReadUser };
