import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertMovie = (payload) => api.post("/movie", payload);
export const getAllMovies = () => api.get("/movies");
export const updateMoviesById = (id, payload) =>
  api.put(`/movie/${id}`, payload);
export const deleteMovieById = (id) => api.delete(`/movie/${id}`);
export const getMovieById = (id) => api.get(`/movie/${id}`);

const apis = {
    insertMovie,
    getAllMovies,
    updateMoviesById,
    deleteMovieById,
    getMovieById
}

export default apis