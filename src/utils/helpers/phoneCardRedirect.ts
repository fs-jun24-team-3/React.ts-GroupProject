import { NavigateFunction } from 'react-router-dom';
import { ProductCategory } from '../types/ProductCategory';

export function phoneCardRedirect(
  pathname: string,
  productCategory: string,
  productId: string,
  navigate: NavigateFunction,
) {
  let targetPath = '';

  if (pathname === '/') {
    targetPath = `/${productCategory}s/${productId}`;
  } else if (pathname.includes('apple')) {
    targetPath = `/${productCategory}s/${productId}`;
  } else if (
    pathname.includes(ProductCategory.Accessory.slice(0, -2)) ||
    pathname.includes(ProductCategory.Tablet) ||
    pathname.includes(ProductCategory.Phone)
  ) {
    targetPath = `${pathname}/${productId}`;
  }

  if (pathname !== targetPath) {
    navigate('/');
    setTimeout(() => {
      navigate(targetPath);
    }, 0);
  }
}
