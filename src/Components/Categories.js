import React from "react";

function Categories({ filter, categories }) {
  return (
    <div className="Categories">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn-portfolio"
            key={index}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
