"use client";
import { useState } from "react";
import { FaBullseye, FaMedal, FaUsers } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
  name: "",
  college: "",
  email: "",
  phone: "",
  event: "10m Air Rifle Men",
});

     const [success, setSuccess] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.college ||
    !formData.email ||
    !formData.phone
  ) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem(
    "registration",
    JSON.stringify(formData)
  );

  setSuccess(true);

  setFormData({
    name: "",
    college: "",
    email: "",
    phone: "",
    event: "10m Air Rifle Men",
  });
};
  return (
    
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <h1 className="text-3xl font-bold text-yellow-400">
          MSEC Rifle Club
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#events" className="hover:text-yellow-400 transition">
            Events
          </a>

          <a href="#register" className="hover:text-yellow-400 transition">
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
     <Image
  src="/shooting-banner.jpg"
  alt="Shooting Championship"
  width={1200}
  height={600}
  priority
  className="rounded-2xl mx-auto"
/>
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-16 px-6"
      >
        <span className="border border-yellow-500 text-yellow-400 rounded-full px-5 py-2 mb-6">
          District Level Shooting Championship 2026
        </span>

        <h1 className="text-5xl md:text-8xl font-extrabold max-w-6xl leading-tight">
          Precision.
          <span className="text-yellow-400"> Focus.</span>
          Victory.
        </h1>

        <p className="mt-6 max-w-3xl text-gray-400 text-lg">
          Compete with top shooters across the district and showcase your
          discipline, concentration and accuracy.
        </p>

        <div className="mt-10 flex gap-4">
          <a
  href="#register"
  className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
>
  Register Now
</a>

          <a
  href="#events"
  className="border border-slate-700 px-8 py-4 rounded-xl hover:border-yellow-400 transition"
>
  View Events
</a>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">

        <div className="bg-slate-900 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
          <FaBullseye className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Accuracy</h2>
          <p className="text-gray-400">
            Test your precision and shooting skills against the best.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
          <FaMedal className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Awards</h2>
          <p className="text-gray-400">
            Win medals, certificates and recognition.
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
          <FaUsers className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Competition</h2>
          <p className="text-gray-400">
            Participate with shooters from multiple colleges.
          </p>
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="py-16 px-8 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          About The Shooting Championship
        </h2>

        <p className="text-center text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
          The District Level Shooting Championship 2026 is organized by
          MSEC Air Rifle Club to promote shooting sports among students and
          young athletes. Participants from various colleges and districts
          will compete in Air Rifle and Air Pistol events.
        </p>
      </section>

      {/* Events */}
      <section
        id="events"
        className="py-16 px-8 bg-slate-900"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Competition Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-400">
              10m Air Rifle Men
            </h3>
            <p className="text-gray-400 mt-4">
              District level individual championship.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-400">
              10m Air Rifle Women
            </h3>
            <p className="text-gray-400 mt-4">
              District level individual championship.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-400">
              10m Air Pistol Men
            </h3>
            <p className="text-gray-400 mt-4">
              District level individual championship.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl hover:scale-105 hover:border-yellow-400 border border-transparent transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-400">
              10m Air Pistol Women
            </h3>
            <p className="text-gray-400 mt-4">
              District level individual championship.
            </p>
          </div>

        </div>
       <div className="text-center mt-10 text-gray-300 space-y-2">
  <p>📅 Date: 15 July 2026</p>
  <p>📍 Venue: MSEC Air Rifle Range</p>
  <p>⏰ Reporting Time: 8:00 AM</p>
  <p>💰 Entry Fee: ₹700 per participant</p>
</div>
      </section>

      {/* Registration */}
      {/* Registration */}
<section
  id="register"
  className="py-20 px-8 text-center"
>
  <h2 className="text-4xl font-bold mb-6">
    Register For Championship
  </h2>

  <p className="text-gray-400 mb-8">
    Secure your slot for the District Level Shooting Championship 2026.
  </p>
  {success && (
  <div className="bg-green-600 text-white p-4 rounded-xl mb-4 max-w-xl mx-auto">
    Registration Submitted Successfully!
  </div>
)}

  <form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto mt-10 space-y-4"
>

  <input
    type="text"
    placeholder="Full Name"
    value={formData.name}
    onChange={(e) =>
      setFormData({ ...formData, name: e.target.value })
    }
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400"
  />

  <input
    type="text"
    placeholder="College Name"
    value={formData.college}
    onChange={(e) =>
      setFormData({ ...formData, college: e.target.value })
    }
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400"
  />

  <input
    type="email"
    placeholder="Email"
    value={formData.email}
    onChange={(e) =>
      setFormData({ ...formData, email: e.target.value })
    }
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400"
  />

  <input
    type="tel"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={(e) =>
      setFormData({ ...formData, phone: e.target.value })
    }
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400"
  />

  <select
    value={formData.event}
    onChange={(e) =>
      setFormData({ ...formData, event: e.target.value })
    }
    className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-yellow-400"
  >
    <option>10m Air Rifle Men</option>
    <option>10m Air Rifle Women</option>
    <option>10m Air Pistol Men</option>
    <option>10m Air Pistol Women</option>
  </select>

  <button
    type="submit"
    className="w-full bg-yellow-500 text-black p-4 rounded-xl font-bold hover:scale-105 transition"
  >
    Submit Registration
  </button>
</form>
</section>
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-gray-400">
        © 2026 MSEC Rifle Club. All Rights Reserved.
      </footer>

    </main>
  );
}