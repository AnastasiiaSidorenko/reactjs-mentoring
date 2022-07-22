import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ReactPortal.scss';

export const ReactPortal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('modal');

  useEffect(() => {
    modalRoot.appendChild(wrapperElement);

    return () => {
      modalRoot.removeChild(wrapperElement);
    };
  }, [wrapperElement]);

  return createPortal(children, wrapperElement);
};
