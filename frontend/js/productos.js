document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-producto');
    const productosList = document.getElementById('productos-list').getElementsByTagName('tbody')[0];

    // Función para obtener productos
    const getProductos = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/productos'); // Asegúrate de que el backend esté corriendo en este puerto
            const productos = await response.json();
            
            // Limpiar la tabla antes de llenarla/api/v1/productos
            productosList.innerHTML = '';

            // Insertar productos en la tabla
            productos.forEach(producto => {
                const row = productosList.insertRow();
                row.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.nom_producto}</td>
                    <td>${producto.tipo_producto}</td>
                    <td>${producto.cant_total}</td>
                    <td>${producto.precio_mayor}</td>
                    <td>${producto.precio_menor}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.perecible}</td>
                    <td>${producto.unid_medida}</td>
                    <td><button data-id="${producto.id}" class="delete-btn">Eliminar</button></td>
                `;
            });

            // Añadir eventos a los botones de eliminar
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const id = event.target.getAttribute('data-id');
                    await deleteProducto(id);
                    getProductos(); // Recargar productos después de eliminar
                });
            });

        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    // Función para eliminar un producto
    const deleteProducto = async (id) => {
        try {
            await fetch(`http://localhost:3000/api/v1/productos/${id}`, { method: 'DELETE' });
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    // Obtener productos al cargar la página
    getProductos();


    

});
