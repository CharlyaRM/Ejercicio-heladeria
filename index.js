// Variables globales precios de los helados
const hChocolate = 5000
const hFresa = 4000
const hCereza = 3000
const hChicle = 2000
const hBombom = 1000

// Alerta tipo de helado 
let helado = prompt(`¿Que helado quieres?
Chocolate
Fresa
Cereza
Chicle
Bombom`);

// Alerta cantidad en pesos con que paga el usuario
let dinero = prompt(`¿Con cuanto pagas?`);

// Operaciones para obtener las vueltas del usuario
resultado = dinero - hChocolate;
resultado1 = dinero - hFresa;
resultado2 = dinero - hCereza;
resultado3 = dinero - hChicle;
resultado4 = dinero - hBombom;

// Condicional y salida del sistema
if (helado == "Chocolate" || helado == "chocolate") {
    document.write(`
        <center>
            <p>
                Haz comprado un helado de chocolate
                <br>
                Tus vueltas son $${resultado}
            </p>
        </center>
    `);
}

else if (helado == "Fresa" || helado == "fresa") {
    document.write(`
        <center>
            <p>
                Haz comprado un helado de fresa
                <br>
                Tus vueltas son $${resultado1}
            </p>
        </center>
    `);
}

else if (helado == "Cereza" || helado == "cereza") {
    document.write(`
        <center>
            <p>
                Haz comprado un helado de cereza
                <br>
                Tus vueltas son $${resultado2}
            </p>
        </center>
    `);
}

else if (helado == "Chicle" || helado == "chicle") {
    document.write(`
        <center>
            <p>
                Haz comprado un helado de chicle
                <br>
                Tus vueltas son $${resultado3}
            </p>
        </center>
    `);
}

else if (helado == "Bombom" || helado == "bombom") {
    document.write(`
        <center>
            <p>
                Haz comprado un helado de bombom
                <br>
                Tus vueltas son $${resultado4}
            </p>
        </center>
    `);
}

else {
    document.write(`
        <center>
            <p>
                !!! No haza ingresado un dato correcto.
            </p>
        </center>   
    `)
}








