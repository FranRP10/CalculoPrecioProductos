// Definición de la clase Producto
class Producto {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Creación de algunos productos
  const producto1 = new Producto("Split Blancheado");
  const producto2 = new Producto("50/60");
  const producto4 = new Producto("38/42 Crudo");
  const producto3 = new Producto("Vaina Cruda");
  const producto5 = new Producto("40/50 Crudo");
  const producto6 = new Producto("80/100 Crudo");
  const producto7 = new Producto("Split Crudo");
  const producto8 = new Producto("Split Fino p/moler");
  const producto9 = new Producto("Vaina Tostada");
  const producto10 = new Producto("38/42 tost");
  const producto11 = new Producto("38/42 Blanch");
  const producto12 = new Producto("Split Blancheado s/sal");
  const producto13 = new Producto("Split Blancheado c/sal");
  
  // Array que contiene los productos
  const listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13,];
  
  let totalCompra = 0; // Variable para almacenar el total de la compra
  

  // Referencia al elemento select
const selectProductos = document.getElementById('productos');

// Función para mostrar los productos en el select
listaProductos.forEach(producto => {
  const option = document.createElement('option');
  option.value = producto.nombre;
  option.textContent = producto.nombre;
  selectProductos.appendChild(option);
});


function agregarAlCarrito() {
  const selectProductos = document.getElementById('productos');
  const cantidadInput = document.getElementById('cantidad');
  const precioInput = document.getElementById('precio'); // Nuevo
  const seleccion = selectProductos.value;
  const cantidad = parseFloat(cantidadInput.value);
  const precio = parseFloat(precioInput.value); // Nuevo
  
  if (!seleccion || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0) { // Modificado
    alert('Por favor selecciona un producto, una cantidad válida y un precio válido');
    return;
  }

  const productoSeleccionado = listaProductos.find(producto => producto.nombre === seleccion);

  const precioTotal = precio * cantidad; // Modificado
  totalCompra += precioTotal;
  const carrito = document.getElementById('carrito');
  const nuevaOperacion = document.createElement('div');
  nuevaOperacion.setAttribute('data-precio', precioTotal.toFixed(2));
  nuevaOperacion.innerHTML = `${cantidad} kg de ${productoSeleccionado.nombre} - Precio: $${precio.toFixed(2)} - Total: $${precioTotal.toFixed(2)} <button onclick="eliminarOperacion(this)">Eliminar</button>`;
  carrito.appendChild(nuevaOperacion);
  mostrarTotalCompra();
}
  
  // Función para mostrar el total de la compra
  function mostrarTotalCompra() {
    const totalElemento = document.getElementById('total');
    const totalFormateado = totalCompra.toLocaleString(); // Formatear el total con separadores de miles
    totalElemento.textContent = `Total de la compra: $${totalFormateado}`;
  }
  
  // Función para eliminar una operación del carrito
function eliminarOperacion(btn) {
    const operacion = btn.parentNode;
    const precioOperacion = parseFloat(operacion.getAttribute('data-precio')); // Obtener el precio de la operación
    totalCompra -= precioOperacion; // Restar el precio de la operación al total de la compra
    operacion.remove();
    mostrarTotalCompra(); // Actualizar el total de la compra en la interfaz
  }
  