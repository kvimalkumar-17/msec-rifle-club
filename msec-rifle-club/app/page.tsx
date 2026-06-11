export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-yellow-400">
          MSEC Rifle Club
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Register</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="flex min-h-[85vh] flex-col items-center justify-center text-center px-6">
        
        <span className="mb-4 rounded-full border border-yellow-500 px-4 py-2 text-yellow-400">
          District Level Championship 2026
        </span>

        <h1 className="max-w-5xl text-5xl md:text-7xl font-extrabold leading-tight">
          Precision.
          <span className="text-yellow-400"> Focus. </span>
          Victory.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-400">
          Join the most prestigious district-level shooting championship
          organized by MSEC Rifle Club. Compete, excel and showcase
          your marksmanship.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black">
            Register Now
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4">
            View Events
          </button>
        </div>
      </section>
    </main>
  );
}