import { useState } from "react";
import CodeInput from "./CodeInput";
import "./Home.css";
import MenuIndex from "./Menu.Index";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "input" | "cart" | "history" | "menu"
  >("input");

  return (
    <div className="home-container">
      <main className="main-content">
        {activeTab === "input" && (
          <div>
            <h2>注文入力</h2>
            <CodeInput />
          </div>
        )}

        {activeTab === "cart" && (
          <div>
            <h2>注文かご</h2>
            <p>注文したメニューがここに表示されます</p>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2>注文履歴</h2>
            <p>過去の注文履歴がここに表示されます</p>
          </div>
        )}
        {activeTab === "menu" && (
          <div>
            <h2>メニュー番号一覧</h2>
            <MenuIndex />
          </div>
        )}
      </main>

      <footer className="tab-footer">
        <button
          className={`tab-button ${activeTab === "input" ? "active" : ""}`}
          onClick={() => setActiveTab("input")}
        >
          <span>🔢</span>
          <span>注文入力</span>
        </button>
        <button
          className={`tab-button ${activeTab === "cart" ? "active" : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          <span>🛒</span>
          <span>注文かご</span>
        </button>
        <button
          className={`tab-button ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <span>📋</span>
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
