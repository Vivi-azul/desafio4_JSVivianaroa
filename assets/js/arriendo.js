const propiedadesArriendo = [
{
id: 1,
nombre: 'Casa en Condomio',
imagen: "./assets/img/casa_arriendo.jpg",
descripcion: 'Hermosa casa en condomio, buena ubicació  y locomoción',
ubicacion: 'San Miguel, casaA12',
habitaciones: 2,
costo: 410.000,
smoke: false,
pets: true,
},

{id: 2,
nombre: 'Casa antigua',
imagen: "./assets/img/casabuin.webp",
descripcion: 'Hermosa casa en condomio, buena ubicació  y locomoción',
ubicacion: 'Buin, Parcela 9',
habitaciones: 2,
costo: 380.000,
smoke: false,
pets: true,
},

{id: 3,
nombre: 'Departamento en arriendo',
imagen: "./assets/img/departamento_arriendo.jpg",
descripcion: 'Hermosa casa en condomio, buena ubicació  y locomoción',
ubicacion: 'San Miguel, casaA12',
habitaciones: 3,
costo: 410.000,
smoke: true,
pets: true
}

]

const lista = document.getElementById("lista-arriendo");
const detalle = document.getElementById("detalle-arriendo");

propiedadesArriendo.forEach(prop => {
    const div = document.createElement("div");
    
     detalle.innerHTML += `
  <h2>${prop.nombre}</h2>
  <img src="${prop.imagen}" alt="${prop.nombre}" width="300">
  <p><strong>Descripción:</strong> ${prop.descripcion}</p>
  <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
  <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
  <p><strong>Costo:</strong> $${prop.costo.toLocaleString()}</p>
  <button onclick="verDetalle(${prop.id})">Ver detalle</button>
  <hr>
`;
      lista.appendChild(div);
});


function verDetalleArriendo(id) {
    const prop = propiedadesArriendo.find((p) => p.id === id);

    if (prop.smoke) {
        alert("Se permite fumar.");
    } else {
        alert("No se permite fumar.");
    }

    if (prop.pets) {
        alert("Se permiten mascotas");
    } else {
        alert("No se permiten mascotas");
    }

}

