module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/berita/[id]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailBerita,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$berita$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/berita.js [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$berita$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["berita"].map((item)=>({
            id: item.id
        }));
}
async function DetailBerita({ params }) {
    const { id } = await params;
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$berita$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBeritaById"])(id);
    if (!item) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#092743] px-5 py-16 text-white lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/berita",
                            className: "text-sm font-bold text-[#f3c65d] hover:underline",
                            children: "← Kembali ke Berita"
                        }, void 0, false, {
                            fileName: "[project]/src/app/berita/[id]/page.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#f3c65d]",
                            children: item.category
                        }, void 0, false, {
                            fileName: "[project]/src/app/berita/[id]/page.js",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-3 text-4xl font-black leading-tight sm:text-5xl",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/berita/[id]/page.js",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-slate-300",
                            children: item.date
                        }, void 0, false, {
                            fileName: "[project]/src/app/berita/[id]/page.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/berita/[id]/page.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/berita/[id]/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-4xl px-5 py-14 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.image,
                        alt: item.title,
                        className: "h-auto max-h-[560px] w-full rounded-[2rem] object-cover shadow-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/berita/[id]/page.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold leading-9 text-slate-700",
                                children: item.excerpt
                            }, void 0, false, {
                                fileName: "[project]/src/app/berita/[id]/page.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 space-y-5 text-base leading-8 text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: item.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/berita/[id]/page.js",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Halaman ini merupakan bagian dari website profil frontend sekolah dan menggunakan dynamic route Next.js melalui folder ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[#0c3157]",
                                                children: "berita/[id]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/berita/[id]/page.js",
                                                lineNumber: 41,
                                                columnNumber: 134
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/berita/[id]/page.js",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/berita/[id]/page.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/berita/[id]/page.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/berita",
                        className: "mt-8 inline-flex rounded-xl bg-[#0c3157] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#08213b]",
                        children: "Kembali ke Berita"
                    }, void 0, false, {
                        fileName: "[project]/src/app/berita/[id]/page.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/berita/[id]/page.js",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/berita/[id]/page.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/berita/[id]/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/berita/[id]/page.js [app-rsc] (ecmascript)"));
}),
"[project]/src/data/berita.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "berita",
    ()=>berita,
    "getBeritaById",
    ()=>getBeritaById
]);
const berita = [
    {
        id: "kelulusan-kelas-xii",
        title: "Pengumuman Kelulusan Kelas XII",
        date: "5 Mei 2025",
        category: "Akademik",
        image: "https://www.smaialazhar16.sch.id/img/PENGUMUMAN%20KELULUSAN.jpeg",
        excerpt: "SMA Islam Al Azhar 16 menyampaikan pengumuman kelulusan kelas XII tahun ajaran 2024/2025 sebagai tonggak penting perjalanan para siswa menuju jenjang berikutnya.",
        content: "Pengumuman kelulusan menjadi momen yang penuh rasa syukur bagi civitas akademika SMA Islam Al Azhar 16. Sekolah berharap para lulusan terus membawa nilai Generasi ASIK, yaitu Agamis, Santun, Intelektual, dan Kekinian, serta tetap menjunjung akhlakul karimah dalam melanjutkan pendidikan dan berkarya."
    },
    {
        id: "medali-emas-brains-science-olympiad",
        title: "Prestasi Emas pada Brains Science Olympiad",
        date: "2025",
        category: "Prestasi",
        image: "https://www.smaialazhar16.sch.id/img/ALBICY%20SPEKTA.jpeg",
        excerpt: "Program One Student Four Achievement kembali menunjukkan semangat berprestasi melalui pencapaian siswa pada kompetisi tingkat nasional.",
        content: "Prestasi siswa menjadi bagian penting dari budaya belajar di SMA Islam Al Azhar 16. Capaian kompetisi ini menjadi contoh bahwa proses belajar, latihan, dukungan guru, serta semangat untuk terus berkembang dapat menghasilkan prestasi yang membanggakan sekolah."
    },
    {
        id: "medali-olimpiade-sains-indonesia",
        title: "Medali Perunggu Olimpiade Sains Indonesia",
        date: "2025",
        category: "Prestasi",
        image: "https://www.smaialazhar16.sch.id/img/olimpiade%20sains.jpeg",
        excerpt: "Siswa SMA Islam Al Azhar 16 meraih prestasi pada ajang olimpiade sains dan membawa nama sekolah di tingkat nasional.",
        content: "Olimpiade menjadi salah satu ruang bagi siswa untuk mengembangkan kemampuan akademik. Dukungan pembinaan yang berkelanjutan membantu siswa menyalurkan potensi mereka pada berbagai bidang seperti matematika, ekonomi, kebumian, dan bahasa."
    },
    {
        id: "program-sukses-ptn",
        title: "Program Sukses PTN Series",
        date: "23 Februari 2024",
        category: "Program Unggulan",
        image: "https://www.smaialazhar16.sch.id/img/berita-ptn.jpeg",
        excerpt: "Program Sukses PTN membekali siswa kelas XII melalui kegiatan persiapan menghadapi seleksi perguruan tinggi negeri.",
        content: "Program Sukses PTN merupakan program tambahan untuk mempersiapkan siswa kelas XII menghadapi seleksi perguruan tinggi negeri. Kegiatan dapat berupa pendalaman materi, latihan soal, try out, dan evaluasi untuk membantu siswa menyiapkan strategi belajar."
    },
    {
        id: "olimpiade-sains-al-azhar",
        title: "Kontingen SMAZA 16 Sukses di Olimpiade Sains Al Azhar",
        date: "2024",
        category: "Prestasi",
        image: "https://www.smaialazhar16.sch.id/img/olimpiade%20sains.jpeg",
        excerpt: "Kontingen SMAZA 16 meraih medali pada Olimpiade Sains Al Azhar ke-16 di Jakarta.",
        content: "Kontingen SMAZA 16 berhasil meraih beberapa penghargaan pada Olimpiade Sains Al Azhar ke-16. Prestasi tersebut menjadi bentuk penghargaan atas proses latihan dan pembinaan siswa dalam bidang akademik."
    },
    {
        id: "albicy-spekta",
        title: "ALBICY SPEKTA: Ruang Kreativitas dan Budaya",
        date: "2025",
        category: "Kegiatan",
        image: "https://www.smaialazhar16.sch.id/img/ALBICY%20SPEKTA.jpeg",
        excerpt: "Kegiatan ALBICY SPEKTA menghadirkan panggung kreativitas siswa melalui seni, budaya, dan kolaborasi.",
        content: "ALBICY SPEKTA menjadi salah satu kegiatan yang mempertemukan kreativitas, budaya, dan kebersamaan siswa. Kegiatan seperti ini memberi ruang bagi murid untuk mengembangkan bakat non-akademik sekaligus belajar bekerja sama dan tampil percaya diri."
    }
];
function getBeritaById(id) {
    return berita.find((item)=>item.id === id);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03-ywfntvph6j._.js.map