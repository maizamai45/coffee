const home = document.querySelector('.home-section');
home.classList.add('active');

document.addEventListener('DOMContentLoaded', function() {
    const allFilter = document.querySelector('.filter[data-filter="all"]');
    const allShopItems = document.querySelectorAll('.shop1');

    allFilter.addEventListener('click', function() {
        allShopItems.forEach(function(item) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        });
    });

    const machinesCoffeeFilter = document.querySelector('.filter[data-filter=".Machines Coffee"]');
    const machinesShopItems = document.querySelectorAll('.shop1.mix.machines');

    machinesCoffeeFilter.addEventListener('click', function() {
        allShopItems.forEach(function(item) {
            item.style.display = 'none';
        });

        machinesShopItems.forEach(function(item) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        });
    });

    const CoffeeFilter = document.querySelector('.filter[data-filter=".Coffee"]');
    const CoffeeShopItems = document.querySelectorAll('.shop1.mix.coffee');

    CoffeeFilter.addEventListener('click', function() {
        allShopItems.forEach(function(item) {
            item.style.display = 'none';
        });

        CoffeeShopItems.forEach(function(item) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        });
    });

    const CakeFilter = document.querySelector('.filter[data-filter=".Cakes"]');
    const CakeShopItems = document.querySelectorAll('.shop1.mix.cake');

    CakeFilter.addEventListener('click', function() {
        allShopItems.forEach(function(item) {
            item.style.display = 'none';
        });

        CakeShopItems.forEach(function(item) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        });
    });
});







