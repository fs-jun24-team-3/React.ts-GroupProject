import { Phone } from '../types/Phone';

export function sortByHighDiscounts(phones: Phone[]) {
  return [...phones].sort((p1, p2) => {
    return (
      p1.priceDiscount - p1.priceRegular - (p2.priceDiscount - p2.priceRegular)
    );
  });
}
