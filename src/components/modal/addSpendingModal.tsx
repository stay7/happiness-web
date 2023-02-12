import Modal from "react-modal";
import React from "react";
import { useRecoilState } from "recoil";
import { openRecordModalState } from "../../state/uiState";
import { AddSpendingForm } from "./addSpendingForm";
import styled from "styled-components";

export const AddSpendingModal = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(openRecordModalState);

  return (
    <Modal
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.00)",
        },
        content: {
          position: "absolute",
          top: 0,
          right: 10,
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
      }}
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
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
