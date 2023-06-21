import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  if (!visible) return null;

  return (
    <div className={`toast toast--${type}`}>
      <p className="toast__message">{message}</p>
    </div>
  );
};

export default Toast;
