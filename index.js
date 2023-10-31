var saldo = 1000;
var clave = "1234";

while (true) {
    var opcion = prompt("Elija una opción:\n1. Ver Saldo\n2. Realizar Extracción\n3. Realizar Transferencia\n4. Cambiar Clave\n5. Salir");

    switch (opcion) {
        case "1":
            verSaldo();
            break;
        case "2":
            hacerExtraccion();
            break;
        case "3":
            hacerTransferencia();
            break;
        case "4":
            cambiarClave();
            break;
        case "5":
            alert("Gracias por utilizar nuestro cajero. Hasta luego.");
            exit(0);
        default:
            alert("Opción no válida. Por favor, elija una opción válida.");
    }
}


function hacerExtraccion() {
    var monto = parseFloat(prompt("Ingrese el monto a extraer:"));
    if (monto > 0 && monto <= saldo) {
        saldo -= monto;
        alert("Se ha extraído $" + monto + ". Saldo restante: $" + saldo);
      } else {
        alert("Monto inválido o saldo insuficiente.");
      }
}


function verSaldo() {
    alert("Saldo actual: $" + saldo);
}

function hacerTransferencia() {
    var monto = parseFloat(prompt("Ingrese el monto a transferir:"));
    if (monto > 0 && monto <= saldo) {
        var cuentaDestino = prompt("Ingrese el número de cuenta de destino:");
        alert("Se ha transferido $" + monto + " a la cuenta " + cuentaDestino);
        saldo -= monto;
    } else {
        alert("Monto inválido o saldo insuficiente.");
    }
}

function cambiarClave() {
    var nuevaClave = prompt("Ingrese su nueva clave:");
    clave = nuevaClave;
    alert("Clave actualizada correctamente.");
}
