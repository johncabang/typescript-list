import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  // EXAMPLE

  // const [number, setNumber] = useState<number | string>(7);

  // const changeNumber = () => {
  //   setNumber("1");
  // };

  // note?: string, === optional

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Tesla",
      img: "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2019/08/e91c11ad3914389003b4316d6a6823b0/dsc01999.jpg?w=1784&h=1004",
      age: 18,
      note: "We will not stop until every car on the road is electric",
    },
    {
      name: "SpaceX",
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg",
      age: 19,
      note: "I always have optimism, but I'm realistic. It was not with the expectation of great success that I started Tesla or SpaceX... It's just that I thought they were important enough to do anyway",
    },
    {
      name: "Nasa",
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/nhq202105020001.jpg",
      age: 63,
      note: "That's one small step for man, one giant leap for mankind",
    },
  ]);

  // people.map(person  => {
  //   person.name
  // })

  // {
  //   name: "Elon Musk",
  //   url: "",
  //   age: 49,
  //   note: "We will not stop until every car on the road is electric",
  // },

  return (
    <div className="App">
      <h1>TypeScript-LIST</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
