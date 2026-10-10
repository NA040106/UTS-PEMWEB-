# Website Profil SMA Islam Al Azhar 16 BSB Semarang

Project frontend untuk tugas Next.js menggunakan JavaScript, App Router, Tailwind CSS, React Component, `next/link`, layout, dan dynamic route `/berita/[id]`.

## 1. Buat project baru

```bash
npx create-next-app@latest smaza16-nextjs --js --tailwind --eslint --app --src-dir --use-npm
```

Setelah selesai, masuk ke folder project lalu ganti file dengan isi project ini.

```bash
cd smaza16-nextjs
npm install
npm run dev
```

Buka:

```text
http://localhost:3000
```

## 2. Struktur utama

```text
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── about/
│   │   └── page.js
│   └── berita/
│       ├── page.js
│       └── [id]/
│           └── page.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   └── NewsCard.js
└── data/
    └── berita.js
```

## 3. Catatan gambar

Kode memakai gambar dari website resmi sekolah sebagai sumber visual. Untuk tugas yang meminta semua gambar berada di `public/`, gambar tersebut bisa diunduh dari website resmi lalu disimpan ke `public/images/` dan URL pada `src/data/berita.js`, `src/app/about/page.js`, dan `src/components/Hero.js` dapat diganti menjadi path lokal seperti `/images/sekolah.jpg`.

## 4. Fitur yang sudah ada

- Home `/`
- About `/about`
- Daftar berita `/berita`
- Detail berita dynamic route `/berita/[id]`
- 6 data berita
- Navbar reusable
- Footer reusable
- Hero reusable
- NewsCard reusable
- Navigasi internal dengan `next/link`
- Responsive layout
- Tailwind CSS
- JavaScript tanpa TypeScript
- Tanpa database, API, backend, authentication, atau login
