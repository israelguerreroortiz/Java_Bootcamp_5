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
            console.log(`Usuario recibido: ${usuario}`);
            resolve({ nombre: "Ana", rol: "admin" });
        }, 1000);
    });
};

const mostrarDashboard = (perfil) => {
    return console.log(`Bienvenida ${perfil.nombre}, rol: ${perfil.rol}`);
};

loginUsuario()
    .then(obtenerPerfil)
    .then(mostrarDashboard);