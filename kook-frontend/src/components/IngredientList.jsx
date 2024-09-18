/*
// src/components/IngredientList.js
import React, { useEffect, useState } from 'react';
import { getIngredients } from '../apiService';

const IngredientList = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getIngredients().then(response => setIngredients(response.data));
    }, []);

    return (
        <div className="container">
            <h2>Ingredients</h2>
            <ul className="list-group">
                {ingredients.map(ingredient => (
                    <li key={ingredient.id} className="list-group-item">
                        {ingredient.name} - {ingredient.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;
*/

import React, { useEffect, useState } from 'react';

function IngredientList() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/recipes/ingredients/')  // Change to your backend's URL
            .then(response => response.json())
            .then(data => setIngredients(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Ingredients List</h1>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name} - {ingredient.quantity}</li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientList;
