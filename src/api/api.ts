import { Accessory } from '../utils/types/Accessory';
import { Phone } from '../utils/types/Phone';
import { Product } from '../utils/types/Product';
import { Tablet } from '../utils/types/Tablet';

export const BASE_URL =
  'https://raw.githubusercontent.com/mate-academy/react_phone-catalog/master/public/';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string, useJSON: boolean = true): Promise<T> {
  const fullUrl = BASE_URL + url + (useJSON ? '.json' : '');

  return wait(300)
    .then(() => fetch(fullUrl))
    .then(res => res.json());
}

export const getPhones = () => get<Phone[]>('api/phones');
export const getTablets = () => get<Tablet[]>('api/tablets');
export const getProducts = () => get<Product[]>('api/products');
export const getAccessories = () => get<Accessory[]>('api/accessories');
export const getGood = (goodsType: string, phoneId: string) => {
  switch (goodsType) {
    case 'iphone':
      return getPhones().then(phones => {
        return phones.find(phones => phones.id === phoneId);
      });
    case 'ipad':
      return getTablets().then(tablet => {
        return tablet.find(tablet => tablet.id === phoneId);
      });
    case 'watch':
      return getAccessories().then(accessory => {
        return accessory.find(accessory => accessory.id === phoneId);
      });
  }
};
