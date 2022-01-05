import React from "react";


const CategoryList = (props) => {
    return (
        <div>
        <h1>Category List</h1>
        <ul>
            {props.categories.map(category => (
            <li key={category.id}>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default CategoryList;