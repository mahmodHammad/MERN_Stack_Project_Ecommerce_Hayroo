const express = require("express");
const router = express.Router();
const recController = require("../controller/recommendation");

router.post("/get-recommendations", recController.getRecommendation);

module.exports=router
