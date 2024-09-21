import { NavigateFunction } from 'react-router-dom';

export function phoneCardRedirect(
  pathname: string,
  productCategory: string,
  productId: string,
  navigate: NavigateFunction,
) {
  let targetPath = '';

  if (pathname === '/' || pathname.includes('apple')) {
    targetPath = `/${productCategory}s/${productId}`;
  } else {
    targetPath = `${pathname}/${productId}`;
  }

  if (pathname !== targetPath) {
    navigate('/');
    setTimeout(() => {
      navigate(targetPath);
    }, 0);
  }
}
