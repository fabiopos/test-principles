import { expect, test } from "vitest";
import { fetchPeople } from "./person.api";

test("fetchPeople: should  => return a promise", () => {
  const people = fetchPeople();
  expect(people).toBeInstanceOf(Promise);
});

test("fetchPeople: should  => return people", async () => {
  const people = await fetchPeople();
  expect(people.length).toBeGreaterThan(0);
});
