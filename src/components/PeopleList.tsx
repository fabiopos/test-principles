import { Person } from "../types";

interface PeopleListProps {
  people: Person[];
}
function PeopleList({ people }: PeopleListProps) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={`person-${index}`}>
          {person.name} {person.lastName}
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
