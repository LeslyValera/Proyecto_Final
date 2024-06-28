import Makeup from './data/makeup.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const makeup = Makeup.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{makeup.name}</h1>
        <hr></hr>
        <img src={makeup.picture}></img>
        <p>{makeup.description}</p>
    </>);
}


export default Single;