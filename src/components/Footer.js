export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#092743] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-extrabold">SMA Islam Al Azhar 16</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
            Website profil frontend untuk memperkenalkan profil, program, prestasi, dan berita sekolah.
          </p>
        </div>
        <div>
          <p className="font-bold">Alamat</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Jl. RM. Hadisoebeno Sosrowardhoyo, BSB City, Kecamatan Mijen, Kota Semarang 50211
          </p>
        </div>
        <div>
          <p className="font-bold">Kontak</p>
          <p className="mt-2 text-sm text-slate-300">+62 812-2255-4416</p>
          <p className="mt-1 text-sm text-slate-300">smaza16bsb@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-400">
        © 2026 SMA Islam Al Azhar 16 BSB Semarang. Frontend project Next.js.
      </div>
    </footer>
  );
}
