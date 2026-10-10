import Image from "next/image";
import Link from "next/link";

const menus = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#D6AC48] bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Logo SMA Islam Al Azhar 16"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-wide text-[#12345A]">
              SMA ISLAM AL AZHAR 16
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              BSB City Semarang
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-[#12345A] transition-colors hover:bg-[#12345A] hover:text-white"
            >
              {menu.label}
            </Link>
          ))}
        </nav>

        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-[#D6AC48] px-4 py-2 text-sm font-semibold text-[#12345A] hover:bg-[#12345A] hover:text-white">
            Menu
          </summary>

          <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-[#12345A] transition-colors hover:bg-[#12345A] hover:text-white"
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}