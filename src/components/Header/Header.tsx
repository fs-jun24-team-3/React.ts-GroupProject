import React, { useEffect, useState } from 'react';
import { NavHeader } from './NavHeader';
import styles from './Header.module.scss';
import logo from '../../img/Logo.png';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useAppSelector } from '../../app/reduxHooks';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const Header: React.FC<Props> = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 640);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favCount } = useAppSelector(state => state.favorites);
  const { cartItems } = useAppSelector(state => state.cart);
  const productsCountInCart = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.count,
    0,
  );

  useEffect(() => {
    const handleMenuOnResize = () => {
      if (window.innerWidth > 639 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleMenuOnResize);
    return () => window.removeEventListener('resize', handleMenuOnResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleScreenSize);
    return () => window.removeEventListener('resize', handleScreenSize);
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__menu}>
          <NavLink to="/home" onClick={handleMenuOpen}>
            <img
              className={styles.header__logo}
              src={logo}
              alt="Nice Gadgets logo"
            />
          </NavLink>

          {!isMobileScreen && <NavHeader handleMenuOpen={handleMenuOpen} />}
        </div>
        <div className={styles.header__icons}>
          {!isMobileScreen && (
            <>
              <NavLink
                to="/favorites"
                onClick={handleMenuOpen}
                className={({ isActive }) =>
                  classNames([styles['header__icon--like']], {
                    [styles['header__icon--active']]: isActive,
                  })
                }
              >
                <div className={styles['header__icons--like']}>
                  <div
                    className={classNames(
                      styles['favProduct-and-product-count-container'],
                      {
                        [styles[
                          'favProduct-and-product-count-container--visible'
                        ]]: favCount > 0,
                      },
                    )}
                  >
                    <div className={styles['favProduct-and-product-count']}>
                      <p
                        className={
                          styles['favProduct-and-product-count__meaning']
                        }
                      >
                        {favCount}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/cart"
                onClick={handleMenuOpen}
                className={({ isActive }) =>
                  classNames([styles['header__icon--basket']], {
                    [styles['header__icon--active']]: isActive,
                  })
                }
              >
                <div className={styles['header__icons--basket']}>
                  <div
                    className={classNames(
                      styles['favProduct-and-product-count-container'],
                      {
                        [styles[
                          'favProduct-and-product-count-container--visible'
                        ]]: productsCountInCart > 0,
                      },
                    )}
                  >
                    <div className={styles['favProduct-and-product-count']}>
                      <p
                        className={
                          styles['favProduct-and-product-count__meaning']
                        }
                      >
                        {productsCountInCart}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </>
          )}

          {isMobileScreen && (
            <div
              className={
                isMenuOpen
                  ? styles['header__icon--close']
                  : styles['header__icon--menu']
              }
              onClick={handleMenuOpen}
            >
              <div
                className={
                  isMenuOpen
                    ? styles['header__icons--close']
                    : styles['header__icons--menu']
                }
              ></div>
            </div>
          )}
        </div>
      </header>

      {isMobileScreen && isMenuOpen && (
        <div className={styles['dropdown']}>
          <div className={styles['dropdown-content']}>
            <NavHeader handleMenuOpen={handleMenuOpen} />
          </div>
          <div className={styles['dropdown-icons']}>
            <NavLink
              to="/favorites"
              onClick={handleMenuOpen}
              className={({ isActive }) =>
                classNames([styles['dropdown__icon--like']], {
                  [styles['dropdown__icon--active']]: isActive,
                })
              }
            >
              <div className={styles['dropdown__icons--like']}>
                <div
                  className={classNames(
                    styles['favProduct-and-product-count-container'],
                    {
                      [styles[
                        'favProduct-and-product-count-container--visible'
                      ]]: favCount > 0,
                    },
                  )}
                >
                  <div className={styles['favProduct-and-product-count']}>
                    <p
                      className={
                        styles['favProduct-and-product-count__meaning']
                      }
                    >
                      {favCount}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              onClick={handleMenuOpen}
              className={({ isActive }) =>
                classNames([styles['dropdown__icon--basket']], {
                  [styles['dropdown__icon--active']]: isActive,
                })
              }
            >
              <div className={styles['dropdown__icons--basket']}>
                <div
                  className={classNames(
                    styles['favProduct-and-product-count-container'],
                    {
                      [styles[
                        'favProduct-and-product-count-container--visible'
                      ]]: productsCountInCart > 0,
                    },
                  )}
                >
                  <div className={styles['favProduct-and-product-count']}>
                    <p
                      className={
                        styles['favProduct-and-product-count__meaning']
                      }
                    >
                      {productsCountInCart}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
