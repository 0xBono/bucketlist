import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const Header = () => {
  return (
    <header className={cx('header')}>
      <img className={cx('logo')} src="bucketry-white-emblem.svg" alt="" />
    </header>
  );
};
