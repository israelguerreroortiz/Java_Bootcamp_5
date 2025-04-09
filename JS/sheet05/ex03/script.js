const loginUsuario = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("usuario123");
        }, 1000);
    })
};

const obtenerPerfil = (usuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5)
                reject("Error al obtener el perfil");
            else {
                console.log(`Usuario recibido: ${usuario}`);
                resolve({ nombre: "Ana", rol: "admin" });
            }
        }, 1000);
    });
};

loginUsuario()
    .then(obtenerPerfil)
    .catch((error) => console.log(error))
    .then(mostrarDashboard);