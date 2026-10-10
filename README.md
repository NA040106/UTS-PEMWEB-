# Website Profil SMA Islam Al Azhar 16 BSB Semarang

Website profil sekolah yang dikembangkan sebagai tugas mata kuliah menggunakan Next.js. Website ini menampilkan informasi sekolah, program unggulan, serta berita dan kegiatan SMA Islam Al Azhar 16 BSB Semarang.

## Teknologi yang Digunakan

- Next.js
- JavaScript
- App Router
- React Components
- Tailwind CSS
- Next.js Link untuk navigasi internal

Project ini berfokus pada frontend dan tidak menggunakan database, API, backend, authentication, maupun TypeScript.

## Fitur Website

- **Home (`/`)** — Menampilkan identitas sekolah, slogan, informasi singkat, program unggulan, dan berita terbaru.
- **About (`/about`)** — Berisi profil, sejarah singkat, visi, misi, fasilitas, dan alamat sekolah.
- **Berita (`/berita`)** — Menampilkan daftar berita sekolah beserta gambar, tanggal, kategori, dan ringkasan.
- **Detail Berita (`/berita/[id]`)** — Menampilkan isi berita berdasarkan ID melalui dynamic route Next.js.
- **Navbar dan Footer** — Digunakan bersama pada seluruh halaman.
- **Responsive Layout** — Tampilan menyesuaikan ukuran layar desktop maupun perangkat mobile.

## Struktur Project

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

Folder `public/` digunakan untuk menyimpan aset statis, seperti logo dan foto sekolah.

## Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/NA040106/UTS-PEMWEB-.git
```

### 2. Masuk ke Folder Project

```bash
cd UTS-PEMWEB-
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Website

```bash
npm run dev
```

Buka browser dan akses:

```text
http://localhost:3000
```

### 5. Build Project

Untuk memeriksa apakah project dapat dibangun untuk production, jalankan:

```bash
npm run build
```

## Halaman Website

| Halaman | URL |
|---|---|
| Home | `/` |
| About | `/about` |
| Berita | `/berita` |
| Detail Berita | `/berita/[id]` |

## Sumber Informasi

Informasi mengenai sekolah mengacu pada website resmi SMA Islam Al Azhar 16 BSB Semarang:

https://www.smaialazhar16.sch.id

## Tujuan Project

Project ini dibuat untuk menerapkan konsep dasar pengembangan website menggunakan Next.js, termasuk App Router, reusable components, layout, navigasi menggunakan `next/link`, dynamic routing, dan styling menggunakan Tailwind CSS.
