let express = require("express");
const { createListController, getListController, updateListController, deleteListController } = require("../controllers/list.controller");

let router = express.Router();



router.post("/create", createListController)

router.get("/", getListController)

router.put("/update/:id", updateListController)

router.delete("/delete/:id", deleteListController)


module.exports = router;