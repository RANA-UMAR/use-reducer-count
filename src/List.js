import React from "react";

const List = ({ props }) => {
    console.log(props);
  return (
    <div>
      {props.map((people) => {
        const { id, name, age, image } = people;
        return (
          <>
          
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default List;
