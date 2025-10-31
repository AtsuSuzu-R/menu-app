import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./MenuIndex.css";
import { menuData, type MenuItem } from "./menuData";

export default function MenuIndex() {
  return (
    <div className="menu-grid">
      {menuData.map((menu: MenuItem) => (
        <Card key={menu.code} sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
              {menu.name}
            </Typography>
            <Typography variant="body1">{menu.code}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {menu.priceWithoutTax}円（税込 {menu.priceWithTax}円）
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
