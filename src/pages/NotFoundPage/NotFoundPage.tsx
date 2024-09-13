import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h2 className="not-found-page__title">404 - Page not found</h2>
      <p className="not-found-page__description">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-page__back-home">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
