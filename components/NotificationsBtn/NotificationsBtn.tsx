
import { Result } from 'postcss';
import React, { useState, useEffect } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

// Define a type for notifications
type AppNotification = {
  message: string;
  time: string;
};

const NotificationsBtn: React.FC = () => {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const [newNotif, setNewNotif] = useState(false);
  const user = ''; // add session user need code in Branch of Message Board to get the user email in the current session

  useEffect(() => {
    fetchNotifications(user);
  }, []);

  const fetchNotifications = async (user: string) => {
    try {
      const result = await fetch('api/notification', {
        method: 'GET',
        body: JSON.stringify({
          user: user,
        })
      })
      setNewNotif(false);
    } catch (error) {
      console.log('Error: ', error);
    }  
  };

  const NewNotif = () => {
    setNewNotif(true);
  }


  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 flex items-center"
        onClick={() => {
          setShowNotifications(!showNotifications);
          setNewNotif(false);
        }}
      >
        <IoMdNotificationsOutline /> {/* Icon for notifications */}
      </button>
      {showNotifications && (
        <div className="absolute top-full right-0 bg-white border border-gray-300 rounded p-2 shadow">
          <h2 className="text-lg font-bold mb-2">Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className={index !== 0 ? 'border-t border-gray-300 pt-2 mt-2' : ''}>
                <div>{notification.message}</div>
                <div>{notification.time}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationsBtn;