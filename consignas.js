const menu0 = ""
+"MenuPrincipal\n"
+"1Comprar animal marino\n"
+"2Ver Precio Total\n"
+"3Ver Descuentos Disponibles\n"
+"0Salir\n"

const menu1= ""
+"Objetos\n"
+"1Pez Payaso-150$\n"
+"2Tortuga-200$\n"
+"3Pulpo-450$\n"
+"4Calamar-480$\n"
+"0Volver\n"


const menu2=""
+"Comprando 4 10%off\n"
+"Comprando 6 15%off\n"
+"comprando 8 25%off\n"

let Precio = 0;
let PrecioVar = 0;
let ProdTotales = 0;
let descuentos = 0;

function SumarProductos(Precio){
    PrecioVar += Precio;
    ProdTotales++;

    alert("¡Agregaste un pez al carrito!\n\nPrecio del preducto: $"+Precio+".\n\nPrecio total de la compra: $"+PrecioVar+".\nCantidad de peces: "+ProdTotales+". Descuento aplicado: "+descuentos+"")

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
        alert("El Precio Final de su compra es $"+Total+".\n\nLa compra no tiene descuentos.")
    }
    else
    {
        Total = PrecioVar - ((descuentos/100)* PrecioVar);
        alert("El precio final de su compra es "+Total+".\n\nLa compra tiene un descuento del "+descuentos+"%")
    }
}