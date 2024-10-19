// Obtener los elementos del DOM
const transactionForm = document.getElementById('transaction-form');
const totalGastos = document.getElementById('total-gastos');
const totalPagos = document.getElementById('total-pagos');
const totalSaldo = document.getElementById('saldo');
const cleanTotal = document.getElementById('clean-total');

let gastos = 0;  
let pagos = 0;

transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const tipo = document.getElementById('type').value;
    const monto = parseFloat(document.getElementById('amount').value);
    const montoString = document.getElementById('amount').value;

    if (montoString.trim() === "" || isNaN(monto) || monto <= 0) {
        alert("Por favor ingrese un monto válido.");  
        return; 
    }

    if (tipo === 'gasto') {  
        gastos += monto;
    } else if (tipo === 'pago') {
        pagos += monto;
    }

    // Llamo a la función para mostar el total
    MostrarTotal(); 

    transactionForm.reset();  
});

// Función para hacer el calculo
function MostrarTotal() {
    totalGastos.textContent = `$${gastos.toFixed(2)}`;
    totalPagos.textContent = `$${pagos.toFixed(2)}`;
    totalSaldo.textContent = `$${(pagos - gastos).toFixed(2)}`;
}

cleanTotal.addEventListener('click', function() {
   
    gastos = 0;
    pagos = 0;

    MostrarTotal();
});