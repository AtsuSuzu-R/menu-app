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
            小エビのサラダ
          </Typography>
          <Typography variant="body1">1202</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            319円（税込 350円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>辛味チキン</Typography>
          <Typography variant="body1">1401</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            273円（税込 300円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            若鶏のディアボラ風
          </Typography>
          <Typography variant="body1">2402</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            455円（税込 500円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            セットドリンクバー
          </Typography>
          <Typography variant="body1">5101</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            182円（税込 200円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            たまねぎのズッパ
          </Typography>
          <Typography variant="body1">1307</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            273円（税込 300円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            タラコソースシシリー風
          </Typography>
          <Typography variant="body1">2301</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            364円（税込 400円）
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontSize: "20px" }}>
            ハンバーグステーキ
          </Typography>
          <Typography variant="body1">2406</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            364円（税込 400円）
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
