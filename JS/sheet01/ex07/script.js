let arr = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const sumarArreglo = arr => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) !== "number") {
                console.log("Todos los elementos del arreglo deben ser números");
                return;
        }
        suma += arr[i];
    }
    return suma;
}
