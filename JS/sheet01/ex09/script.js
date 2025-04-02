const invertirCadena = str => {
    let reversed = [];
    for(let i = 0; i < str.length; i++)
        reversed.push(str[i]);
    return (reversed.reverse().join(''))
}

const contarVocales = str => {
    let vocals = 'aeiou';
    let cont = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (vocals.includes(str[i].toLowerCase()))
            cont++;
    }
    return cont;
}