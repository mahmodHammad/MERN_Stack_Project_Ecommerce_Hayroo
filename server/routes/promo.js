const express = require("express");
const router = express.Router();
const promoController = require("../controller/promo");

router.post("/check-promo", promoController.checkPromo);
router.post("/add-promo", promoController.addPromo);


module.exports = router;
