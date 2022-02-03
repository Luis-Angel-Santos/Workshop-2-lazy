let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => entry.isIntersecting;

const loadImage = (allElements) => {
    const container = allElements.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar imagen
    imagen.src = url;
    loadedImages += 1;
    showData();
    observer.unobserve(container);
}

const observer = new IntersectionObserver((allElements) => {
    allElements
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
    totalImages += 1;
    showData();
}

function showData(){
    console.log(`✔️ Total Imágenes: ${totalImages}`);
    console.log(`✔️ Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}