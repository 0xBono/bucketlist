import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

interface HeaderProps {
  centered?: boolean;
}

export const Header = ({ centered }: HeaderProps) => {
  return (
    <header className={cx('header', { center: centered })}>
      <img className={cx('logo')} src="/bucketry-white-emblem.svg" alt="" />
    </header>
  );
};
