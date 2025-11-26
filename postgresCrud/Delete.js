const db = require("../postgesdb");
const sanitizeHtml = require("sanitize-html");

const DeleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const deletePost = await db.query("DELETE FROM users WHERE id = $1", [id]);
    res.json(deletePost.rows);
    db.end();
  } catch (err) {
    res.json(err);
  }
};

module.exports = { DeleteUser };
