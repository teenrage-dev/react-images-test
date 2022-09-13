import css from './ImageItem.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchImageById } from 'redux/images/images-operation';

export const ImageItem = ({ img }) => {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(fetchImageById(img.id));
  };
  return (
    <NavLink
      to={`/images/${img.id}`}
      className={css.Link}
      onClick={handleCLick}
    >
      <div className={css.Item}>
        <div className={css.ImgContainer}>
          <img
            src={img.urls.small}
            alt={img.alt_description ? img.alt_description : 'photo'}
            className={css.Img}
          />
        </div>
        <div className={css.TextContainer}>
          <p className={css.Text}>
            {img.user.name ? img.user.name : 'Author Not Found'}
          </p>
          <p className={css.Text}>
            {img.description ? img.description : 'Title Not Found'}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
