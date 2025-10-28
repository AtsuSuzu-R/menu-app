import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./MenuIndex.css";

export default function MenuIndex() {
  return (
    <div className="menu-grid">
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            ミラノ風ドリア
          </Typography>
          <Typography variant="body1">2101</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            273円（税込 300円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            ミラノ風ドリア
          </Typography>
          <Typography variant="body1">2101</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            273円（税込 300円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            ミラノ風ドリア
          </Typography>
          <Typography variant="body1">2101</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            273円（税込 300円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            ミラノ風ドリア
          </Typography>
          <Typography variant="body1">2101</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            273円（税込 300円）
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
