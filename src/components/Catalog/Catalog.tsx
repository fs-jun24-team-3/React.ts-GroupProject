import React, { useEffect, useMemo, useState } from 'react';
import styles from './Catalog.module.scss';
import { PhoneCard } from '../Main/PhoneCard';
import { UnionProduct } from '../../utils/types/UnionProduct';
import { ItemsPerPageOption, SortOption } from '../../utils/types/SortOption';
import { Dropdown } from '../Dropdown';
import { ItemsPerPageDropdown } from '../ItemsPerPageDropdown';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  items: UnionProduct[];
};

export const Catalog: React.FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<SortOption>('alphabetical');
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPageOption>(16);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sortParam = searchParams.get('sort') as SortOption | null;
    const perPageParam = searchParams.get(
      'perPage',
    ) as ItemsPerPageOption | null;

    if (
      sortParam &&
      ['alphabetical', 'price_asc', 'price_desc', 'newest'].includes(sortParam)
    ) {
      setSortOption(sortParam);
    }

    if (perPageParam) {
      if (perPageParam === 'all') {
        setItemsPerPage('all');
      } else {
        const numericPerPage = Number(perPageParam);
        if ([4, 8, 16].includes(numericPerPage)) {
          setItemsPerPage(numericPerPage as ItemsPerPageOption);
        }
      }
    }
  }, [location.search]);

  const sortedItems = useMemo(() => {
    let sorted = [...items];
    switch (sortOption) {
      case 'alphabetical':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'price_asc':
        return sorted.sort((a, b) => a.priceDiscount - b.priceDiscount);
      case 'price_desc':
        return sorted.sort((a, b) => b.priceDiscount - a.priceDiscount);
      case 'newest':
        return sorted.sort((a, b) => b.year - a.year);
      default:
        return sorted;
    }
  }, [items, sortOption]);

  const paginatedItems = useMemo(() => {
    if (itemsPerPage === 'all') {
      return sortedItems;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  }, [sortedItems, currentPage, itemsPerPage]);

  const totalPages =
    itemsPerPage === 'all' ? 1 : Math.ceil(sortedItems.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const updateURL = (sort: SortOption, perPage: ItemsPerPageOption) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('sort', sort);

    if (perPage === 8) {
      searchParams.delete('perPage');
    } else {
      searchParams.set('perPage', perPage.toString());
    }
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  const handleSort = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1);
    updateURL(option, itemsPerPage);
  };

  const handleItemsPerPageChange = (option: ItemsPerPageOption) => {
    setItemsPerPage(option);
    setCurrentPage(1);
    updateURL(sortOption, option);
  };

  return (
    <>
      <div className={styles.phones}>
        <div className={styles.phones__routs}>
          <div className={styles.phones__routs__home}></div>
          <div className={styles.phones__routs__array}></div>
          <div className={styles.phones__routs__currentPage}>Phones</div>
        </div>
        <div className={styles.phones__title}>Mobile phones</div>
        <div className={styles.phones__countModel}>{items.length} models</div>
        <div className={styles.phonesDropdown}>
          <Dropdown handleSort={handleSort} initialSortOption={sortOption} />
          <ItemsPerPageDropdown
            onSelect={handleItemsPerPageChange}
            initialOption={itemsPerPage}
          />
        </div>
        <div className={styles.phones__items}>
          {paginatedItems.map((item: UnionProduct) => (
            <div className={styles.phones__item} key={item.id}>
              <PhoneCard item={item} />
            </div>
          ))}
        </div>
        {itemsPerPage !== 'all' && (
          <div className={styles.phones__pagination}>
            <button
              className={styles.phones__pagination__arr}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <div className={styles.phones__pagination__arrLeft}></div>
            </button>
            <div className={styles.phones__pagination__buttons}>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={
                    currentPage !== index + 1
                      ? styles.phones__pagination__button
                      : styles.phones__pagination__button_current
                  }
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className={styles.phones__pagination__arr}
              disabled={currentPage === totalPages}
            >
              <div className={styles.phones__pagination__arrRight}></div>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
