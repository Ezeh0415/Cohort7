const express = require("express");
const router = express.Router();
const CreatePost = require("../postgresCrud/Create");
const ReadPost = require("../postgresCrud/Read");
const UpdatePost = require("../postgresCrud/update");
const DeletePost = require("../postgresCrud/Delete");

// create section on postgressql
router.post("/createPost", CreatePost.createUser);

// read section on postgressql
router.get("/readPost/:id", ReadPost.ReadUser);

// update section on postgressql
router.put("/updatePost/:id", UpdatePost.UpdateUser);

// delete section on postgressql
router.delete("/deletePost/:id", DeletePost.DeleteUser);

module.exports = router;
