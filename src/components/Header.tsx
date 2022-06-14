import { useState } from "react";
import MomentModal from "./MomentModal";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className=" bg-white border-b border-gray-300 shadow-xl">
        <div className="container max-w-7xl mx-auto px-5 h-24 flex items-center justify-between">
          <h1 className="text-orange-500 text-xl tracking-wider">Header</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-orange-500 text-white px-10 py-2"
          >
            Open modal
          </button>
        </div>
      </header>

      {isOpen && (
        <MomentModal
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          openModal={() => setIsOpen(true)}
        />
      )}
    </>
  );
};

export default Header;
