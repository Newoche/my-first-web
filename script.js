// Capturamos todos los elementos del DOM necesarios
const form = document.getElementById('quote-form');
const serviceSelect = document.getElementById('service-type');
const unitsInput = document.getElementById('units');
const expressCheckbox = document.getElementById('express');
const resultBox = document.getElementById('result-box');
const totalPriceElement = document.getElementById('total-price');

// NUEVO: Capturamos el botón de limpiar (asegúrate de que su id en el HTML sea 'btn-clear')
const clearButton = document.getElementById('btn-clear');

// 1. Lógica para calcular la cotización
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const basePrice = parseFloat(serviceSelect.value);
    const units = parseInt(unitsInput.value);
    const isExpress = expressCheckbox.checked;

    if (isNaN(basePrice) || isNaN(units) || units <= 0) {
        alert('Por favor selecciona un servicio válido y una cantidad mayor a 0.');
        return;
    }

    let total = basePrice * units;

    if (isExpress) {
        total += 30;
    }

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
    resultBox.style.display = 'block';
});

// 2. NUEVO: Lógica para limpiar el formulario y reiniciar la vista
if (clearButton) {
    clearButton.addEventListener('click', function() {
        // Resetea los campos del formulario a sus valores iniciales
        form.reset();
        
        // Oculta la caja de resultados y la reinicia
        totalPriceElement.textContent = '$0.00';
        //resultBox.style.display = 'none';
    });
}