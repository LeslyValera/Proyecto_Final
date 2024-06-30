import { useState } from 'react';
import Data from '../../data/adoptar.json'
import './adoptar.css'
import { getCarrito, setCarrito } from '../../store/local';

const Adoptar = () => {
    let [initialData, setinitialData] = useState(Data.slice(0, 6));
    let [lastUpdate, setlastUpdate] = useState(6);

    const [loading, setLoading] = useState(true);
    const increment = 2;

    const loadMoreData = () => {
        const newData = Data.slice(lastUpdate, lastUpdate + increment);
        initialData = [...initialData, ...newData];
        lastUpdate = lastUpdate + increment;
        setlastUpdate(lastUpdate);
        setinitialData(initialData);
    }

    const handleScroll = (e) => {
        loadMoreData();
    }

    const handleClick = (e) => {
        const currentCarrito = getCarrito();
        setCarrito([...currentCarrito, e]);
    }

    window.addEventListener('scrollend', handleScroll, { passive: true });

    return (<>
        {loading || <p>Cargando...
            {alert('aca')}
        </p>}
        {!loading || <div id='adoptar-section' className='row g-0'>
            {initialData.map((element, idx) => {
                return <div className='col-md-6' key={idx}>
                    <div className="card">
                        <div className='img-holder'>
                            <img src={element.picture} className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.description}</p>
                            <button onClick={(e) => {
                                handleClick(element)
                            }} className="btn btn-primary">Añadir</button>
                        </div>
                    </div>
                </div>
            })}
        </div>}
    </>);
}

export default Adoptar;