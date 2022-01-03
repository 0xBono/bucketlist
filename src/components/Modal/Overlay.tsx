import { CSSProperties } from 'react';

interface OverlayProps {
  onOverylayClick: () => void;
}

export const Overlay = ({ onOverylayClick }: OverlayProps) => {
  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1,
  };
  return <div style={overlayStyle} onClick={onOverylayClick} />;
};
