
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState('00:00:00:00');

  useEffect(() => {
    const target = new Date('2025-05-31T21:59:59Z').getTime();
    const int = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) return setTimeLeft('00:00:00:00');
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff / 3_600_000) % 24);
      const m = Math.floor((diff / 60_000) % 60);
      const s = Math.floor((diff / 1_000) % 60);
      setTimeLeft(
        `${d.toString().padStart(2,'0')}:${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
      );
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Shogun Agency — ninja recruit</h1>
      <p className="mb-6">Now hiring — web zmizí 31. 5. 2025 — {timeLeft}</p>

      <form name="kveten-nabor" data-netlify="true" method="POST" className="grid gap-4 w-full max-w-xs">
        <input type="hidden" name="form-name" value="kveten-nabor" />
        <input className="p-2 text-black" placeholder="Jméno / Nick" name="name" required />
        <input className="p-2 text-black" placeholder="Telefon" name="phone" required />
        <input className="p-2 text-black" placeholder="E‑mail" name="email" type="email" required />
        <input className="p-2 text-black" placeholder="Instagram / TikTok @" name="social" required />
        <label className="text-sm"><input type="checkbox" name="consent" required /> Je mi 18+ a souhlasím se zpracováním osobních údajů</label>
        <button type="submit" className="bg-pink-600 py-2">Odeslat</button>
      </form>
    </main>
  );
}
