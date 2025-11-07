import { type MenuItem } from "./menuData";

interface OrderHistoryProps {
  orderItems: MenuItem[];
}

export default function OrderHistory({ orderItems }: OrderHistoryProps) {
  return (
    <div>
      <h2>注文履歴</h2>
      {orderItems.length === 0 ? (
        <p>注文履歴がありません</p>
      ) : (
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.priceWithTax}円
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
