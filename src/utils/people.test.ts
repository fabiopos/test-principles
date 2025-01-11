import { expect, test } from "vitest";
import {
  orderByName,
  findByName,
  filterByGreaterThanAge,
  validatePeople,
} from "./people.util";
import { james, people } from "../mock/person.mock";

test("orderByName: should  => first element should be Chuck", () => {
  const sorted = orderByName(people);
  expect(sorted[0].name).toEqual("Chuck");
});

test("orderByName: should => first element should not be James or Juan", () => {
  const sorted = orderByName(people);
  expect(sorted[0].name).not.toEqual("James");
  expect(sorted[0].name).not.toEqual("Juan");
});

test("orderByName: should => return same array length", () => {
  const sorted = orderByName(people);
  expect(sorted.length).toEqual(people.length);
});

test("findByName: should => return undefined", () => {
  const item = findByName(people, "Pedro");
  expect(item).toBeUndefined();
});

test("findByName should => return truthy value", () => {
  const item = findByName(people, "James");
  expect(item).toBeTruthy();
});

test("findByName: should => return an object", () => {
  const item = findByName(people, "James");
  expect(typeof item).toBe("object");
});

test("findByName: should => return an object", () => {
  const item = findByName(people, "James");
  expect(typeof item).toBe("object");
});

test("findByName: should => to match shape", () => {
  const item = findByName(people, "James");
  expect(item).toMatchObject({
    name: expect.stringMatching(/[A-Z][a-z]/),
    lastName: expect.stringMatching(/[A-Z][a-z]/),
    age: expect.not.stringContaining(""),
  });
});

test("filterByGreaterAge: should => return more than 1 item", () => {
  const items = filterByGreaterThanAge(people, 30);
  expect(items.length).toBeGreaterThan(1);
});

test("filterByGreaterAge: should => return less or equal to 1", () => {
  const items = filterByGreaterThanAge(people, 32);
  expect(items.length).toBeLessThanOrEqual(1);
});

test("filterByGreaterAge: should => return james", () => {
  const items = filterByGreaterThanAge(people, 32);
  expect(items).toContain(james);
});

test("filterByGreaterAge: should => return james", () => {
  const items = filterByGreaterThanAge(people, 32);
  expect(items).toHaveLength(1);
});

test("validatePeople: should => throw error", () => {
  const t = () => validatePeople(people);
  expect(t).toThrow();
});

test("validatePeople: should => not throw error", () => {
  const filtered = filterByGreaterThanAge(people, 18);
  const t = () => validatePeople(filtered);
  expect(t).not.toThrow();
});
