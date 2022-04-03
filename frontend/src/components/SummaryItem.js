import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SummaryItem = ({ setModal, handleClose, result }) => {
  return (
    <>
      <Modal
        size="sm"
        show={setModal}
        onHide={handleClose}
        style={{
          fontFamily: 'Bree Serif',
          color: '#373737',
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '18px' }}>
            Your Task Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: '13px' }}>
          <p>
            Task: <i style={{ color: '#2f4f4f' }}>{result[0]}</i>
          </p>
          <p>
            Time Started:{' '}
            <i style={{ color: '#2f4f4f' }}>
              {result[4]
                .toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })
                .toLowerCase()}{' '}
            </i>
          </p>
          <p>
            Duration: <i style={{ color: '#2f4f4f' }}>{result[1]} minutes</i>
          </p>
          <p>
            Time Focused:{' '}
            <i style={{ color: '#2f4f4f' }}>{result[2]} seconds</i>
          </p>
          <p>
            Time Not Focused:{' '}
            <i style={{ color: '#2f4f4f' }}>{result[3]} seconds</i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ fontSize: '13px' }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SummaryItem;
