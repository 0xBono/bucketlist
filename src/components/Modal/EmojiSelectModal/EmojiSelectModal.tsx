import { createContext, Fragment, useCallback, useState } from 'react';
import { ModalWrap } from 'components/Modal';
import { Input } from 'components/Input';
import { useModalState } from 'hooks';
import { DefaultModalType } from 'common/extends';
import { useRecoilState } from 'recoil';

import Emoji from './json/emoji.json';

import classNames from 'classnames/bind';
import styles from './EmojiSelectModal.module.scss';
import { createBucket } from 'recoil/atom';

const cx = classNames.bind(styles);

interface EmojiSelectModalProps extends DefaultModalType {
  currentId?: number;
}

const EmojiSelectModalContext = createContext({});

/**
 * @todo 의존성이 생겨버렸기 때문에 추후 리팩토링을 진행해야 함.
 */
export const EmojiSelectModal = ({
  isOpen,
  onClose,
  currentId,
}: EmojiSelectModalProps) => {
  const [search, setSearch] = useState('');
  const [_, setCreateBucket] = useRecoilState(createBucket);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  }, []);

  const handleEmoji = async (emoji: string) => {
    Promise.all([
      setCreateBucket((bucket) => {
        const newBucket = bucket.map((bucket) => {
          if (bucket.id === currentId) {
            return {
              ...bucket,
              emoticon: emoji,
            };
          }
          return bucket;
        });
        return newBucket;
      }),
      onClose(),
    ]);
  };

  return (
    <Fragment>
      {isOpen && (
        <ModalWrap onOverlayClick={onClose}>
          <div className={cx('emoji-modal')}>
            <div className={cx('headline-wrapper')}>
              <span className={cx('headline')}>
                목표와 걸맞는
                <br />
                이모지를 선택해주세요!
              </span>
              <img
                src="/xmark-icon.svg"
                alt="x-mark"
                onClick={() => onClose()}
              />
            </div>
            <Input
              type="text"
              placeholder="e.g. Smile"
              onChange={handleSearch}
              className={cx('input')}
            />
            <div className={cx('emoji-list')}>
              {Emoji.map(
                (emoji, key) =>
                  emoji.aliases.filter((alias) =>
                    alias.match(new RegExp(search, 'gi')),
                  ).length > 0 && (
                    <span key={key} onClick={() => handleEmoji(emoji.emoji)}>
                      {emoji.emoji}
                    </span>
                  ),
              )}
            </div>
          </div>
        </ModalWrap>
      )}
    </Fragment>
  );
};

const EmojiSelectModalProvider = () => {
  const { modalState, handleOpen, handleClose } = useModalState();

  return (
    <EmojiSelectModalContext.Provider value={{ handleOpen, handleClose }}>
      <EmojiSelectModal isOpen={modalState} onClose={handleClose} />
    </EmojiSelectModalContext.Provider>
  );
};

export { EmojiSelectModalProvider };
