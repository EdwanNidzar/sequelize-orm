const express = require("express");
const filmRouter = express.Router();
const {
  getAllFilms,
  getFilmById,
  createFilm,
} = require("../controller/film.controller");

filmRouter.get("/api/films", getAllFilms);
filmRouter.get("/api/film/:id", getFilmById);
filmRouter.post("/api/films", createFilm);

module.exports = filmRouter;
