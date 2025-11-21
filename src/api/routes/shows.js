const { getShows, postShow, deleteShow, updateShow, getShowsByCategory, getShowsByName } = require("../controllers/shows");


const showsRouter = require("express").Router();

showsRouter.get("/categories/:category", getShowsByCategory);
showsRouter.get("/:name", getShowsByName);
showsRouter.get("/", getShows);
showsRouter.post("/", postShow);
showsRouter.delete("/:id", deleteShow);
showsRouter.put("/:id", updateShow);

module.exports = showsRouter;
