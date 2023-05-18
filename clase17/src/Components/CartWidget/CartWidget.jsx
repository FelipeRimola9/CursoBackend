import "./CartWidget.scss"

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <p className="badge badge-opacity">1</p>
        <img className="img-cart-widget" src="/src/assets/images/cartwidget.svg" alt="cartwidget" />
    </div>
  )
}

export default CartWidget