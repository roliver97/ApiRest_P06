const { getPlatforms, postPlatform, deletePlatform, updatePlatform } = require("../controllers/platforms");


const platformsRouter = require("express").Router();

platformsRouter.get("/", getPlatforms);
platformsRouter.post("/", postPlatform);
platformsRouter.delete("/:id", deletePlatform);
platformsRouter.put("/:id", updatePlatform);

module.exports = platformsRouter;
