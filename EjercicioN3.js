// Crea un programa en Node.js que permita calcular el costo total de una compra. El
// programa debe: Solicitar al usuario el precio unitario de un producto (puede ser
// decimal), solicitar la cantidad de productos comprados (entero). Calcular el costo
// total multiplicando el precio unitario por la cantida
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout
});

rl.question("Ingrese el precio unitario del producto: ", (preciounitario) => {
    rl.question("Ingrese la cantidad de productos comprados: ", (cantidad) => {
        const precio = parseFloat(preciounitario);
        const cantidadProductos = parseInt(cantidad, 10);

        if (isNaN(precio) || isNaN(cantidadProductos)) {
            console.log("Por favor, ingrese valores válidos.");
            rl.close();
            return;
        }

        const costoTotal = precio * cantidadProductos;
        console.log(`El costo total de la compra es: $${costoTotal.toFixed(2)}`);
        rl.close();
    });
});