import { Tablet } from '../utils/types/Tablet';

const BASE_URL =
  'https://raw.githubusercontent.com/mate-academy/react_phone-catalog/f064fa3751d4adbc9a531a51805d593af585860b/public/';

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

// Replace [] with according type
export const getPhones = () => get<[]>('/api/phones');
export const getTablets = () => get<Tablet[]>('/api/tablets');
export const getProducts = () => get<[]>('/api/products');
export const getAccessories = () => get<[]>('/api/accessories');
