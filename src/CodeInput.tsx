import "./CodeInput.css";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { findMenuByCode, type MenuItem } from "./menuData";
import OrderCart from "./OrderCart";

export default function CodeInput() {
  const [num, setNum] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>();
  const [open, setOpen] = useState(false);

  const handleNumberClick = (value: string) => {
    setNum((prev) => {
      const next = prev + value;
      return next.length <= 4 ? next : value; // 5桁目でリセットして新しい入力開始
    });
  };

  // 4桁入力されたらメニュー検索
  useEffect(() => {
    if (num.length === 4) {
      const menu = findMenuByCode(num);
      if (menu) {
        setSelectedMenu(menu);
        setOpen(true);
      }
    }
  }, [num]);

  const handleClose = () => {
    setOpen(false);
    setNum(""); // 次の入力に備えてクリア
  };

  return (
    <div className="menu-num">
      <TextField
        className="input"
        variant="outlined"
        fullWidth
        value={num}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "").slice(0, 4);
          setNum(value);
        }}
        placeholder="メニュー番号"
      />

      <div className="button-row">
        <button className="btn-num" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("3")}>
          3
        </button>
      </div>
      <div className="button-row">
        <button className="btn-num" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("6")}>
          6
        </button>
      </div>
      <div className="button-row">
        <button className="btn-num" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("9")}>
          9
        </button>
      </div>
      <div className="button-row button-row-last">
        <button className="btn-num" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="btn-num" onClick={() => setNum("")}>
          C
        </button>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>メニュー確認</DialogTitle>
        <DialogContent>
          {selectedMenu ? (
            <div>
              <Typography variant="h6" gutterBottom>
                {selectedMenu.name}
              </Typography>
              <Typography variant="body2">
                コード: {selectedMenu.code}
              </Typography>
              <Typography variant="body2">
                価格: {selectedMenu.priceWithoutTax}円（税込{" "}
                {selectedMenu.priceWithTax}円）
              </Typography>
            </div>
          ) : (
            <Typography color="error">
              該当するメニューが見つかりません。
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => OrderCart(selectedMenu)}
            variant="contained"
            color="primary"
          >
            追加
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
