import React, { useState } from "react";
import Modalf from "../api/Modalf";
import Modals from "../api/Modals";

function Parent() {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {showModal && <Modalf onCloseModal={closeModal} />}
      {showModal && <Modals onClose={closeModal} />}
    </div>
  );
}

export default Parent;
