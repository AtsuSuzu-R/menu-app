import { Button } from "@mui/material";
import { type MenuItem } from "./menuData";

interface OrderCartProps {
  cartItems: MenuItem[];
}

export default function OrderCart({ cartItems }: OrderCartProps) {
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
      { (cartItems.length > 0) && (
        <Button>注文を送信する</Button>
      )}
    </div>
  );
}
