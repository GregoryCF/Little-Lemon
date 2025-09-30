import { initializeTimes, updateTimes } from "../TimesContex";

test("initializeTimes returns a non-empty array of 'HH:mm' formatted strings", () => {
  const result = initializeTimes();

  expect(Array.isArray(result.availableTimes)).toBe(true);
  expect(result.availableTimes.length).toBeGreaterThan(0);

  result.availableTimes.forEach((time) => {
    expect(time).toMatch(/^\d{2}:\d{2}$/);
  });
});

test("updateTimes returns a non-empty array of 'HH:mm' formatted strings", () => {
  const initialState = {
    availableTimes: ["17:00", "18:00", "19:00"],
  };

  const action = { type: "SET_TIMES", payload: "2025-09-30" };

  const result = updateTimes(initialState, action);

  expect(Array.isArray(result.availableTimes)).toBe(true);
  expect(result.availableTimes.length).toBeGreaterThan(0);

  result.availableTimes.forEach((time) => {
    expect(time).toMatch(/^\d{2}:\d{2}$/);
  });
});
