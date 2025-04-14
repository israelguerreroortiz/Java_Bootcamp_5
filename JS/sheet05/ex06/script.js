const obtenerTemperatura = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('22ºC');
        }, 2000);
    });
};

const obtenerHumedad = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('60%');
        }, 1500);
    });
};

const obtenerViento = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('15km/h');
        }, 1000);
    });
};

const obtenerResultados = async () => {
    try {
        const [temperatura, humedad, viento] = await Promise.all([
            obtenerTemperatura(),
            obtenerHumedad(),
            obtenerViento(),
        ]);

        console.log('=== Clima ===');
        console.log(`Temperatura: ${temperatura}`);
        console.log(`Humedad: ${humedad}`);
        console.log(`Viento: ${viento}`);
    } catch (error) {
        console.error('Error obteniendo los datos del clima', error);
    }
};