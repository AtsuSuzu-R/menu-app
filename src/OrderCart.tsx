type MenuItem = {
  code: string;
  name: string;
  priceWithoutTax: number;
  priceWithTax: number;
};

export default function OrderCart(menu: MenuItem | null) {
  if (!menu) return;
  console.log("追加されたメニュー:", menu);
  // ここでカートに追加する処理を書く
}
