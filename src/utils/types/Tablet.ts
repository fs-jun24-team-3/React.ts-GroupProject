import { DeviceDescription } from './DeviceDescription';
import { Product } from './Product';
import { ProductCategory } from './ProductCategory';

export interface Tablet extends Product {
  id: string;
  category: ProductCategory.Tablet;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DeviceDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
