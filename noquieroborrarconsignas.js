
const data = [
  {
    id: 1,
    nombre: "Pez Payaso",
    imagen: "https://cdn0.bioenciclopedia.com/es/posts/1/7/1/pez_payaso_171_orig.jpg",
    precio: 200,
    categoria: "pez",
  },

  {
    id: 2,
    nombre: "Caballo de Marx2",
    imagen: "https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/peces/caballito-de-mar/Caballito-de-mar-Animales-Faunia-main.jpg",
    precio: 390,
    categoria: "pez",
  },

  {
    id: 3,
    nombre: "Tortuga",
    imagen: "https://i.pinimg.com/originals/9c/3e/ca/9c3eca13f3e80ed68140a001771bdc35.jpg",
    precio: 509,
    categoria: "especial",
  },
  {
    id: 4,
    nombre: "Nutria",
    imagen: "https://www.nationalgeographic.com.es/medio/2021/08/05/2-nutria-marina_015d6f8e_1280x849.jpg",
    precio: 800,
    categoria: "especial",
  },

  {
    id: 5,
    nombre: "Ajolote",
    imagen: "https://i.redd.it/t3kma9ki25q71.jpg",
    precio: 1000,
    categoria: "especial",
  },

  {
    id: 6,
    nombre: "Pulpo",
    imagen: "https://c1.staticflickr.com/1/299/18972544510_4f433b72a2_z.jpg",
    precio: 1080,
    categoria: "pez",
  },
  {
    id: 7,
    nombre: "Calamar",
    imagen: "https://cdn.eldestapeweb.com/eldestape/052021/1622244399331.webp?cw=312&ch=175&extw=jpg",
    precio: 1200,
    categoria: "pez",
  },
  {
    id: 8,
    nombre: "Pez Globo",
    imagen: "https://media.istockphoto.com/id/638309968/photo/underwater-cute-salt-water-porcupine-balloonfish-fish-smiling.jpg?s=612x612&w=0&k=20&c=hNFzM3eRHHx-P1I8lZCx6ABPphFmzlCQXgujBUyZZ3A=",
    precio: 4000,
    categoria: "pez",
  },

  {
    id: 9,
    nombre: "Pez Roca",
    imagen: "https://www.aquariumbcn.com/wp-content/uploads/2022/08/Synanceia-verrucosa.jpg",
    precio: 3800,
    categoria: "pez",
  }

];

const productosContainer = document.querySelector(".productos");
const categoryList = document.querySelector(".category-list");

function displayProducts(productos) {
  if (productos.length > 0) {
    const detalles_peces = productos
      .map(
        (producto) => `
  <div class="producto">
  <div class="imagen">
    <img src="${producto.imagen}" alt="${producto.nombre}" />
  </div>
  <div class="detalles_peces">
    <span class="nombre">${producto.nombre}</span>
    <span class="precio">$${producto.precio}</span>
    <span class="categoria">${producto.categoria}</span>
    <a href="#" name="cart" class="btn btn-primary shop-item-button">Comprar</a>
  </div>
</div>`
      )
      .join("");

    productosContainer.innerHTML = detalles_peces;
  } else {
    productosContainer.innerHTML = "<h3>No Products Available</h3>";
  }
}

function setCategories() {
  const allCategories = data.map((producto) => producto.categoria);

  const catagories = [
    "Todos",
    ...allCategories.filter((producto, index) => {
      return allCategories.indexOf(producto) === index;
    }),
  ];
  //console.log(catagories);
  categoryList.innerHTML = catagories.map((categoria) => `<li>${categoria}</li>`).join("");

  categoryList.addEventListener("click", (e) => {
    const selectedCatagory = e.target.textContent;
    selectedCatagory === "Todos" ? displayProducts(data) : displayProducts(data.filter((producto) => producto.categoria == selectedCatagory));
  });
}
const priceRange = document.querySelector("#RangoDePrecio");
const ValordePrecio = document.querySelector(".ValordePrecio");

function setPrices() {
  const priceList = data.map((producto) => producto.precio);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  ValordePrecio.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    ValordePrecio.textContent = "$" + e.target.value;
    displayProducts(data.filter((producto) => producto.precio <= e.target.value));
  });
}

const txtSearch = document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
  if (value) {
    displayProducts(data.filter((producto) => producto.name.toLowerCase().indexOf(value) !== -1));
  } else {
    displayProducts(data);
  }
});

displayProducts(data);
setCategories();
setPrices();

const botones = document.querySelectorAll(".shop-item-button");
for (const boton of botones) {
  boton.addEventListener("click", () => {
    const id = boton.parentElement.parentElement.querySelector(".nombre").textContent;
    const pezacarro = data.find((producto) => producto.nombre === id);

    agregaralcarro(pezacarro);
  });
}

const removeButtons = document.querySelectorAll(".remove-item");
for (const removeButton of removeButtons) {
  removeButton.addEventListener("click", (e) => {
    const row = e.target.parentElement.parentElement;
    const productName = row.querySelector("td:nth-child(2)").textContent;

    const index = carrito.findIndex((producto) => producto.nombre === productName);

    if (index !== -1) {
      carrito.splice(index, 1); 
      actualizarTabla(); 
    }
  });
}


const carrito = [];
const totalElement = document.getElementById("total");
totalElement.innerText = "Total: $0";
const tablaCuerpo = document.getElementById("tablacuerpo");

function agregaralcarro(producto) {
  carrito.push(producto);
  console.table(carrito);
  alert(`Agregaste ${producto.nombre} al carro`);

  actualizarTabla();
}

function actualizarTabla() {
  const totalPrecio = carrito.reduce((total, item) => total + item.precio, 0);
  totalElement.innerText = `Total a Pagar $${totalPrecio}`;

  tablaCuerpo.innerHTML = ""; // Borra la tabla actual

  for (const producto of carrito) {
    tablaCuerpo.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><button class="btn btn-danger remove-item">Quitar</button></td>
      </tr>
    `;
  }
}


const agregarButtons = document.querySelectorAll(".agregar-button");


agregarButtons.forEach((button) => {
  button.addEventListener("click", () => {

    let Ventas = localStorage.getItem("Ventas") || 0;


    Ventas++;


    localStorage.setItem("Ventas", Ventas);
  });
});

function vaciarTabla() {
  carrito.length = 0; 
  actualizarTabla(); 
}

const vaciarButton = document.getElementById("vaciar-button");

if (vaciarButton) {
  vaciarButton.addEventListener("click", () => {
    vaciarTabla();
  });
}

const VentasClear = document.getElementById("VentasClear");

if (VentasClear) {
  VentasClear.addEventListener("click", () => {

    let Ventas = localStorage.getItem("Ventas") || 0;

    if (Ventas > 0) {
      vaciarTabla();
    } else {

      Ventas++;

      localStorage.setItem("Ventas", Ventas);

    }
  });
}



