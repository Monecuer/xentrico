// This service worker handles background messages from FCM.
self.importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')
self.importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: self.NEXT_PUBLIC_FCM_API_KEY,
  authDomain: self.NEXT_PUBLIC_FCM_AUTH_DOMAIN,
  projectId: self.NEXT_PUBLIC_FCM_PROJECT_ID,
  storageBucket: self.NEXT_PUBLIC_FCM_STORAGE_BUCKET,
  messagingSenderId: self.NEXT_PUBLIC_FCM_MESSAGING_SENDER_ID,
  appId: self.NEXT_PUBLIC_FCM_APP_ID
})

const messaging = firebase.messaging()
