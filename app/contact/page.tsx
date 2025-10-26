export const metadata = { title: 'Contact — Xentrico' }

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Bookings & Contact</h1>
      <form className="space-y-3" action="https://formsubmit.co" method="POST">
        <input type="hidden" name="_subject" value="New booking inquiry from Xentrico site" />
        <input type="hidden" name="_captcha" value="false" />
        <input className="w-full px-3 py-2 rounded bg-black/40 border border-white/10" name="name" placeholder="Your name" required />
        <input className="w-full px-3 py-2 rounded bg-black/40 border border-white/10" type="email" name="email" placeholder="Your email" required />
        <textarea className="w-full px-3 py-2 rounded bg-black/40 border border-white/10" name="message" placeholder="Tell us about the event..." rows={5} />
        <button className="px-4 py-2 bg-brand text-black rounded-lg font-semibold">Send</button>
      </form>
      <div className="mt-4">
        <a className="underline text-brand" href="https://wa.me/263782286544" target="_blank">WhatsApp Booking</a>
      </div>
    </div>
  )
}
