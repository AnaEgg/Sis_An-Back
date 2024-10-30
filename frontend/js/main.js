document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    
    // Manejar el envío del formulario
    const addProductForm = document.getElementById('add-product-form');
    addProductForm.addEventListener('submit', addProduct);
});

function fetchProducts() {
    fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            const productsList = document.getElementById('productos-list');
            productsList.innerHTML = data.map(product => `
                <div>
                    <h3>${product.Nom_Product}</h3>
                    <p>Tipo: ${product.Tipo}</p>
                    <p>Cantidad: ${product.Cantidad}</p>
                    <p>Precio por Mayor: ${product.Precio_Mayor}</p>
                    <p>Precio por Menor: ${product.Precio_Menor}</p>
                    <p>Stock: ${product.Stock}</p>
                    <p>Perecible: ${product.Perecible}</p>
                    <p>Unidad de Medida: ${product.Unidad_Medida}</p>
                </div>
            `).join('');
        });
}

// Función para agregar un producto
function addProduct(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional

    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const cantidad = document.getElementById('cantidad').value;
    const precioMayor = document.getElementById('precio-mayor').value;
    const precioMenor = document.getElementById('precio-menor').value;
    const stock = document.getElementById('stock').value;
    const perecible = document.getElementById('perecible').value;
    const unidadMedida = document.getElementById('unidad-medida').value;

    const nuevoProducto = {
        nombre,
        tipo,
        cantidad,
        precioMayor,
        precioMenor,
        stock,
        perecible,
        unidadMedida
    };

    fetch('/api/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto),
    })
    .then(response => {
        if (response.ok) {
            fetchProducts(); // Recargar la lista de productos
            addProductForm.reset(); // Limpiar el formulario
        } else {
            throw new Error('Error al agregar el producto');
        }
    })
    .catch(error => console.error(error));
}
