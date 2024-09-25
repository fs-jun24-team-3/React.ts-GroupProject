import React, { useEffect, useMemo, useState } from 'react';
import styles from './Catalog.module.scss';
import { PhoneCard } from '../Main/PhoneCard';
import { UnionProduct } from '../../utils/types/UnionProduct';
import { ItemsPerPageOption, SortOption } from '../../utils/types/SortOption';
import { Dropdown } from '../Dropdown';
import { ItemsPerPageDropdown } from '../ItemsPerPageDropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { sortProducts } from '../../utils/helpers/sortProducts';
import { Breadcrumbs } from '../Breadcrumbs';

type Props = {
  items: UnionProduct[];
  title: string;
  isFiltered: boolean;
};

export const Catalog: React.FC<Props> = ({ items, title, isFiltered }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<SortOption>('alphabetical');
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPageOption>(16);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredItems = useMemo(() => {
    let filtered = sortProducts(items, sortOption);
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return filtered;
  }, [items, sortOption, searchQuery]);

  const paginatedItems = useMemo(() => {
    let filtered = filteredItems;
    if (searchQuery.trim() !== '') {
      filtered = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (itemsPerPage === 'all') {
      return filtered;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filtered.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredItems, currentPage, itemsPerPage, searchQuery]);

  const totalPages =
    itemsPerPage === 'all' ? 1 : Math.ceil(filteredItems.length / itemsPerPage);

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

  const updateURL = (
    sort: SortOption,
    perPage: ItemsPerPageOption,
    searchQuery: string,
  ) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('sort', sort);

    if (perPage === 16) {
      searchParams.delete('perPage');
    } else {
      searchParams.set('perPage', perPage.toString());
    }

    if (searchQuery.trim() !== '') {
      searchParams.set('q', searchQuery);
    } else {
      searchParams.delete('q');
    }

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  const handleSort = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1);
    updateURL(option, itemsPerPage, searchQuery);
  };

  const handleItemsPerPageChange = (option: ItemsPerPageOption) => {
    setItemsPerPage(option);
    setCurrentPage(1);
    updateURL(sortOption, option, searchQuery);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    updateURL(sortOption, itemsPerPage, query);
  };

  const generatePageNumbers = (currentPage: number, totalPages: number) => {
    const delta = 2;
    const range: number[] = [];

    range.push(1);

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (totalPages > 1) {
      range.push(totalPages);
    }

    let result: (number | '...')[] = [];
    let lastPage = 0;

    for (let i of range) {
      if (i - lastPage > 1) {
        result.push('...');
      }
      result.push(i);
      lastPage = i;
    }

    return result;
  };

  return (
    <>
      <div className={styles.phones}>
        <Breadcrumbs />
        <div className={styles.phones__title}>{title}</div>
        <div className={styles.phones__countModel}>
          {filteredItems.length}{' '}
          {filteredItems.length === 1 ? 'model' : 'models'}
        </div>
        {isFiltered && (
          <div className={styles.filtration}>
            <div className={styles.phonesDropdown}>
              <Dropdown
                handleSort={handleSort}
                initialSortOption={sortOption}
              />
              <ItemsPerPageDropdown
                onSelect={handleItemsPerPageChange}
                initialOption={itemsPerPage}
              />
            </div>
            <SearchBar onSearch={handleSearch} />
          </div>
        )}

        {paginatedItems.length === 0 && isFiltered && (
          <div className={styles.noResults}>
            <h2>No results found</h2>
            <p>Try searching for something else.</p>
          </div>
        )}

        {paginatedItems.length > 0 && (
          <div className={styles.phones__items}>
            {paginatedItems.map((item: UnionProduct) => (
              <div className={styles.phones__item} key={item.id}>
                <PhoneCard item={item} />
              </div>
            ))}
          </div>
        )}

        {paginatedItems.length > 0 && itemsPerPage !== 'all' && (
          <div className={styles.phones__pagination}>
            <button
              className={styles.phones__pagination__arr}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <div className={styles.phones__pagination__arrLeft}></div>
            </button>

            <div className={styles.phones__pagination__buttons}>
              {generatePageNumbers(currentPage, totalPages).map(
                (page, index) =>
                  page === '...' ? (
                    <span
                      key={index}
                      className={styles.phones__pagination__ellipsis}
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => paginate(page as number)}
                      className={
                        currentPage !== page
                          ? styles.phones__pagination__button
                          : styles.phones__pagination__button_current
                      }
                    >
                      {page}
                    </button>
                  ),
              )}
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
