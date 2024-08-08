import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Define the birth year for the test
    const birthYear = 1984;

    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Calculate the expected age based on the current year and birth year
    const expectedAge = currentYear - birthYear;

    // Call the function to test
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert that the function returns the expected age
    expect(ageOfPerson).toBe(expectedAge);
  });
});
