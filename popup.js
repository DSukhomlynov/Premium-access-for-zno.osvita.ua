const feedback = document.getElementById('feedback');

function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.classList.add('ripple');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.offsetX - radius}px`;
    circle.style.top = `${event.offsetY - radius}px`;
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
}

document.getElementById('enable').addEventListener('click', function (e) {
    createRipple(e, this);
    enablePremium();
    feedback.textContent = '✨ Premium Enabled';
    feedback.classList.add('show');
    console.log("true");
    setTimeout(() => feedback.classList.remove('show'), 2000);
});

document.getElementById('disable').addEventListener('click', function (e) {
    createRipple(e, this);
    disablePremium();
    feedback.textContent = '🛑 Premium Disabled';
    feedback.classList.add('show');
    console.log("false");
    setTimeout(() => feedback.classList.remove('show'), 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    updateStatus();
});
