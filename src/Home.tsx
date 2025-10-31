import { useState } from "react";
import CodeInput from "./CodeInput";
import "./Home.css";
import OrderCart from "./OrderCart";
import OrderHistory from "./OrderHistory";
import { type MenuItem } from "./menuData";
import MenuIndex from "./Menu.Index";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "input" | "cart" | "history" | "menu"
  >("input");
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  const addToCart = (menu: MenuItem) => {
    setCartItems((prev) => [...prev, menu]);
  };

  return (
    <div className="home-container">
      <main className="main-content">
        {activeTab === "input" && <CodeInput onAddToCart={addToCart} />}
        {activeTab === "cart" && <OrderCart cartItems={cartItems} />}
        {activeTab === "history" && <OrderHistory />}
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
          className={`tab-button ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          <span>🍝</span>
          <span>メニュー一覧</span>
        </button>
      </footer>
    </div>
  );
}
