document.addEventListener('DOMContentLoaded', () => {
    const feedback = document.getElementById('feedback');
    const enableBtn = document.getElementById('enable');
    const disableBtn = document.getElementById('disable');
    let Premium = false;

    function updateStatus(statusVal) {
        if (statusVal) {
            feedback.textContent = '✨ Premium Enabled';
            feedback.classList.add('show');
        } else {
            feedback.textContent = '🛑 Premium Disabled';
            feedback.classList.add('show');
        }
    }

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

    if (enableBtn) {
        enableBtn.addEventListener('click', (e) => {
            createRipple(e, enableBtn);
            chrome.runtime.sendMessage({action: "patch_isPrem"})
            updateStatus(true);
            setTimeout(() => feedback.classList.remove('show'), 2000);
        });
    }

    if (disableBtn) {
        disableBtn.addEventListener('click', (e) => {
            createRipple(e, disableBtn);
            chrome.runtime.sendMessage({action: "patch_disablePrem"})
            updateStatus(false);
            setTimeout(() => feedback.classList.remove('show'), 2000);
        });
    }
});
