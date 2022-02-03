const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la panatalla
}

const accion = (allElements) => {
    const nodo = allElements.target;
    console.log('Hola');
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((allElements) => {
    allElements
        .filter(isIntersecting)
        .forEach(accion)
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
}