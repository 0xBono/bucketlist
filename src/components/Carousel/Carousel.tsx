import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

const Carousel = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('standard-inner')}>
        {Array.from(Array(6)).map((_, i) => (
          <img
            key={i}
            className={cx('carousel-img')}
            src="/card-collection.svg"
            alt="logo"
          />
        ))}
      </div>
      <div className={cx('reversed-inner')}>
        {Array.from(Array(6)).map((_, i) => (
          <img
            key={i}
            className={cx('carousel-img')}
            src="/card-collection.svg"
            alt="logo"
          />
        ))}
      </div>
      <div className={cx('standard-inner')}>
        {Array.from(Array(6)).map((_, i) => (
          <img
            key={i}
            className={cx('carousel-img')}
            src="/card-collection.svg"
            alt="logo"
          />
        ))}
      </div>
      <div className={cx('reversed-inner')}>
        {Array.from(Array(6)).map((_, i) => (
          <img
            key={i}
            className={cx('carousel-img')}
            src="/card-collection-reversed.svg"
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Carousel);
