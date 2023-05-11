import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

function HelpRequests({helpNumber, firstModel, openWhen, handleClose, onHelpAnswer, name}) {
    const firstHelpModel = "I can't identify my image. Alex and " + name +", can one of you help me?";
    const secHelpModel = "Would you like to interrupt your task to help the robot?";
    return (
        <>
            <Modal show={openWhen}>
                <Modal.Header closeButton>
                    <Modal.Title>The robot needs help</Modal.Title>
                </Modal.Header>
                <Modal.Body>{firstModel ? firstHelpModel : secHelpModel}</Modal.Body>
                <Modal.Footer>
                    {firstModel ?
                        <Button variant="primary" onClick={onHelpAnswer}>
                        Next
                        </Button> :
                        <>
                            <Button variant="primary" onClick={handleClose}>
                            No
                            </Button>
                            <Button variant="primary" onClick={onHelpAnswer}>
                            Yes
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
} export default HelpRequests;