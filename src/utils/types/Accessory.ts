import { DeviceDescription } from './DeviceDescription';
import { Product } from './Product';
import { ProductCategory } from './ProductCategory';
import { ProductColor } from './ProductColor';

export interface Accessory extends Product {
  id: string;
  category: ProductCategory.Accessory;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: ProductColor[];
  color: ProductColor;
  images: string[];
  description: DeviceDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
}
