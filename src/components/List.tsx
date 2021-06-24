import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

// DEFINE List as a REACT FUNCTIONAL COMPONENT THAT CONTAINS TYPE OF IProps

const List: React.FC<IProps> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <>{person.name}</>;
      })}
    </>
  );
};

export default List;
