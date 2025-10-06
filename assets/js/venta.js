const propiedadesVenta = [
{
id: 4,
nombre: 'Casa en Condomio',
imagen: "./assets/img/casacondomio_1.webp",
descripcion: 'Hermosa casa en condomio, excelente ubicación, cerca de Hospital, Farmacias',
ubicacion: 'Las Condes, casaB10',
habitaciones: 2,
costo: 45000000,
smoke: false,
pets: false,
},

{id: 5,
nombre: 'Departamento Pequeño',
imagen: "./assets/img/departamentopequeno.png",
descripcion: 'Hermoso departamento, cercano a Supermercado y metro',
ubicacion: 'Puente Alto, Avenida Gabriela 633',
habitaciones: 2,
costo: 30000000,
smoke: true,
pets: false,
},

{id: 6,
nombre: 'Hermoso Departamento',
imagen: "./assets/img/departamento_1.png",
descripcion: 'Departamento en venta, 1 habitación, 1 baño, buena ubicación  y locomoción',
ubicacion: 'San Joaquin, Avenida Los Palotes 1252',
habitaciones: 1,
costo: 34000000,
smoke: false,
pets: true
}
]

const lista = document.getElementById("lista-venta");
const detalle = document.getElementById("detalle-venta");

propiedadesVenta.forEach(prop => {
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

function verDetalle(id) {
    const prop = propiedadesVenta.find((p) => p.id === id);

    if (prop.smoke) {
        alert(" se permite fumar.");
    } else {
        alert(" No se permite fumar.")
    }

    if (prop.pets) {
        alert(" Se permiten mascotas.");
    } else {
        alert("No se permiten mascotas");
    }

  ;
}