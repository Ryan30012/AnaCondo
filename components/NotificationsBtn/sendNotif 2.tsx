import NewNotif from './NotificationsBtn'

const sendNotification = async (user: string, message: string) => {
    try {
        NewNotif(true);
      const response = await fetch('/api/notifications', {
        method: 'POST',
        body: JSON.stringify({ 
            message: message,
            user: user 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Notification created successfully.');
      } else {
        console.error('Error creating notification:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };