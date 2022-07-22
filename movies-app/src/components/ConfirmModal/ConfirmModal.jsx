import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { I18N } from '../../core/i18n';
import { LocaleContext } from '../../core/i18n/locale';
import { ReactPortal } from '../ReactPortal';
import CloseIcon from '../../core/constants/close-icon.svg';
import './ConfirmModal.scss';

export const ConfirmModal = ({ header, question, closeModal }) => {
  const locale = useContext(LocaleContext);
  return (
    <ReactPortal>
      <div className="confirm-modal">
        <div className="modal-close">
          <button className="modal-close__button" type="button" onClick={() => closeModal(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal-body">
          <h2 className="modal-header">{header}</h2>
          <p>{question}</p>
          <div className="button-wrapper">
            <button className="confirm-button" type="button" onClick={() => closeModal(false)}>
              {I18N[locale].CONFIRM}
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

ConfirmModal.propTypes = {
  header: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
