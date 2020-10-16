const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/pardakht");

router.get("/pardakht/getToken/:userId", requireSignin, isAuth, generateToken);
router.post(
    "/pardakht/payment/:userId",
    requireSignin,
    isAuth,
    processPayment
);

router.param("userId", userById);

module.exports = router;    
