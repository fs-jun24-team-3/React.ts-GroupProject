import { getAccessories, getPhones, getTablets } from '../../api/api';

export const chooseProductAPI = (pathname: string) => {
  switch (true) {
    case pathname.includes('/phones/'):
      return getPhones;
    case pathname.includes('/tablets/'):
      return getTablets;
    case pathname.includes('/accessories/'):
      return getAccessories;
    default:
      return getPhones;
  }
};
