const contarVocales = (string) => {
    let vocals = 'aeiouAEIOU';
    let cont = 0;
    for (let i = 0; i < string.length; i++)
    {
        if (vocals.includes(string[i]))
            cont++;
    }
    return (cont);
}