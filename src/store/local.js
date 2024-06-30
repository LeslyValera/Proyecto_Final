export function getCarrito() {
    return JSON.parse(localStorage.getItem('carrito') ?? '[]');
}

export function setCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function addProductToCarrito(product) {
    const carrito = getCarrito();
    carrito.push(product);
    setCarrito(carrito);
}

export function removeProductFromCarrito(slug) {
    let carrito = getCarrito();
    carrito = carrito.filter(product => product.slug !== slug);
    setCarrito(carrito);
}

export function cleanCarrito() {
    localStorage.removeItem('carrito');
}