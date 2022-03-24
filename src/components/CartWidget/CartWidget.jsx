import CartIcon from '../../assets/img/icon-shopping-cart.png'
import './CartWidget.css'

function CartWidget() {
    return (
        <>
            <img className='cartWidget' src={CartIcon} alt="icono de carrito" />
        </>
    )
}

export default CartWidget