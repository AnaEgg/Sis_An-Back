document.getElementById('form-producto').addEventListener('submit', async (e) => {
    e.preventDefault();

    const perecibleInput = document.getElementById('perecible').value;
    const perecibleValue = perecibleInput.toLowerCase() === 'sí' ? 1 : 0; // Conversión a 1 o 0

    const producto = {
        nom_producto: document.getElementById('nom_producto').value,
        tipo_producto: document.getElementById('tipo_producto').value,
        cant_total: parseInt(document.getElementById('cant_total').value),
        precio_mayor: parseFloat(document.getElementById('precio_mayor').value),
        precio_menor: parseFloat(document.getElementById('precio_menor').value),
        stock: parseInt(document.getElementById('stock').value),
        perecible: perecibleValue, // Valor convertido a 1 o 0
        unid_medida: document.getElementById('unid_medida').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/v1/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error('Error al enviar el producto:', error);
    }
});
