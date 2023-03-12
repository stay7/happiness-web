import Modal from "react-modal";
import React from "react";
import { useRecoilState } from "recoil";
import { openRecordModalState } from "../../state/uiState";
import { AddSpendingForm } from "./addSpendingForm";
import styled from "styled-components";

export const AddSpendingModal = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(openRecordModalState);

  Modal.setAppElement("#root");

  return (
    <Modal
      style={modalStyle}
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
    >
      <Title>지출 입력</Title>
      <AddSpendingForm />
    </Modal>
  );
};

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const modalStyle: Modal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(256,256,256,0.6)",
    zIndex: 1000,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 350,
    height: 444,
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
