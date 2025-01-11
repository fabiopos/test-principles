import { FakeUser, Person } from "../types";

export async function fetchPeople(): Promise<Person[]> {
    const response = await fetch("https://www.freetestapi.com/api/v1/users");
    const fakeUsers = await response.json();
  
    return fakeUsers.map((fu: FakeUser) => {
      const [name, lastName] = fu.name.split(" ");
      return { name, lastName, age: fu.name };
    });
  }
  