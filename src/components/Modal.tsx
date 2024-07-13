import { ReactNode } from "react";
import React from "react";

interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalType> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  // fade
  return (
    <div onClick={onClose} className="flex p-0 m-0 top-0 left-0 right-0 fixed w-full h-full justify-center items-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex max-w-l fixed shadow-lg rounded-sm bg-white border-4 mx-auto"
      >
        <div className="w-full">
          <div className="flex flex-col text-center p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;