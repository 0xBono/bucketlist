import { createContext, Fragment, useEffect, useRef } from 'react';
import { ModalWrap } from 'components/Modal';
import { useModalState } from 'hooks';

import JSConfetti from 'js-confetti';

import classNames from 'classnames/bind';
import styles from './VoteModal.module.scss';

const cx = classNames.bind(styles);

interface VoteModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onAgree?: () => void;
  onDisagree?: () => void;
}

const VoteModalContext = createContext({});

export const VoteModal = ({
  isOpen,
  onClose,
  onAgree,
  onDisagree,
}: VoteModalProps) => {
  const confettiRef = useRef<JSConfetti>(null);

  useEffect(() => {
    (confettiRef.current as JSConfetti) = new JSConfetti();
  }, []);

  const agreeConfetti = () => {
    confettiRef.current?.addConfetti({
      emojis: ['😘', '🥰', '❤️', '✅', '🎉'],
      emojiSize: 150,
      confettiNumber: 30,
    });
    onAgree();
  };

  const disagreeConfetti = () => {
    confettiRef.current?.addConfetti({
      emojis: ['😡', '🚫', '❌', '🤯', '🤔'],
      emojiSize: 150,
      confettiNumber: 30,
    });
    onDisagree();
  };

  return (
    <Fragment>
      {isOpen && (
        <ModalWrap onOverlayClick={onClose}>
          <div className={cx('vote-modal')}>
            <h1 className={cx('headline')}>
              3가지 목표를
              <br />잘 진행할 수 있을까요?
            </h1>
            <div className={cx('button-group')}>
              <button className={cx('button')} onClick={agreeConfetti}>
                당근이죠 😘
              </button>
              <button className={cx('disagree')} onClick={disagreeConfetti}>
                불가능해요 🤯
              </button>
            </div>
          </div>
        </ModalWrap>
      )}
    </Fragment>
  );
};

const VoteModalProvider = () => {
  const { modalState, handleOpen, handleClose } = useModalState();

  return (
    <VoteModalContext.Provider value={{ handleOpen, handleClose }}>
      <VoteModal isOpen={modalState} onClose={handleClose} />
    </VoteModalContext.Provider>
  );
};

export { VoteModalProvider };
