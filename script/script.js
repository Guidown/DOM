let titulo = document.getElementById("titulo");
titulo.style.textAlign = "center";
titulo.style.margin = "30px";

let abajo = document.getElementById("abajo");
abajo.style.textAlign = "center";

let principal = document.getElementById("principal");
principal.style.margin = "30px";

// lista de productos

const productos = [
  { id: 1, nombre: "Samsung Galaxy S10", precio: 160000 },
  { id: 2, nombre: "Samsung Galaxy S20", precio: 200000 },
  { id: 3, nombre: "Samsung Galaxy S21", precio: 205000 },
  { id: 4, nombre: "Galaxy S22 Ultra", precio: 300000 },
  { id: 5, nombre: "Iphone 13", precio: 290000 },
  { id: 6, nombre: "Iphone 13 Mini", precio: 310000 },
  { id: 7, nombre: "Iphone 13 Pro", precio: 340000 },
  { id: 8, nombre: "Iphone 13 Pro Max", precio: 410000 },
  { id: 9, nombre: "Huawei P30 Lite", precio: 230000 },
  { id: 10, nombre: "Huawei P40 Pro", precio: 270000 },
  { id: 11, nombre: "Huawei Mate 30", precio: 210000 },
  { id: 12, nombre: "Huawei Mate 30 Pro", precio: 470000 },
];

// Cards

let cartas = document.getElementById("cartas");
for (const producto of productos) {
  let carta = document.createElement("div");
  carta.className = "card col-md-3";
  carta.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
  cartas.append(carta);
}
