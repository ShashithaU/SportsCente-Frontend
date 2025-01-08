import style from './CartItem.module.css';

interface CartItemProps {
    id: string,
    product: string,
    price: number,
    image: string,
    isClicked: (id: string, checked: boolean) => void
}

const Cart = ({product="product", price = 0.0, image = 'https://via.placeholder.com/150', isClicked, id}: CartItemProps) => {

    // const {product, price, image, isClicked} = props;

    return(
        <div className={style.cartContainer}>
            <input type="checkbox" onChange={(e) => isClicked(id, e.target.checked)}/>
            
            <div className={style.productImag}>
                <img src={image} />
            </div>

            <div className={style.productName}>
                <p>{product}</p>
            </div>

            <div className={style.productPrice}>
                <p>{price}</p>
            </div>
        </div>
    );
}
export default Cart;