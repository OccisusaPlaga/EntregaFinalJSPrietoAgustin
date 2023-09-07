console.table(productos);

function filtrarPorPrecioMax(precioMaximo){
    const filtrados = productos.filter((producto) == producto.precio <= precioMaximo);

    let textoParaAlert='';
    filtrados.forEach((producto) == {
        textoParaAlert += `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio $ ${producto.precio}\n`;
    });
    alert(textoParaAlert);
}

let precio = parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-Salir del programa)'));

while(precio != 0){
    filtrarPorPrecioMax(precio);

    precio = parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-Salir del programa)'));
}