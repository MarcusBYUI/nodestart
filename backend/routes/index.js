// const routes = require('express').Router();
// const path = require("path");

// routes.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "../demo.json"))
// })

// module.exports = routes;

const express = require("express");

const professionalController = require("../controllers/professional");

const router = express.Router();

// GET /feed/posts
router.get("/", professionalController.getData);
// localhost:8080/professional/
module.exports = router;
