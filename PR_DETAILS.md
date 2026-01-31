# Fix Vercel deployment

Tujuan:
- Membantu Vercel mengenali project Next.js dan mengurangi kegagalan deploy terkait konfigurasi runtime.
- Menghapus lockfile yang tidak dipakai untuk menghindari kebingungan package manager di Vercel.

Perubahan yang diusulkan:
- Tambah `vercel.json` untuk memastikan builder Next.js.
- Hapus `pnpm-lock.yaml` dan `bun.lock` (menjaga `package-lock.json` karena kita set packageManager ke npm).

Rekomendasi lanjutan:
1. Pilih satu package manager untuk repo (rekomendasi: npm). Jika pakai npm: hapus pnpm-lock.yaml & bun.lock; jika pakai pnpm: hapus package-lock.json & bun.lock.
2. Pastikan package.json berisi:
   - "packageManager": "npm@9"
   - "engines": { "node": "18.x" }
3. Jika aplikasi Next.js utama berada di subfolder `/Lucifiz-API`, set Root Directory di Vercel ke `/Lucifiz-API`.
4. Pastikan semua environment variables (DATABASE_URL, NEXT_PUBLIC_*, dsb.) tersedia di Vercel Project Settings.
5. Setelah merge, lakukan redeploy dan periksa logs; kirimkan logs jika masih gagal.
