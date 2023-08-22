const menu0 = ""
+"-MenuPrincipal\n"
+"1-Comprar animal marino\n"
+"2-Ver Precio Total\n"
+"3-Ver Descuentos Disponibles\n"
+"0-Salir\n"

const menu1= ""
+"-Peces\n"
+"1-Pez Payaso-150$\n"
+"2-Tortuga-200$\n"
+"3-Pulpo-450$\n"
+"4-Calamar-480$\n"
+"0-Volver\n"
+"s-cerrar\n"

const menu2=""
+"-Comprando 4 10%off\n"
+"-Comprando 6 15%off\n"
+"-comprando 8 25%off\n"

let Precio = 0;
let PrecioVar = 0;
let ProdTotales = 0;
let descuentos = 0;

function SumarProductos(Precio){
    PrecioVar += Precio;
    ProdTotales++;

    return "¡Agregaste un pez al carrito!\n\nPrecio del preducto: $"+Precio+".\n\nPrecio total de la compra: $"+PrecioVar+".\nCantidad de peces: "+ProdTotales+". Descuento aplicado: "+descuentos+"";

}

function calcularDescuento(){
    if (ProdTotales >= 4 && ProdTotales < 6)
        descuentos = 10;
    else if(ProdTotales >= 6 && ProdTotales <8)
        descuentos = 15;
    else if(ProdTotales >=8 )
        descuentos= 25;
}

function PrecioFinal(){
    let Total=0;

    calcularDescuento();
    if (descuentos == 0)
    {
        Total = PrecioVar;
        return "El Precio Final de su compra es $"+Total+".\n\nLa compra no tiene descuentos.";
    }
    else
    {
        Total = PrecioVar - ((descuentos/100)* PrecioVar);
        return "El precio final de su compra es "+Total+".\n\nLa compra tiene un descuento del "+descuentos+"%";
    }
}

var texto = 0;
do {
    texto = parseInt(prompt(menu0));
    switch (texto) {
        case 1:
            do {
                texto = parseInt(prompt(menu1));
                switch (texto) {
                    case 1:
                        alert(SumarProductos(150));
                        break;
                    case 2:
                        alert(SumarProductos(200));
                        break;
                    case 3:
                        alert(SumarProductos(450));
                        break;
                    case 4:
                        alert(SumarProductos(480));
                        break;
                }
            } while (texto !== 0);
            break;
        case 2:
            alert("PrecioFinal()");
            break;
        case 3:
            do{
                texto= parseInt(prompt(menu2));
                switch (texto){
                case 1:
                }
            }while(texto!==0)
            break;
        case 0:
            alert("!Vuelva Pronto!");
            break;
        default:
            alert("El código no existe");
    }
} while (texto !== 0);