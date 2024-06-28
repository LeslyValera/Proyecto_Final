import React, { useEffect } from 'react';
import { useState } from 'react';
import Data from '../../data/adoptar.json';
import { getCarrito, setCarrito } from '../../store/local';
import './catalogo.css';
import { useParams } from 'react-router-dom';

const Catalogo = () => {
    const { categoria } = useParams();
    const [filteredData, setFilteredData] = useState(Data);
    const [filtroCategoria, setFiltroCategoria] = useState(categoria || '');
    const [filtroTamano, setFiltroTamano] = useState('');
    const [toggleFilter, setTogglefilter] = useState(false);

    useEffect(() => {
        if (categoria) {
            setFiltroCategoria(categoria);
            filterData();
        }
    }, [categoria]);

    const handleClick = (e) => {
        const currentCarrito = getCarrito();
        setCarrito([...currentCarrito, e]);
    }

    const filterData = () => {
        setTogglefilter(!toggleFilter);

        if (!filtroCategoria && !filtroTamano) {
            return setFilteredData(Data);
        }

        if (filtroCategoria && filtroTamano) {
            const filteredData = Data.filter(it => it.category === filtroCategoria && it.tamano === filtroTamano);
            setFilteredData(filteredData);
            return;
        }

        if (!filtroTamano) {
            const filteredData = Data.filter(it => it.category === filtroCategoria);
            setFilteredData(filteredData);
            return;
        } else {
            const filteredData = Data.filter(it => it.tamano === filtroTamano);
            setFilteredData(filteredData);
            return;
        }
    }

    return (
        <>
            <div className="row">
                <div className={`col-lg-2 col-md-4 custom-behaviour ${toggleFilter ? 'closed' : ''} `}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="feather feather-filter">
                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                </svg>
                                Filtrar
                            </h5>
                            <hr></hr>
                            <h6>Categorías</h6>
                            <select defaultValue='' className="form-select" onChange={(e) => setFiltroCategoria(e.target.value)}>
                                {
                                    [
                                        { label: 'Todas las categorías', value: '' },
                                        { label: 'Ojos', value: 'Ojos' },
                                        { label: 'Labios', value: 'Labios' },
                                        { label: 'Rostro', value: 'Rostro' },
                                        { label: 'Cejas', value: 'Cejas' },
                                        { label: 'Negro', value: 'negro' },
                                    ].map((it, idx) => <option key={idx} value={it.value}>{it.label}</option>)
                                }
                            </select>

                            <h6 className='mt-2'>Tamaños</h6>
                            <select defaultValue='' className="form-select" onChange={(e) => setFiltroTamano(e.target.value)}>
                                {
                                    [
                                        { label: 'Gato Grande', value: 'grande' },
                                        { label: 'Gato Pequeño', value: 'pequeño' },
                                        { label: 'Mediano', value: 'mediano' },
                                    ].map((it, idx) => <option key={idx} value={it.value}>{it.label}</option>)
                                }
                            </select>

                            <div className="d-grid gap-2 mt-4">
                                <button onClick={filterData} className="btn btn-dark text-white fw-bold">
                                    Filtrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-md-8">
                    <div className='row g-3'>
                        <div className='col-md-12 d-block d-sm-none'>
                            <div className="d-grid gap-2">
                                <button onClick={() => setTogglefilter(!toggleFilter)} className="btn btn-dark text-white fw-bold">
                                    Filtrar
                                </button>
                            </div>
                        </div>
                        {filteredData.map(element => (
                            <div className='col-lg-3 col-md-6' key={element.slug}>
                                <div className="card">
                                    <div className='img-holder'>
                                        <img height={180} src={element.picture} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{element.name}
                                            <span className="badge text-bg-light">
                                                {element.category}
                                            </span>
                                        </h5>
                                        <div className="d-grid gap-2">
                                            <button onClick={() => handleClick(element)} className="btn btn-warning text-white fw-bold">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="feather feather-smile">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                </svg>
                                                <span className='ms-2'>
                                                    Adoptame
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Catalogo;
