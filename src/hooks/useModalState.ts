import { useCallback, useState } from 'react';

/**
 * @thx FrontLeejonghun
 */
export const useModalState = () => {
  const [modalState, setModalState] = useState(false);

  const handleOpen = useCallback(() => {
    setModalState(true);
  }, []);

  const handleClose = useCallback(() => {
    setModalState(false);
  }, []);

  return { modalState, handleOpen, handleClose };
};
