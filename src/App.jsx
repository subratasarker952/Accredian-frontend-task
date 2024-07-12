import { useState } from "react";
import Hero from "./Components/Hero";
import ReferModal from "./Components/ReferModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    
      <div>
        <Hero onReferClick={handleOpenModal} />
        <ReferModal open={modalOpen} handleClose={handleCloseModal} />
      </div>
    
  );
}

export default App;
