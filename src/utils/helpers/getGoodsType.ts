export function getGoodsType(goodsId: string) {
  return goodsId.split('-')[1];
}
