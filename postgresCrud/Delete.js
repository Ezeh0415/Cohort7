const db = require("../postgesdb");
const sanitizeHtml = require("sanitize-html");

const DeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletePost = await db.query("DELETE FROM users WHERE id = $1", [
      sanitizeHtml(id),
    ]);
    db.end();
    return res.json(deletePost.rows);
  } catch (err) {
    return res.json(err);
  }
};

module.exports = { DeleteUser };
