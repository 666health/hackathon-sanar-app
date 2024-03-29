import firebase from 'firebase';

export const askForPermissioToReceiveNotifications = async () => {
  console.log('asking');
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();

    return token;
  } catch (error) {
    console.error(error);
  }
};
