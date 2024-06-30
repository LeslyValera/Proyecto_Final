import React, { useState, useEffect } from "react";
import { getCarrito, removeProductFromCarrito } from "../../store/local";

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);

    setTimeout(() => {
        setCarrito(getCarrito())
    }, 0);

    useEffect(() => {
        setCarrito(getCarrito());
    }, []);

    const handleRemoveFromCarrito = (slug) => {
        removeProductFromCarrito(slug);
        setCarrito(getCarrito()); // Actualiza el estado del carrito
    };

    return (
        <>
            <h1>Bienvenido a carrito</h1>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                carrito.map((element) => (
                    <div className="card mb-3" key={element.slug}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={element.picture} className="img-fluid rounded-start" alt={element.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <h5 className="card-title">{element.tamano}</h5>
                                    <h5 className="card-title">{element.category}</h5>
                                    <h5 className="card-title">{element.description}</h5>
                                    <button onClick={() => handleRemoveFromCarrito(element.slug)} className="btn btn-danger">
                                        Eliminar del carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default Carrito;