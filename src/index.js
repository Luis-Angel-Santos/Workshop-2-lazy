import { registerImage } from './lazy'

const maximum = 123;
const minimun = 1;
const random = () => Math.floor(Math.random() * (maximum - minimun)) + minimun;

//crear Imagen
const createImage = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = 'mx-auto rounded-md bg-gray-300';
    image.width = '300';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);
    
    return container;
}

//agregandola
const nuevaImagen = createImage()
const mountNode = document.getElementById('images');
const addButton = document.getElementById('agregar');

const addImage = () => {
    const newImage = createImage();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);

// Limpiar
const clean = document.getElementById('limpiar');
clean.addEventListener('click', () => {
  mountNode.innerHTML = '';
});