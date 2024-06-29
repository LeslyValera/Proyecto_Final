import Makeup from './data/makeup.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const makeup = Makeup.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{makeup.name}</h1>
        <hr></hr>
        <img 
                    src={makeup.picture} 
                    alt={makeup.name} 
                    className="product-image"
                    style={{
                        width: '150%',
                        maxWidth: '600px',
                        height: 'auto',
                        objectFit: 'cover',
                        float: 'left',
                        marginRight: '20px',
                        marginBottom: '10px'
                    }}
                />
                <p>{makeup.description}</p>
    </>);
}


export default Single;