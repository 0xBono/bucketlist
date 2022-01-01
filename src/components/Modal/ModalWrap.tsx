import { MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import { Portal } from './Portal';
import { Overlay } from './Overlay';

interface ModalWrapProps {
  children: ReactNode;
  onOverlayClick: () => void;
}

export const ModalWrap = ({ children, onOverlayClick }: ModalWrapProps) => {
  const isClient = typeof window === 'object';

  const portalRef = useRef(
    isClient ? document.getElementById('portal') : null,
  ) as MutableRefObject<HTMLElement>;

  useEffect(() => {
    function handleTouchMove(e: TouchEvent) {
      e.preventDefault();
    }
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    return () => window.removeEventListener('touchmove', handleTouchMove);
  }, []);

  return (
    <Portal container={portalRef}>
      {children}
      <Overlay onOverylayClick={onOverlayClick} />
    </Portal>
  );
};
