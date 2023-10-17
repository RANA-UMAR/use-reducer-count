import React from "react";

const Categories = ({ category, filterItems }) => {
  return (
    <div className="flex items-center justify-center font-bold">
      {category.map((categItem,index) => {
        return (
         
          <button
            className="px-5 py-3 my-5 bg-sky-400"
            key={index}
            onClick={() => {
              filterItems(categItem);
            }}
          >
            {categItem}
          </button>
          
        );
      })}
    </div>
  );
};

export default Categories;
