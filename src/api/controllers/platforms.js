const Platform = require("../models/platforms");

//CREATE
const postPlatform = async (req,res,next) => {
  try {
    const newPlatform = new Platform(req.body)
    const savedPlatform = await newPlatform.save();
    return res.status(200).json(savedPlatform);
  } catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }
}

//READ
const getPlatforms = async (req,res,next) => {
  try {
    const allPlatforms = await Platform.find();
    return res.status(200).json(allPlatforms);
  }
  catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }
}

//UPDATE
const updatePlatform = async (req, res, next) => {
  try {
    const id = req.params.id;
    const newPlatform = new Platform(req.body); 
    newPlatform._id = id;

    const updatedPlatform = await Platform.findByIdAndUpdate(id, newPlatform, {new:true});
    return res.status(200).json(updatedPlatform);
  } catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }

}

//DELETE
const deletePlatform = async (req, res, next) => {
  const id = req.params.id;
  const deletedPlatform = await Platform.findByIdAndDelete(id);
  return res.status(200).json(deletedPlatform);
}

module.exports = { getPlatforms, postPlatform, deletePlatform, updatePlatform };