import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.back}>
      <div className={styles['back__img']}></div>
      <div className={styles['back__name']} onClick={() => navigate(-1)}>
        Back
      </div>
    </div>
  );
};
