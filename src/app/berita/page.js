import NewsCard from "@/components/NewsCard";
import { berita } from "@/data/berita";

export default function BeritaPage() {
  return (
    <div>
      <section className="bg-[#092743] px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#f3c65d]">School News</p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">Berita & Kegiatan</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Kumpulan berita, program, prestasi, dan kegiatan SMA Islam Al Azhar 16 BSB Semarang.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {berita.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
