
const btn = document.getElementById('btn-confirmar');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const progressFill = document.getElementById('progress-fill');
const steps = document.querySelectorAll('.step');

let currentStep = 0;

function updateProgress() {
  if (currentStep < steps.length) {
    steps[currentStep].classList.add('active');
    if (currentStep === steps.length - 1) {
      steps[currentStep].classList.add('error');
      progressFill.style.width = '100%';
    } else {
      progressFill.style.width = ((currentStep + 1) / steps.length) * 100 + '%';
    }
    currentStep++;
  }
}

function confirmarFrete() {
  overlay.style.display = 'block';
  popup.style.display = 'flex';
}

function finalizarPagamento() {
  window.location.href = 'https://pay.brutusburguers.site/nWrxGWA28XW3654';
}

setTimeout(updateProgress, 500);
setTimeout(updateProgress, 1200);
setTimeout(updateProgress, 1900);
setTimeout(updateProgress, 2500);

document.addEventListener('DOMContentLoaded', () => {
  btn.removeAttribute('disabled');
});
