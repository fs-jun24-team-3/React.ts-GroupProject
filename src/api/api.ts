import { Accessory } from '../utils/types/Accessory';
import { Phone } from '../utils/types/Phone';
import { Product } from '../utils/types/Product';
import { Tablet } from '../utils/types/Tablet';

const BASE_URL =
  'https://raw.githubusercontent.com/mate-academy/react_phone-catalog/master/public';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullUrl = BASE_URL + url + '.json';

  return wait(300)
    .then(() => fetch(fullUrl))
    .then(res => res.json());
}

export const getPhones = () => get<Phone[]>('/api/phones');
export const getTablets = () => get<Tablet[]>('/api/tablets');
export const getProducts = () => get<Product[]>('/api/products');
export const getAccessories = () => get<Accessory[]>('/api/accessories');
