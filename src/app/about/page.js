import Link from "next/link";

const fasilitas = [
  "Taman sekolah",
  "Ruang tata usaha",
  "Mini theater",
  "Perpustakaan",
  "Lapangan utama",
  "Laboratorium komputer",
  "Laboratorium kimia"
];

const misi = [
  "Menyelenggarakan pendidikan Islam yang berkualitas untuk menghasilkan generasi muslim yang cerdas, berakhlak mulia, dan berwawasan global.",
  "Meningkatkan mutu pembelajaran dan pembinaan siswa melalui berbagai program serta kegiatan yang inovatif dan kreatif.",
  "Membentuk karakter siswa yang berakhlak mulia dan berbudi luhur sesuai dengan nilai-nilai Islam.",
  "Menanamkan semangat keilmuan dan penelitian kepada siswa untuk menjadi generasi yang berwawasan global.",
  "Mempersiapkan siswa menjadi pemimpin masa depan yang kompeten dan berkarakter Islami."
];

export default function About() {
  return (
    <div>
      <section className="bg-[#092743] px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#f3c65d]">About School</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black sm:text-5xl">SMA Islam Al Azhar 16 BSB Semarang</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Profil singkat sekolah, sejarah, visi, misi, fasilitas, dan program unggulan dalam satu halaman.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Profil Sekolah</p>
            <h2 className="mt-3 text-3xl font-black text-[#0c3157]">Mewujudkan generasi muslim yang unggul dan berkarakter</h2>
            <p className="mt-5 leading-8 text-slate-600">
              SMA Islam Al Azhar 16 merupakan sekolah menengah atas swasta yang berada di kawasan BSB City, Kecamatan Mijen, Kota Semarang. Sekolah mengembangkan pembelajaran yang memadukan pendidikan umum, nilai keislaman, pembentukan adab, serta pengembangan prestasi siswa.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Sekolah tercatat memiliki NPSN 69896909 dan berstatus akreditasi A. Pada halaman resminya, sekolah juga menampilkan program seperti Pemantapan Ibadah, Penguatan Adab Islam, Tahfidz & Tahsin Qur’an, Digital Class Learning, English Practice Program, dan Program Sukses PTN.
            </p>
          </div>
          <img
            src="https://www.smaialazhar16.sch.id/img/sarpras1.jpeg"
            alt="Lingkungan SMA Islam Al Azhar 16"
            className="h-[390px] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Sejarah Singkat</p>
          <h2 className="mt-2 text-3xl font-black text-[#0c3157]">Berdiri dan berkembang di BSB City</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            Berdasarkan data satuan pendidikan, SMA Islam Al Azhar 16 memiliki SK operasional nomor 421.3 / 4048 / 2015 dengan tanggal 11 Juni 2015. Sekolah berkembang sebagai bagian dari lingkungan pendidikan Al Azhar di kawasan BSB City, Semarang.
          </p>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#092743] p-8 text-white lg:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#f3c65d]">Visi</p>
            <h2 className="mt-3 text-2xl font-black leading-9">
              “Mewujudkan cendekiawan muslim yang bertaqwa, berakhlak mulia, dan berwawasan global serta memiliki kepedulian terhadap lingkungan.”
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Misi</p>
            <div className="mt-5 space-y-4">
              {misi.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0c3157] text-sm font-bold text-white">{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Fasilitas</p>
              <h2 className="mt-2 text-3xl font-black text-[#0c3157]">Lingkungan belajar</h2>
            </div>
            <Link href="/berita" className="text-sm font-extrabold text-[#0c3157] hover:underline">Lihat berita sekolah →</Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fasilitas.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 h-2 w-14 rounded-full bg-[#e8b23a]" />
                <p className="font-bold text-[#0c3157]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] bg-[#f7f3e8] p-8 lg:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c68b13]">Alamat Sekolah</p>
          <h2 className="mt-2 text-2xl font-black text-[#0c3157]">SMA Islam Al Azhar 16 BSB City Semarang</h2>
          <p className="mt-3 max-w-2xl leading-8 text-slate-700">
            Jl. RM. Hadisoebeno Sosrowardhoyo, BSB City, Kecamatan Mijen, Kota Semarang 50211
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="rounded-full bg-white px-4 py-2">📞 +62 812-2255-4416</span>
            <span className="rounded-full bg-white px-4 py-2">✉️ smaza16bsb@gmail.com</span>
          </div>
        </section>
      </div>
    </div>
  );
}
