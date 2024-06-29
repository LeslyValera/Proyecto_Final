import { useState } from 'react';
import Data from '../../data/adoptar.json';
import { getCarrito, setCarrito } from '../../store/local';
import './catalogo.css';

const Catalogo = () => {
    const [filteredData, setFilteredData] = useState(Data);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [toggleFilter, setTogglefilter] = useState(false);

    const handleClick = (e) => {
        const currentCarrito = getCarrito();
        setCarrito([...currentCarrito, e]);
    }

    const filterData = (e) => {
        setTogglefilter(!toggleFilter);
        if (!filtroCategoria) {
            setFilteredData(Data);
            return;
        }
        const filteredData = Data.filter(it => it.category === filtroCategoria)
        setFilteredData(filteredData);
    }

    return <>
        <div className="row">
            <div className={`col-lg-2 col-md-4 custom-behaviour ${toggleFilter ? 'closed' : ''} `}>
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                            Filtrar
                        </h5>
                        <hr></hr>

                        <h6>Categorías</h6>
                        <select defaultValue='' class="form-select" onChange={(e) => setFiltroCategoria(e.target.value)}>
                            {
                                [
                                    { label: 'Color de Gato', value: '' },
                                    { label: 'Plateado', value: 'plateado' },
                                    { label: 'Rubio', value: 'rubio' },
                                    { label: 'Siames', value: 'siames' },
                                    { label: 'Negro', value: 'negro' },
                                ].map((it, idx) => <option key={idx} value={it.value}>{it.label}</option>)
                            }
                        </select>

                        <div class="d-grid gap-2 mt-4">
                            <button onClick={(e) => filterData()} className="btn btn-dark text-white fw-bold">
                                Filtrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 col-md-8">
                <div className='row g-3'>
                    <div className='col-md-12 d-block d-sm-none'>
                        <div class="d-grid gap-2">
                            <button onClick={(e) => setTogglefilter(!toggleFilter)} className="btn btn-dark text-white fw-bold">
                                Filtrar
                            </button>
                        </div>
                    </div>
                    {filteredData.map(element => {
                        return <>
                            <div className='col-lg-3 col-md-6'>
                                <div class="card">
                                    <div className='img-holder'>
                                        <img height={180} src={element.picture} class="card-img-top" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{element.name}
                                            <span class="badge text-bg-light">
                                                {element.category}
                                            </span>
                                        </h5>
                                        <div class="d-grid gap-2">
                                            <button onClick={(e) => handleClick(element)} className="btn btn-warning text-white fw-bold">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                                <span className='ms-2'>
                                                    Adoptame
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>;
                    })}
                </div>
            </div>
        </div >
    </>;
};

export default Catalogo;