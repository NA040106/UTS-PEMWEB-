import Link from "next/link";
import { notFound } from "next/navigation";
import { berita, getBeritaById } from "@/data/berita";

export function generateStaticParams() {
  return berita.map((item) => ({ id: item.id }));
}

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const item = getBeritaById(id);

  if (!item) {
    notFound();
  }

  return (
    <article>
      <section className="bg-[#092743] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/berita" className="text-sm font-bold text-[#f3c65d] hover:underline">
            ← Kembali ke Berita
          </Link>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#f3c65d]">{item.category}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{item.title}</h1>
          <p className="mt-4 text-slate-300">{item.date}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
        <img
          src={item.image}
          alt={item.title}
          className="h-auto max-h-[560px] w-full rounded-[2rem] object-cover shadow-xl"
        />
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-lg font-semibold leading-9 text-slate-700">{item.excerpt}</p>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
            <p>{item.content}</p>
            <p>
              Halaman ini merupakan bagian dari website profil frontend sekolah dan menggunakan dynamic route Next.js melalui folder <span className="font-bold text-[#0c3157]">berita/[id]</span>.
            </p>
          </div>
        </div>
        <Link
          href="/berita"
          className="mt-8 inline-flex rounded-xl bg-[#0c3157] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#08213b]"
        >
          Kembali ke Berita
        </Link>
      </section>
    </article>
  );
}
