import { GNBLayout } from 'components/Layouts';
import { Card } from 'components/Card';
import { Callout } from 'components/Callout';
import { VoteModal } from 'components/Modal';
import { useModalState } from 'hooks';
import { useInfiniteQuery, useQuery } from 'react-query';

import classNames from 'classnames/bind';
import styles from './Users.module.scss';
import { Key } from 'react';
import { getBucket } from 'common/api/getBucket';

const cx = classNames.bind(styles);

export const Users = () => {
  const name = '손지민';

  const { modalState, handleOpen, handleClose } = useModalState();

  return (
    <GNBLayout>
      <section className={cx('info-section')}>
        <h1 className={cx('headline')}>
          홍길동님의 2022년
          <br />
          3가지 목표입니다!
        </h1>
      </section>
      {/* {data?.bucketlist?.map((item: any, key: Key) => (
        <Card key={key} emoji={item.emoji} title={item.title} />
      ))} */}
      <h3 className={cx('sub-headline')} onClick={() => handleOpen()}>
        긍정/부정 평가하기
      </h3>
      <VoteModal
        isOpen={modalState}
        onClose={handleClose}
        onAgree={() => {
          handleClose();
        }}
        onDisagree={() => {
          handleClose();
        }}
      />
      {/* <Callout
        title="목표를 위해 리마인드 드려요 📦"
        content="2022년 03월 01일에 입력해주신 메일로 목표와 여러가지 콘텐츠를 함께 보내드립니다. 리마인드를 통해서 목표를 잊지 않고 달성해보세요!"
      /> */}
      <footer className={cx('footer')}>
        <button className={cx('button')}>3가지 목표 입력하기 ➡️</button>
      </footer>
    </GNBLayout>
  );
};
