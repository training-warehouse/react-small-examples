import React from 'react';

const Categories = ({filterItems, categories}) => {
    return (
        <div className="btn-container">
            {
                categories.map((category, i) => (
                    <button className="filter-btn"
                            onClick={() => filterItems(category)}
                            key={i}>
                        {category}
                    </button>
                ))
            }
        </div>
    );
};

export default Categories;