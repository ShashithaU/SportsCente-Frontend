import { useState, useEffect } from "react";
import style from "./CartPage.module.css";
import Cart from "../Cart/Cart";
import CartItem from "../CartItems/CartItem";
import jsonData from '../../../../resource/cartItems/items.json';

const CartPage = () => {

    const [chechedItems, setChechedItems] = useState<number[]>([]); 
    const [price, setPrice] = useState<number>(0);
    const [Shipping, setShipping] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [cartData, setCartData] = useState<any[]>([]);

    useEffect(() => {
      const fetchCartData = async () => {
      try {
        // const response = await fetch('https://api.example.com/cartItems');
        // const data = await response.json();
        const data = jsonData;
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
      };

      fetchCartData();
    }, []);

    async function isClicked(id: number, check: boolean): Promise<void> {
      // console.log(id);
      // console.log(check);
      setChechedItems((prevCheckedItems) => {
        if (check) {
          return [...prevCheckedItems, id];
        } else {
          return prevCheckedItems.filter((item) => item !== id); 
        }
      });
    }

    useEffect(() => {
      var netPrice = 0;
      var netShipping = 0;
      var total = 0;
      chechedItems.map((item) => {
        cartData.map((data) => {
          if(data.id === item){
            netPrice += data.price;
            netShipping += data.shipping;
          }
        })
      });
      total = netPrice + netShipping;
      setPrice(netPrice);
      setShipping(netShipping);
      setTotal(total);
      //console.log(price);
    }, [chechedItems]);

    return (
        <div className={style.appContainer}>
              <Cart
                totalPrice = {price}
                totShipping = {Shipping}
                total = {total}
                checkedItemId = {chechedItems}>
    
                {cartData.map((item) =>
                <CartItem key={item.id}
                  id={item.id}
                  product = {item.product}
                  price = {item.price}
                  image = {item.image}
                  isClicked = {isClicked}
                />)}
            </Cart>
        </div>
    );
}

export default CartPage;