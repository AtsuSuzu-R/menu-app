import { useState } from "react";
import CodeInput from "./CodeInput";
import "./Home.css";
import OrderCart from "./OrderCart";
import OrderHistory from "./OrderHistory";
import { type MenuItem } from "./menuData";
import MenuIndex from "./Menu.Index";


type TabType = "input" | "cart" | "history" | "menu";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("input");
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [orderItems, setOrderItems] = useState<MenuItem[]>([]);

  const addToCart = (menu: MenuItem): void => {
    setCartItems((prev: MenuItem[]) => [...prev, menu]);
  };
  const addToOrderHistory = (menus: MenuItem[]): void => {
    setOrderItems((prev: MenuItem[]) => [...prev, ...menus]);
  };

  return (
    <div className="home-container">
      <main className="main-content">
        {activeTab === "input" && <CodeInput onAddToCart={addToCart} />}
        {activeTab === "cart" && <OrderCart cartItems={cartItems} onAddToOrderHistory={addToOrderHistory} />}
        {activeTab === "history" && <OrderHistory orderItems={orderItems} />}
        {activeTab === "menu" && <MenuIndex />}
      </main>

      <footer className="tab-footer">
        <button
          className={`tab-button ${activeTab === "input" ? "active" : ""}`}
          onClick={() => setActiveTab("input")}
        >
          <span className="tabicon">🔢</span>
          <span>注文入力</span>
        </button>
        <button
          className={`tab-button ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          <span className="tab-icon">🛒</span>
          <span>注文かご</span>
        </button>
        <button
          className={`tab-button ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <span className="tab-icon">📋</span>
          <span>注文履歴</span>
        </button>
        <button
          className={`tab-button ${activeTab === "menu" ? "active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          <span>🍝</span>
          <span>メニュー一覧</span>
        </button>
      </footer>
    </div>
  );
}
