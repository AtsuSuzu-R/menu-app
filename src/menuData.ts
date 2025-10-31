export interface MenuItem {
  code: string; // 4桁コード
  name: string;
  priceWithoutTax: number; // 税抜
  priceWithTax: number; // 税込
}

export const menuData: MenuItem[] = [
  {
    code: "2101",
    name: "ミラノ風ドリア",
    priceWithoutTax: 273,
    priceWithTax: 300,
  },
  {
    code: "1202",
    name: "小エビのサラダ",
    priceWithoutTax: 319,
    priceWithTax: 350,
  },
  { code: "1401", name: "辛味チキン", priceWithoutTax: 273, priceWithTax: 300 },
  {
    code: "2402",
    name: "若鶏のディアボラ風",
    priceWithoutTax: 455,
    priceWithTax: 500,
  },
  {
    code: "5101",
    name: "セットドリンクバー",
    priceWithoutTax: 182,
    priceWithTax: 200,
  },
  {
    code: "1307",
    name: "たまねぎのズッパ",
    priceWithoutTax: 273,
    priceWithTax: 300,
  },
  {
    code: "2301",
    name: "タラコソースシシリー風",
    priceWithoutTax: 364,
    priceWithTax: 400,
  },
  {
    code: "2406",
    name: "ハンバーグステーキ",
    priceWithoutTax: 364,
    priceWithTax: 400,
  },
];

export function findMenuByCode(code: string): MenuItem | undefined {
  return menuData.find((m) => m.code === code);
}
