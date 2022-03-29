import './NavBar.css'


function NavBar({children}) {
    return (
        <div className='nav-container'>
            <h1>Nombre Tienda</h1>
            <nav className='nav'>
                <ul className='barra-nav'>
                    <li className='nav-text'><a href="#top">Home</a></li>
                    <li className='nav-text'><a href="#nosotros">Nosotros</a></li>
                    <li className='nav-text'><a href="#Productos">Productos</a></li>
                    <li className='nav-text'><a href="#contacto">Contacto</a></li>
                    <li>{children}</li> 
                </ul>
            </nav>
            
        </div>    
    )
}
 
export default NavBar