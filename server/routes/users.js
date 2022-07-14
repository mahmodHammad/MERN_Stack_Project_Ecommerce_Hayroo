const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");

router.get("/all-user", usersController.getAllUser);
router.post("/signle-user", usersController.getSingleUser);

router.post("/add-user", usersController.postAddUser);
router.post("/edit-user", usersController.postEditUser);
router.post("/delete-user", usersController.getDeleteUser);

router.post("/change-password", usersController.changePassword);

router.post("/get-wish-product", usersController.getWishProduct);
router.post("/add-wish-product", usersController.addWishProduct);
router.post("/delete-wish-product", usersController.deleteWishProduct);



module.exports = router;
