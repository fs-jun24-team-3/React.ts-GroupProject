import { DeviceDescription } from './DeviceDescription';
import { ProductCategory } from './ProductCategory';
import { ProductColor } from './ProductColor';

export interface Accessory {
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
