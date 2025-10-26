'use client'
import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const cfg = {
  apiKey: process.env.NEXT_PUBLIC_FCM_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FCM_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FCM_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FCM_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FCM_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FCM_APP_ID
}

export default function PushPage() {
  const [status, setStatus] = useState('')

  useEffect(() => {
    if(!cfg.apiKey) { setStatus('FCM not configured.'); return }
    const app = initializeApp(cfg as any)
    const messaging = getMessaging(app)
    Notification.requestPermission().then(async (perm)=>{
      if(perm !== 'granted') { setStatus('Permission denied.'); return }
      try {
        const token = await getToken(messaging, { vapidKey: undefined })
        setStatus(token ? 'Notifications enabled.' : 'Failed to get token.')
      } catch (e:any) {
        setStatus(e.message)
      }
    })
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Push Notifications</h1>
      <p className="text-white/60 mb-4">Enable browser notifications for new releases.</p>
      <div className="px-3 py-2 rounded bg-black/40 border border-white/10">{status}</div>
    </div>
  )
}
