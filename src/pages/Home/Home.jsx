import { ImageItem } from 'components/ImageItem/ImageItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from 'redux/images/images-operation';
import css from './Home.module.css';

export const Home = () => {
  const images = useSelector(({ images }) => images);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className={css.Home}>
      <div className={css.Container}>
        <div className={css.List}>
          {images.items.length &&
            images?.items?.map(img => <ImageItem img={img} key={img.id} />)}
        </div>
      </div>
    </div>
  );
};
