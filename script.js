'use strict';
    const openButton = document.querySelector('.openNav');
    const closeButton = document.querySelector('.closeNav')
    const menu = document.querySelector('.menu');
    const menuExpanded = document.querySelector('.menu-expanded');

    openButton.addEventListener('click', function() {
    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden')
    menu.classList.add('hidden');
    menuExpanded.classList.remove('hidden');
    document.querySelector('.nav').style.marginBottom = "0";
    });

    closeButton.addEventListener('click', function() {
        closeButton.classList.add('hidden');
        openButton.classList.remove('hidden')
        menu.classList.remove('hidden');
        menuExpanded.classList.add('hidden');
    });