import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IngredientList from './components/IngredientList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/list" element={<IngredientList />} />
                    <Route path="/" element={<IngredientList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
