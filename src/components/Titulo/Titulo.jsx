import './Titulo.css';

function Titulo({tituloProps, subTituloProps}) {
    return (
        <div className='titulo'>
            <h1>{tituloProps}</h1>
            <h2>{subTituloProps}</h2>
        </div>
    )
}

export default Titulo