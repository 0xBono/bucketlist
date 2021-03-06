import { createContext, Fragment, useEffect, useRef } from 'react';
import { ModalWrap } from 'components/Modal';
import { useModalState } from 'hooks';
import { DefaultModalType } from 'common/extends';

import JSConfetti from 'js-confetti';

import classNames from 'classnames/bind';
import styles from './VoteModal.module.scss';

const cx = classNames.bind(styles);

interface VoteModalProps extends DefaultModalType {
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
      emojis: ['π', 'π₯°', 'β€οΈ', 'β', 'π'],
      emojiSize: 150,
      confettiNumber: 30,
    });
    onAgree!();
  };

  const disagreeConfetti = () => {
    confettiRef.current?.addConfetti({
      emojis: ['π‘', 'π«', 'β', 'π€―', 'π€'],
      emojiSize: 150,
      confettiNumber: 30,
    });
    onDisagree!();
  };

  return (
    <Fragment>
      {isOpen && (
        <ModalWrap onOverlayClick={onClose}>
          <div className={cx('vote-modal')}>
            <h1 className={cx('headline')}>
              3κ°μ§ λͺ©νλ₯Ό
              <br />μ μ§νν  μ μμκΉμ?
            </h1>
            <div className={cx('button-group')}>
              <button className={cx('button')} onClick={agreeConfetti}>
                λΉκ·Όμ΄μ£  π
              </button>
              <button className={cx('disagree')} onClick={disagreeConfetti}>
                λΆκ°λ₯ν΄μ π€―
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
