import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  // EXAMPLE

  // const [number, setNumber] = useState<number | string>(7);

  // const changeNumber = () => {
  //   setNumber("1");
  // };

  interface IState {
    people: {
      name: string;
      url: string;
      age: number;
      note?: string;
    }[];
  }

  // note?: string, === optional

  const [people, setPeople] = useState<IState["people"]>([]);

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
      <h1>TypeScript-PARTY</h1>
      <List people={people} />
    </div>
  );
}

export default App;
