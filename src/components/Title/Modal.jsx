import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-8 max-w-md mx-auto rounded-md z-50">
        <embed src={resumeUrl} type="application/pdf" className="w-auto h-96" />
        <div className="mt-4 flex justify-end">
          <a href={resumeUrl} download="sophiawilliams.pdf" className="btn-primary">Download</a>
          <button onClick={onClose} className="btn-secondary ml-2">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
