import { Person } from "../types";

export function orderByName(people: Person[]) {
  return people.sort((a, b) => a.name.localeCompare(b.name));
}

export function findByName(people: Person[], name: string) {
  return people.find((person) => person.name === name);
}

export function filterByGreaterThanAge(people: Person[], age: number) {
  return people.filter((person) => person.age > age);
}

export function filterByLessThanAge(people: Person[], age: number) {
  return people.filter((person) => person.age < age);
}

export function validatePeople(people: Person[]): Person[] {
  const filtered = filterByLessThanAge(people, 18);
  if (filtered.length > 0)
    throw new Error(`There's people below the permited age`);

  return filtered.map((x) => ({ ...x, valid: true }));
}
