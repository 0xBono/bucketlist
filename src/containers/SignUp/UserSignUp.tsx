import { GNBLayout } from 'components/Layouts';
import { Input } from 'components/Input';

import classNames from 'classnames/bind';
import styles from './UserSignUp.module.scss';

const cx = classNames.bind(styles);

export const UserSignUp = () => {
  return (
    <GNBLayout>
      <h1 className={cx('headline')}>
        앗-이런!
        <br />
        성함과 이메일을 해주세요.
      </h1>
      <div className={cx('input-group')}>
        <h3 className={cx('h3')}>성함을 입력해주세요.</h3>
        <Input type="text" placeholder="성함 (홍길동)" />
      </div>
      <div className={cx('input-group')}>
        <h3 className={cx('h3')}>이메일을 입력해주세요.</h3>
        <Input type="email" placeholder="이메일 (example@naver.com)" />
      </div>
      <footer className={cx('footer')}>
        <button className={cx('button')}>지금 당장 확인하러 가기 🏆</button>
      </footer>
    </GNBLayout>
  );
};
