'use strict';

// SLIDE SHOW PRINCIPAL

const images = [
    { 'id': '1', 'url':'./img/promo1.png'},
    { 'id': '2', 'url':'./img/promo2.png'},
    { 'id': '3', 'url':'./img/promo3.png'},
    { 'id': '4', 'url':'./img/promo4.png'},
    { 'id': '5', 'url':'./img/promo5.png'},
    { 'id': '6', 'url':'./img/promo6.png'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' id="image">
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages( images, containerItems );

// NEXT E PREVIOUS

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

//SLIDE SHOW DESCONTOS
