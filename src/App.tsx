import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchPeople } from "./api/person.api";
import { Person } from "./types";
import PeopleList from "./components/PeopleList";

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    fetchPeople().then(setPeople);
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>People</h1>
      <div>
        <PeopleList people={people} />
      </div>
    </>
  );
}

export default App;
