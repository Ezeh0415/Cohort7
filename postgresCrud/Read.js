const db = require("../postgesdb");

const ReadUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
    const post = result.rows[0];
    res.json(post);
    db.end();
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = { ReadUser };
