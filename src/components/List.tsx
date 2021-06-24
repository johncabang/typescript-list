import React from "react";

interface IProps {
  people: {
    name: string;
    img: string;
    age: number;
    note?: string;
  }[];
}

// DEFINE List as a REACT FUNCTIONAL COMPONENT THAT CONTAINS TYPE OF IProps

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img className="List-img" src={person.img} alt="avatar" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
