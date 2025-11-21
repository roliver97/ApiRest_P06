const Show = require("../models/shows");

//CREATE
const postShow = async (req,res,next) => {
  try {
    const newShow = new Show(req.body)
    const savedShow = await newShow.save();
    return res.status(200).json(savedShow);
  } catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }
}

//READ
const getShows = async (req,res,next) => {
  try {
    const allShows = await Show.find().populate("platforms");
    return res.status(200).json(allShows);
  }
  catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }
}

const getShowsByCategory = async (req,res,next) => {
  try {
    const { category } = req.params;

    const allShowsByCategory = await Show.find({categories: {$regex: category, $options: "i"}}).populate("platforms"); 
    //$regex: permite búsquedas más flexibles o parciales (con "ram" encontrará "Drama"). 
    // $options: "i" convierte la petición en case-insensitive ("Drama" === "DRaMa" === "drama").
    return res.status(200).json(allShowsByCategory);
  }
  catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }
}

const getShowsByName = async (req,res,next) => {
  try {
    const { name } = req.params;

    const allShowsByName = await Show.find({title: {$regex: name, $options: "i"}}).populate("platforms"); 
    //$regex: permite búsquedas más flexibles o parciales (con "ram" encontrará "Drama"). 
    // $options: "i" convierte la petición en case-insensitive ("Drama" === "DRaMa" === "drama").
    return res.status(200).json(allShowsByName);
  }
  catch (error) {
    return res.status(400).json("Ha fallado la petición a la BBDD");
  }
}

//UPDATE
const updateShow = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { platforms, categories, ...otherFields } = req.body;

    const updateData = { $set: otherFields }; 
    // $set actualiza o crea SOLO los campos que le indiquemos (en este caso, todo el req.body que no sea platforms o categories). Eso evita que con un update de cualquier campo se borren los datos de los arrays platforms o categories.

    if (platforms && platforms.length > 0) {
      updateData.$set.platforms = [...new Set(platforms)];
      // usamos Set porque solo permite valores únicos, así descartamos valores duplicados en una petición.
      // usamos spread operator ... y [ ] porque Mongo espera que le devolvamos un array, no un Set. Con el spread operator creamos un nuevo array con todos los elementos del Set.
    }

    if (categories && categories.length > 0) {
      updateData.$set.categories = [...new Set(categories)];
    }

    const updatedShow = await Show.findByIdAndUpdate(id, updateData, { new: true });
    return res.status(200).json(updatedShow);
  } catch (error) {
    return res.status(400).json("Ha fallado la petición");
  }
}

//DELETE
const deleteShow = async (req, res, next) => {
  const id = req.params.id;
  const deletedShow = await Show.findByIdAndDelete(id);
  return res.status(200).json(deletedShow);
}

module.exports = { getShows, getShowsByCategory, getShowsByName, postShow, deleteShow, updateShow };