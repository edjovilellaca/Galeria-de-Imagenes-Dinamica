const principal = document.getElementById('principal');
const miniaturas = document.querySelectorAll('.miniatura');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        const tempo = principal.src;
        principal.src = this.src;
        this.src = tempo;
    });
});