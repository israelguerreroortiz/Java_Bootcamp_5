const esPalindromo = (string) => {
    let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse = cleanString.split('').reverse().join('');
    return cleanString == reverse
}