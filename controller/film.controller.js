const models = require("../models");
const Film = models.Film;

const getAllFilms = async (req, res) => {
  const films = await Film.findAll();
  res.json({ data: films });
};

const getFilmById = async (req, res) => {
  const id = req.params.id;
  const film = await Film.findByPk(id);

  if (!film) return res.status(404).json({ message: "not found" });

  res.json({ data: film });
};

const createFilm = async (req, res) => {
  const film = await Film.create(req.body);
  res.status(201).json({ message: "film created successfull" });
};

module.exports = { getAllFilms, getFilmById, createFilm };
