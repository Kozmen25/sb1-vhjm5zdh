import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  // Your Firebase config
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const initNotifications = async () => {
  try {
    const token = await getToken(messaging);
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
};

export const onMessageReceived = (callback) => {
  return onMessage(messaging, (payload) => {
    callback(payload);
  });
};