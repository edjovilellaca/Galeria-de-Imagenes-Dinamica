const principal = document.getElementById('principal');
const miniaturas = document.querySelectorAll('.miniatura');

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        const tempo = principal.src;
        principal.src = this.src;
        this.src = tempo;

        principal.style.objectFit = 'cover';
        principal.style.width = '600px';
        principal.style.height = '400px';
    });
});