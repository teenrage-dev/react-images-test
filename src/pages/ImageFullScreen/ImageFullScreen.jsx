import css from './ImageFullScreen.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchImageById } from 'redux/images/images-operation';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchImageById } from 'redux/images/images-operation';

export const ImageFullScreen = () => {
  const images = useSelector(({ images }) => images);
  const { imageId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImageById(imageId));
  }, [dispatch, imageId]);

  return (
    <div className={css.ImageFullScreen}>
      <button type="button" className={css.BackBtn}>
        <NavLink to="/" className={css.Link}>
          Go Home
        </NavLink>
      </button>
      <Outlet />
      {images?.error?.request.status === 404 && (
        <div className={css.Error}>404 Not Founded</div>
      )}
      {images.items.length === 0 ? null : (
        <div className={css.Container}>
          <img
            src={images.items.urls?.full}
            alt={
              images.items?.alt_description
                ? images.items?.alt_description
                : 'Photo'
            }
            className={css.Img}
          />
        </div>
      )}
    </div>
  );
};
