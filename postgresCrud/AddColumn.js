const db = require("../postgesdb");

const CreateUserColumn = async (req, res) => {
  try {
    db.query(
      `ALTER TABLE users 
             ADD COLUMN IF NOT EXISTS dob DATE DEFAULT NULL,
             ADD COLUMN IF NOT EXISTS profileImage TEXT DEFAULT NULL;`,
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Columns added successfully" });
      }
    );
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateUserColumn };
