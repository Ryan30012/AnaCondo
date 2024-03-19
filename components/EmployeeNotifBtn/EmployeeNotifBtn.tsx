"use client"
import React, { useState } from 'react';

const NotificationsBtn: React.FC = () => {
  const [showNotif, setShowNotif] = useState(false);
  
  return (
    <button 
      onClick={() => setShowNotif(!showNotif)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {showNotif ? 'Hide Notifications' : 'Show Notifications'}
    </button>
  );
};

export default NotificationsBtn;
