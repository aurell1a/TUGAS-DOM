let total = 0;

function addExpense() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        total += amount;
        document.getElementById('total').textContent = total.toFixed(2);
        amountInput.value = '';
    } else {
        alert('Masukkan jumlah pengeluaran yang valid.');
    }
}
