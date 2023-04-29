import Modal from "../../UI/Modal/Modal.tsx";

import Button from "../../UI/Button/Button.tsx";
import { useState } from "react";
interface RulesProps {
  gameModeNormal: boolean;
}
const Rules = ({ gameModeNormal }: RulesProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  

  function closeModal() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <Modal gameModeNormal={gameModeNormal} onClick={closeModal} />
      )}
      <Button onClick={openModal} className="rules">
        Rules
      </Button>
    </>
  );
};

export default Rules;
