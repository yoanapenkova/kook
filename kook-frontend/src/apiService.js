import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getIngredients = () => axios.get(`${API_URL}api/recipes/ingredients/`);
/*
export const addIngredient = (ingredient) => axios.post(`${API_URL}ingredients/`, ingredient);
export const updateIngredient = (id, ingredient) => axios.put(`${API_URL}ingredients/${id}/`, ingredient);
export const deleteIngredient = (id) => axios.delete(`${API_URL}ingredients/${id}/`);
*/