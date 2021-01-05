const direction = document.getElementById('direction');
const contanier = document.getElementById('container');
const justify = document.getElementById('justify');

direction.addEventListener('change', function() {
    contanier.style.flexDirection = direction.value;
});

justify.addEventListener('change', function() {
    contanier.style.justifyContent = justify.value;
});