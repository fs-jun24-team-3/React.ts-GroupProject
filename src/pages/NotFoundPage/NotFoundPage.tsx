import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  document.title = 'Page not found';

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404 - Page not found</h2>
        <p className="not-found__description">
          Sorry, the page you are looking for does not exist. To return to home
          page, click{` `}
          <Link to="/" className="not-found__link">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
