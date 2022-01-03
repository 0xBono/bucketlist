import { MutableRefObject, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  container: MutableRefObject<HTMLElement>;
  children: ReactNode;
}

export const Portal = ({ children, container }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  return mounted ? ReactDOM.createPortal(children, container.current) : null;
};
