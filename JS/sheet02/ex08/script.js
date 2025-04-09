/*const removerDuplicados = (array) => {
    const set = new Set();
    array.forEach((element) => set.add(element));
    let newArray = [...set];
    return (newArray);
}*/

const removerDuplicados = (array) => [...new Set(array)];

