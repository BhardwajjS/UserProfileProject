import React from "react";
import { Modal } from "react-bootstrap";

function CommonModal(props) {
  return (
    <>
      <Modal
        {...props}
        centered
        className={`commonModal ${props.className}`}
        show={props.show}
        onHide={props.handleClose}
        backdrop={props?.alert ? "static" : ""}
      >
        <Modal.Header>
          <Modal.Title>FAVORITE USERS</Modal.Title>

          <button
            className="modal_close_btn btn btn-danger"
            onClick={props.handleClose}
          >
            Close
          </button>
        </Modal.Header>
        <Modal.Body className="commonModalBody">
          <div className="row">
            {props.userDetails?.map((item) => {
              if (item.isWhishlisted == true) {
                return (
                  <div className="col-xl-4 col-md-6 mb-4 d-flex flex-column align-items-stretch p-2">
                    <div className="border d-flex flex-column align-items-center py-2">
                      <img src={item.picture} className="h-50 w-50 mt-3" />
                      <h5 className="text-center my-3">
                        {" "}
                        {item.firstName} {item.lastName}
                      </h5>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CommonModal;
