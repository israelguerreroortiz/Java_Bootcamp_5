const esperaMilisegundos = (ms) => {
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    return promise;
}

const cuentaRegresiva = async () => {
    console.log('3...');
    await esperaMilisegundos(1000);
    console.log('2...');
    await esperaMilisegundos(1000);
    console.log('1...');
    await esperaMilisegundos(1000);
    console.log('¡Despiegue!');
};