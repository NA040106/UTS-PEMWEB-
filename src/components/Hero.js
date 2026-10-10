import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#092743]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,178,58,0.24),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(25,105,160,0.38),transparent_36%)]" />
      <div className="relative mx-auto grid min-h-[580px] max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f7d88b]">
            Generasi ASIK · Agamis · Santun · Intelektual · Kekinian
          </div>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            SMA Islam Al Azhar 16
            <span className="block text-[#f3c65d]">BSB City Semarang</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Sekolah yang mengembangkan potensi akademik, karakter Islami, prestasi, dan kesiapan siswa menghadapi masa depan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-xl bg-[#e8b23a] px-5 py-3 text-sm font-extrabold text-[#092743] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f3c65d]"
            >
              Kenal Sekolah Kami
            </Link>
            <Link
              href="/berita"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Lihat Berita
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#e8b23a]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img
              src="https://www.smaialazhar16.sch.id/img/sarpras17.jpg"
              alt="Gedung SMA Islam Al Azhar 16"
              className="h-[390px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-[#092743]/85 p-4 text-white backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f3c65d]">SMAZA 16</p>
              <p className="mt-1 font-bold">Tahfidz & Bilingual School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
