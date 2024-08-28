import { describe, it, expect } from '@jest/globals';

describe('generatePassword', () => {

    // Test case 1: Password Length Validation
    it('should generate a password of the correct length', () => {
        const length = 12;
        const password = generatePassword(length, 'low');
        expect(password.length).toBe(length);
    });

    // Test case 2: Low Strength Password Validation
    it('should generate a password with only lowercase letters for low strength', () => {
        const password = generatePassword(8, 'low');
        expect(password).toMatch(/^[a-z]+$/);
    });

    // Test case 3: Medium Strength Password Validation
    it('should generate a password with uppercase, lowercase letters and numbers for medium strength', () => {
        const password = generatePassword(10, 'medium');
        expect(password).toMatch(/^[a-zA-Z0-9]+$/);
    });

    // Test case 4: High Strength Password Validation
    it('should generate a password with uppercase, lowercase letters, numbers, and symbols for high strength', () => {
        const password = generatePassword(14, 'high');
        expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()-_+=<>?]+$/);
    });

    // Test case 5: High Strength Password Includes at Least One Symbol
    it('should generate a high strength password that includes at least one symbol', () => {
        const password = generatePassword(14, 'high');
        expect(password).toMatch(/[!@#$%^&*()-_+=<>?]/);
    });
});
