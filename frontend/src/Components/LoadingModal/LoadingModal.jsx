import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal/Modal';
import Spinner from '../common/Spinner/Spinner';

function LoadingModal(props) {
  const { isLoading } = props;

  return (
    <Modal visible={isLoading}>
      <Spinner />
    </Modal>
  );
}

LoadingModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingModal;
