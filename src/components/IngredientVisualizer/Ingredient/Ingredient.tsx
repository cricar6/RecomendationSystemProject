import * as React from 'react';

import './Ingredient.scss';
import { store } from '../../../stores/Stores';

interface IngredientProps {
    name: string;
}

export const Ingredient = ({ name}: IngredientProps) => {

    
    return <div className="ingredientContainer" onClick={(e) => {
        e.preventDefault();
        }}

        >
        <div className="ingredient">
        </div>
        <div className="name">
        {name}
        </div>
    </div>;
}

