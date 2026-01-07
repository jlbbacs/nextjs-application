export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <section className="relative z-10 max-w-4xl w-full text-center">
        <header className="mb-12">
          {/* Badge/Eyebrow text */}
          <span className="inline-block py-1 px-3 mb-6 text-xs font-medium tracking-widest text-blue-400 uppercase border border-blue-400/30 rounded-full bg-blue-400/10">
            Available for Projects
          </span>

          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
            Joseph Lester <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500">
              Bacsarsa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
           
            <span className="text-slate-200"> Next.js First App</span>. 
           
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95">
            View My Work
          </button>
          <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-800 hover:bg-slate-800 transition-all">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}