import Link from "next/link";

export default function NewsCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-[#0c3157] px-3 py-1 text-xs font-bold text-white">
          {item.category}
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68b13]">{item.date}</p>
        <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#0c3157]">{item.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
        <Link
          href={`/berita/${item.id}`}
          className="mt-5 inline-flex rounded-xl bg-[#0c3157] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#08213b]"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}
