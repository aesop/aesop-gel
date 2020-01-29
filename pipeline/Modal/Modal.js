import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/hooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/hooks/useOverflowHidden';
import ModalBody from './components/ModalBody';
import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import PROP_TYPES from './Modal.prop-types';
import styles from './Modal.module.css';

const Modal = ({ children, className, handleClose, isVisible }) => {
  useEscapeKeyListener(handleClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, className);
  const modalRootElement = document.querySelector('#modal');

  if (!modalRootElement) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <aside aria-hidden={!isVisible} className={classSet}>
          <Overlay handleClose={handleClose} isVisible={isVisible} />
          <Transition
            active={isVisible}
            mountOnEnter={true}
            type="zoom"
            unmountOnExit={true}
          >
            <div className={styles.inner}>
              <ModalBody
                copy={ModalBodyFixture.copy}
                handleClose={handleClose}
                isVisible={isVisible}
              >
                {children}
              </ModalBody>
            </div>
          </Transition>
        </aside>,
        modalRootElement,
      )}
    </>
  );
};

Modal.propTypes = PROP_TYPES;

export default Modal;