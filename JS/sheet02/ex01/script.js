const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filtrarImpares = (array) => {
    if (!Array.isArray(array)) return 'Error: se esperaba un array'
    return array.filter((number) => number % 2 != 0);
}