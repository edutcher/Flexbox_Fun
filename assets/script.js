const direction = document.getElementById('direction');
const contanier = document.getElementById('container');

direction.addEventListener('change', function() {
    contanier.style.flexDirection = direction.value;
});