import { SortOption } from '../types/SortOption';
import { UnionProduct } from '../types/UnionProduct';

export function sortProducts(items: UnionProduct[], sortOption: SortOption) {
  let sorted = [...items];
  switch (sortOption) {
    case 'alphabetical':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case 'price_asc':
      return sorted.sort((a, b) => a.priceDiscount - b.priceDiscount);

    case 'price_desc':
      return sorted.sort((a, b) => b.priceDiscount - a.priceDiscount);

    case 'newest':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));

    default:
      return sorted;
  }
}
