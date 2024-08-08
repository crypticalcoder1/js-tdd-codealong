// Your code here
// utils.js

/**
 * Calculates the current age based on the year of birth.
 * @param {number} birthYear - The year of birth.
 * @returns {number} - The calculated age.
 */
export function currentAgeForBirthYear(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Calculate age
    const age = currentYear - birthYear;
    
    // Return the age
    return age;
  }
  