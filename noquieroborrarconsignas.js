//conseguir un nombre para el acuario y fucionar las funciones de consignas con noquieroborrar consignas para algo mas interactivo
//dejar de procastinar tanto
console.table(peces);

function filtrarPorPrecioMax(precioMaximo) {

  const filtrados = peces.filter((pez) => pez.precio <= precioMaximo);
  
  
if (filtrados.length !=0) {
    let textoAlert = '';
    filtrados.forEach((pez) => {
    textoAlert += `ID: ${pez.id} - Nombre: ${pez.nombre} - Precio $${pez.precio}\n`;
    });
        alert(textoAlert);
    } else {
        alert('no tenemos nada disponible con esa cantidad de dinero');
    }
}

let precio = parseFloat(prompt('Ingrese su cantidad de dinero disponible (0-Para salir)'));

while (precio !== 0) {
  filtrarPorPrecioMax(precio);

  precio = parseFloat(prompt('Ingrese su cantidad de dinero disponible (0-Para salir)'));
}
