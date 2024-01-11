const router = require("express").Router();

const { homeRoute, samRoute} = require("../controllers/names")

router.get("/", homeRoute);

router.get("/sam", samRoute);


module.exports = router;