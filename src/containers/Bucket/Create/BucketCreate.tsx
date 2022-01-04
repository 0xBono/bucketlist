import { GNBLayout } from 'components/Layouts';

import classNames from 'classnames/bind';
import styles from './BucketCreate.module.scss';
import { Input } from 'components/Input';
import { EmojiSelectModal } from 'components/Modal/EmojiSelectModal';
import { useModalState } from 'hooks';
import { useRecoilState, useRecoilValue } from 'recoil';
import { createBucketSelector } from 'recoil/selector/createBucketSelector';
import { useCallback, useEffect, useState } from 'react';
import { createBucket } from 'recoil/atom';

const cx = classNames.bind(styles);

export const BucketCreate = () => {
  const [id, setId] = useState<number>();
  const { modalState, handleOpen, handleClose } = useModalState();

  const bucket = useRecoilValue(createBucketSelector);
  const [_, setCreateBucket] = useRecoilState(createBucket);

  function handleModalOpen(id: number) {
    setId(id);
    handleOpen();
  }

  useEffect(() => {
    console.log(bucket);
  }, [bucket]);

  const handleGoal = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateBucket((bucket) => {
      const newBucket = bucket.map((bucket) => {
        if (bucket.id === Number(e.target.id)) {
          return {
            ...bucket,
            goal: e.target.value,
          };
        }
        return bucket;
      });
      return newBucket;
    });
  }, []);

  return (
    <GNBLayout>
      {bucket.map((bucket, key) => {
        return (
          <div key={key} className={cx('input-wrapper')}>
            <h3 className={cx('h3')}>목표를 입력해주세요</h3>
            <div className={cx('input-group')}>
              <div
                className={cx('emoji-wrapper')}
                tabIndex={1}
                onClick={() => handleModalOpen(bucket.id)}
              >
                <span className={cx('emoji')}>{bucket.emoticon}</span>
              </div>
              <Input
                id={bucket.id.toString()}
                key={key}
                onChange={handleGoal}
                placeholder={bucket.placeholder}
              />
            </div>
          </div>
        );
      })}
      <EmojiSelectModal
        currentId={id}
        isOpen={modalState}
        onClose={handleClose}
      />
      <footer className={cx('footer')}>
        <button className={cx('button')}>목표 이루러 가기 🚖</button>
      </footer>
    </GNBLayout>
  );
};
