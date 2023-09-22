let carrito =[];
const peces = [{
  id: 1,
  imagen:"https://cdn0.bioenciclopedia.com/es/posts/1/7/1/pez_payaso_171_orig.jpg",
  nombre:"pez payaso",
  precio:150
  },
  {
  id: 2,
  imagen:"https://i.pinimg.com/originals/9c/3e/ca/9c3eca13f3e80ed68140a001771bdc35.jpg",
  nombre:"Tortuga",
  precio:200  
  },
  {
  id: 3,
  imagen:"https://c1.staticflickr.com/1/299/18972544510_4f433b72a2_z.jpg",
  nombre:"Pulpo",
  precio:450  
  },
  {
  id: 4,
  imagen:"https://cdn.eldestapeweb.com/eldestape/052021/1622244399331.webp?cw=312&ch=175&extw=jpg",
  nombre:"Calamar",
  precio:480  
  },
  {
  id: 5,
  imagen:"https://media.istockphoto.com/id/638309968/photo/underwater-cute-salt-water-porcupine-balloonfish-fish-smiling.jpg?s=612x612&w=0&k=20&c=hNFzM3eRHHx-P1I8lZCx6ABPphFmzlCQXgujBUyZZ3A=",
  nombre:"Pez Globo",
  precio:500  
  },
  {
  id: 6,
  imagen:"https://i.redd.it/t3kma9ki25q71.jpg",
  nombre:"Ajolote",
  precio:550  
  },
  {
    id: 8,
    imagen:"https://www.nationalgeographic.com.es/medio/2021/08/05/2-nutria-marina_015d6f8e_1280x849.jpg",
    nombre:"Nutria Marina",
    precio:670  
    },
  {
    id:9,
    imagen:"https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/peces/caballito-de-mar/Caballito-de-mar-Animales-Faunia-main.jpg",
    nombre:"Caballo de Mar,x2",
    precio:700
  },
  {
    id:10,
    imagen:"https://e00-marca.uecdn.es/blogs/bajo-el-mar/imagenes_posts/2016/06/24/170608_570x302.jpg",
    nombre:"Pez cirujano azul,x4",
    precio:720
  },
  {
    id:11,
    imagen:"https://www.aquariumbcn.com/wp-content/uploads/2022/08/Synanceia-verrucosa.jpg",
    nombre:"Pez Roca",
    precio:1000
  }

];

let CardArt = document.getElementById("card");
CardArt.classList.add("gap-3");
CardArt.classList.add("m-2");



function muchachones(peces){
  for (const pez of peces){
    CardArt.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${pez.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pez.nombre}</h5>
            <p class="card-text">$ ${pez.precio} pesos</p>
              <button id= ${pez.id} class="btn btn-primary compra">Comprar</a>
        </div>
    </div>
  `
  }
  let botones = document.getElementsByClassName("compra");
  for(const boton of botones){
    
    boton.addEventListener("click", ()=>{
      console.log("agregaste al carrito "+boton.id);
      const pezacarro = peces.find((pez)=>pez.id == boton.id);
      console.log(pezacarro);

      agregaralcarro(pezacarro);
    })
  }

}

muchachones(peces);

let totalElement = document.getElementById("total");
totalElement.innerText = "Total: $0";

function agregaralcarro(pez){
  carrito.push(pez);
  console.table(carrito);
  alert(`Agregaste ${pez.nombre} al carro`);

  const totalPrecio = carrito.reduce((total, item) => total + item.precio, 0);
  totalElement.innerText = `Total: $${totalPrecio}`;

  tablacuerpo.innerHTML += `
  <tr>
    <td>${pez.id}</td>
    <td>${pez.nombre}</td>
    <td>${pez.precio}</td>
  </tr>
  `;
}


