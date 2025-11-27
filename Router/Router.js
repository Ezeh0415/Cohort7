const express = require("express");
const router = express.Router();
const CreatePost = require("../postgresCrud/Create");
const ReadPost = require("../postgresCrud/Read");
const UpdatePost = require("../postgresCrud/update");
const DeletePost = require("../postgresCrud/Delete");
const CreateColumn = require("../postgresCrud/AddColumn");

// create section on postgressql
router.post("/createPost", CreatePost.createUser);

// read section on postgressql
router.get("/readPost/:id", ReadPost.ReadUser);

// update section on postgressql
router.put("/updatePost", UpdatePost.UpdateUser);

// delete section on postgressql
router.delete("/deletePost/:id", DeletePost.DeleteUser);

// add column on postgressql
router.get("/addColumn", CreateColumn.CreateUserColumn);

module.exports = router;
