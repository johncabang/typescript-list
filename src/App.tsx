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

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Tesla",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tesla.com%2Fmodelx&psig=AOvVaw18utofXvStO61lWvMKH-zl&ust=1624624325567000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCODGwrKjsPECFQAAAAAdAAAAABAD",
      age: 18,
      note: "We will not stop until every car on the road is electric",
    },
    {
      name: "SpaceX",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nasa.gov%2Fpress-release%2Fas-artemis-moves-forward-nasa-picks-spacex-to-land-next-americans-on-moon&psig=AOvVaw3QF66c4c3glaQRhYQlLQ5Q&ust=1624624436600000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIDOjfCjsPECFQAAAAAdAAAAABAD",
      age: 19,
      note: "I always have optimism, but I'm realistic. It was not with the expectation of great success that I started Tesla or SpaceX... It's just that I thought they were important enough to do anyway",
    },
    {
      name: "Nasa",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nasa.gov%2Fpress-release%2Fcrew-1-astronauts-safely-splash-down-after-space-station-mission&psig=AOvVaw01qzJKk1eT1T1cS_8dbnnK&ust=1624624501560000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCMig8ImksPECFQAAAAAdAAAAABAD",
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
      <h1>TypeScript-PARTY</h1>
      <List people={people} />
    </div>
  );
}

export default App;
