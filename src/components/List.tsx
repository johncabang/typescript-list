import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const List = (props: IProps) => {
  return <div>I am a List</div>;
};

export default List;
