import { Button } from "@mui/material";
import { type MenuItem } from "./menuData";
import { useEffect, useState } from "react";

interface OrderCartProps {
  cartItems: MenuItem[];
  onAddToOrderHistory: (menus: MenuItem[]) => void; // Added this line
}

export default function OrderCart({ cartItems:initialcartItems, onAddToOrderHistory }: OrderCartProps) {
  const [cartItems,setCartItems] = useState<MenuItem[]>(initialcartItems);

  useEffect(()=>{
    setCartItems(initialcartItems);
  },[initialcartItems])
  const handleOrderSubmit= ()=>{
    onAddToOrderHistory(cartItems);
    setCartItems([]);
    // initialcartItems=[];
  }
  return (
    <div>
      <h2>注文かご</h2>
      {cartItems.length === 0 ? (
        <p>カートは空です</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.priceWithTax}円
            </li>
          ))}
        </ul>
      )}
      <h3>合計金額: {cartItems.reduce((total, item) => total + item.priceWithTax, 0)}円</h3>
      {cartItems.length > 0 && (
        <Button onClick={handleOrderSubmit}>注文を送信する</Button>
      )}
    </div>
  );
}
