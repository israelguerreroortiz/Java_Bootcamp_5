const longestWord = (arr) => {
    return arr.reduce((first, second) => first.length >= second.length ? first : second);
}
