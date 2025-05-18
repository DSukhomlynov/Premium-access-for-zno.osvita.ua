// Инициализация премиум-функции
if (!window.isPrem) {
    window.isPrem = () => false;
}

function enablePremium() {
    console.log("enable premium");
    window.isPrem = () => true;
    updateStatus();
}

function disablePremium() {
    console.log("disable premium");
    window.isPrem = () => false;
    updateStatus();
}

function updateStatus() {
    const status = document.getElementById('status');
    if (window.isPrem()) {
        status.textContent = '✅ Premium включен';
    } else {
        status.textContent = '❌ Premium выключен';
    }
}
