import React, { useState, useEffect } from 'react';

function Body() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(response => response.json())
        .then(data => setItems(data.meals))
    }, []);

    const itemsList = items.map((item, i) => {
        return (
            <div className="col-md-4" key={i}>
                <div>{item.idMeal}.{item.strMeal}</div>
                <img src={item.strMealThumb}/>
            </div>
        )
    });

    return(
        <div className="row">
            {itemsList}
        </div>
    )
}

export default Body;