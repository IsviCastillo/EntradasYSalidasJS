// 2. Solicita una cantidad en kilómetros (decimal), convierte a millas, sabiendo que 1km
// = 0.621371mi. Muestra el resultado con dos decimales. 
import readline from 'readline'; 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Ingrese una cantidad en kilómetros: ", (kilómetros) => {
    const km = parseFloat(kilómetros);
    const millas = km * 0.621371;
    console.log(`${km} kilómetros son ${millas.toFixed(2)} millas`);
    rl.close();
});
