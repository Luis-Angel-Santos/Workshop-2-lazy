const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la panatalla
}

const loadImage = (allElements) => {
    const container = allElements.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar imagen
    imagen.src = url;

    observer.unobserve(container);
}

const observer = new IntersectionObserver((allElements) => {
    allElements
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
}