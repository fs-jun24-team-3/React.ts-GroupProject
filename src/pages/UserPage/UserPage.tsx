import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './UserPage.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useNavigate } from 'react-router-dom';

type FormData = {
  name: string;
  surname: string;
  phone: string;
  post: string;
  city: string;
};

export const UserPage: React.FC = () => {
  const navigate = useNavigate(); // Отримуємо функцію navigate

  useEffect(() => {
    //   const user = localStorage.getItem('userData');

    //   console.log(user);
    const user = localStorage.getItem('userData');

    if (user) {
      navigate('/order'); // Виконуємо переадресацію
    }
  }, [navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
    alert('Data saved successfully!');
    reset();
  };

  // console.log(user);

  return (
    <div className={styles.user}>
      <Breadcrumbs />
      <div className={styles.user__title}>User page</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={styles.user__list}>
          <li className={styles.user__input}>
            <div className={styles.user__input__title}>Name</div>
            <input
              className={styles.user__input__text}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <div className={styles.error}>{errors.name.message}</div>
            )}
          </li>

          <li className={styles.user__input}>
            <div className={styles.user__input__title}>Surname</div>
            <input
              className={styles.user__input__text}
              {...register('surname', { required: 'Surname is required' })}
            />
            {errors.surname && (
              <div className={styles.error}>{errors.surname.message}</div>
            )}
          </li>

          <li className={styles.user__input}>
            <div className={styles.user__input__title}>Phone</div>
            <input
              className={styles.user__input__text}
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Phone must contain only digits',
                },
              })}
            />
            {errors.phone && (
              <div className={styles.error}>{errors.phone.message}</div>
            )}
          </li>

          <li className={styles.user__input}>
            <div className={styles.user__input__title}>Post</div>
            <input
              className={styles.user__input__text}
              {...register('post', { required: 'Post is required' })}
            />
            {errors.post && (
              <div className={styles.error}>{errors.post.message}</div>
            )}
          </li>

          <li className={styles.user__input}>
            <div className={styles.user__input__title}>City</div>
            <input
              className={styles.user__input__text}
              {...register('city', { required: 'City is required' })}
            />
            {errors.city && (
              <div className={styles.error}>{errors.city.message}</div>
            )}
          </li>

          <div className={styles.user__button}>
            <button type="submit" className={styles.wide_button}>
              Save
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
};
