const maximum = 123;
const minimun = 1;
const random = () => Math.floor(Math.random() * (maximum - minimun)) + minimun;

//crear Imagen
const createImage = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = 'mx-auto';
    image.width = '300';
    image.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);
    
    return container;
}

//agregandola
const nuevaImagen = createImage()
const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');
const addImage = () => {
    const newImage = createImage();
    mountNode.append(newImage);
};

addButton.addEventListener('click', addImage);




