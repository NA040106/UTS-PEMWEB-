import Link from "next/link";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import { berita } from "@/data/berita";

const program = [
  ["Pemantapan Ibadah", "Penguatan pelaksanaan ibadah wajib dan sunah dalam keseharian siswa."],
  ["Tahfidz & Tahsin Qur’an", "Program Qur’ani dengan pembinaan hafalan dan kemampuan membaca Al-Qur’an."],
  ["Digital Class Learning", "Pemanfaatan teknologi dan Google Classroom dalam proses pembelajaran."],
  ["English Practice", "Latihan komunikasi bahasa Inggris untuk meningkatkan kesiapan menghadapi lingkungan global."]
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Tentang Sekolah</p>
            <h2 className="mt-3 text-3xl font-black text-[#0c3157] sm:text-4xl">
              Belajar, beradab, berprestasi, dan siap menghadapi masa depan.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              SMA Islam Al Azhar 16 BSB Semarang merupakan sekolah menengah atas swasta di kawasan BSB City, Kecamatan Mijen, Kota Semarang. Lingkungan belajar dikembangkan dengan pendekatan akademik, keislaman, karakter, dan pengembangan prestasi.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-xl bg-[#0c3157] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#08213b]"
            >
              Lihat Profil Sekolah
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {program.map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#0c3157] text-lg text-white">✦</div>
                <h3 className="font-extrabold text-[#0c3157]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Berita</p>
              <h2 className="mt-2 text-3xl font-black text-[#0c3157] sm:text-4xl">Berita sekolah</h2>
              <p className="mt-3 max-w-2xl text-slate-600">Dokumentasi kegiatan, prestasi, dan program sekolah.</p>
            </div>
            <Link href="/berita" className="text-sm font-extrabold text-[#0c3157] hover:underline">
              Lihat semua berita →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {berita.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3e8] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#0c3157] p-8 text-white md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3c65d]">Kunjungi halaman profil</p>
            <h2 className="mt-2 text-3xl font-black">Kenali SMAZA 16 lebih dekat.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-200">
              Lihat sejarah, visi, misi, fasilitas, dan program unggulan sekolah.
            </p>
          </div>
          <Link href="/about" className="rounded-xl bg-[#e8b23a] px-5 py-3 text-center text-sm font-extrabold text-[#092743] hover:bg-[#f3c65d]">
            Buka About
          </Link>
        </div>
      </section>
    </>
  );
}
