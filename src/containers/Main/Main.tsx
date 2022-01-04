import { GNBLayout } from 'components/Layouts';
import { Carousel } from 'components/Carousel';

import classNames from 'classnames/bind';
import styles from './Main.module.scss';

import router from 'next/router';

const cx = classNames.bind(styles);

export const Main = () => {
  return (
    <GNBLayout centered>
      <div className={cx('wrap')}>
        <section className={cx('hero-section')}>
          <h2 className={cx('h2')}>매번 다짐만 했던 목표</h2>
          <h1 className={cx('h1')}>잊지 말고 이룰 수 있도록</h1>
        </section>
        <Carousel />
      </div>
      <footer className={cx('footer')}>
        <button
          className={cx('button')}
          onClick={() => router.push('bucket/create')}
        >
          목표를 위해 30초만 투자하기 ➡️
        </button>
      </footer>
    </GNBLayout>
  );
};
