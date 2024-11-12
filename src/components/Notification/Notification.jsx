// Notification.js
import React from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      {message}
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default Notification;
