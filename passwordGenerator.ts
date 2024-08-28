function generatePassword(length: number, strength: 'low' | 'medium' | 'high'): string {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_+=<>?';

    let characters = lowerChars;

    if (strength === 'medium') {
        characters += upperChars + numbers;
    } else if (strength === 'high') {
        characters += upperChars + numbers + symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
