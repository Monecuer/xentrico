'use client'

import { useEffect, useState } from 'react'
import { getHomeData } from '@/lib/getHomeData'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    getHomeData().then(setData)
  }, [])

  if (!data) return <div className="p-10 text-white/60">Loading...</div>

  const { latestSong, posts, events } = data

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 p-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black gradient-text"
        >
          XENTRICO
        </motion.h1>
        <p className="mt-4 text-white/70 max-w-2xl">
          Official music hub — listen to the latest tracks, watch videos, see shows, and shop exclusive drops.
        </p>

        {latestSong && (
          <div className="mt-8 flex items-center gap-6">
            <Image
              alt={latestSong.title}
              src={urlFor(latestSong.cover).width(400).url()}
              width={180}
              height={180}
              className="rounded-xl border border-white/10"
            />
            <div>
              <div className="text-white/80">Latest Release</div>
              <h3 className="text-2xl font-bold">{latestSong.title}</h3>
              <Link
                href={`/music/${latestSong.slug.current}`}
                className="inline-block mt-3 px-4 py-2 rounded-full bg-brand text-black font-semibold"
              >
                Listen Now
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Events */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {events?.length ? (
            events.map((e: any, i: number) => (
              <div key={i} className="rounded-xl border border-white/10 p-4">
                <div className="text-sm text-white/60">
                  {new Date(e.date).toLocaleString()}
                </div>
                <div className="font-semibold">{e.title}</div>
                <div className="text-white/60">{e.location}</div>
              </div>
            ))
          ) : (
            <div className="text-white/60">No upcoming events yet.</div>
          )}
        </div>
      </section>

      {/* News */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {posts?.map((p: any, i: number) => (
            <Link
              key={i}
              href={`/news/${p.slug.current}`}
              className="rounded-xl border border-white/10 overflow-hidden hover:scale-[1.01] transition"
            >
              {p.mainImage && (
                <Image
                  alt={p.title}
                  src={urlFor(p.mainImage).width(800).url()}
                  width={800}
                  height={500}
                />
              )}
              <div className="p-4 font-semibold">{p.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="rounded-2xl border border-white/10 p-6">
        <h3 className="text-xl font-bold">Join the Newsletter</h3>
        <form className="mt-3 flex gap-2" action="/api/newsletter" method="POST">
          <input
            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2"
            type="email"
            placeholder="Your email"
            name="email"
            required
          />
          <button className="px-4 py-2 bg-brand text-black rounded-lg font-semibold">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-white/50 mt-2">
          Get notified about new releases and shows.
        </p>
      </section>
    </div>
  )
}
