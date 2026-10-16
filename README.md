# Website CV Editorial Minimalist

Website ini adalah template CV / personal portfolio mahasiswa dengan gaya editorial minimalist, Bootstrap 5.3.8, CSS custom, dan Vanilla JavaScript.

## Struktur Folder

```text
.
├── index.html
├── profile.html
├── portfolio.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── logo.svg
│   └── images/
│       ├── profile-placeholder.svg
│       ├── project-01.svg
│       ├── project-02.svg
│       ├── project-03.svg
│       └── project-04.svg
└── README.md
```

## Teknologi

- HTML5
- CSS3
- Bootstrap 5.3.8 via CDN
- Bootstrap Icons 1.13.1 via CDN
- Google Fonts: Playfair Display dan DM Sans
- Vanilla JavaScript
- IntersectionObserver untuk scroll reveal

## Cara Menjalankan Lokal

Buka `index.html` langsung di browser, atau jalankan folder ini melalui Laragon / web server lokal. Semua link memakai path relatif sehingga siap dipindahkan ke hosting statis.

## Mengganti Nama dan Biodata

Cari teks `Nama Mahasiswa`, `Program Studi`, `email@example.com`, `Kota / Provinsi`, dan placeholder lain pada `index.html`, `profile.html`, dan `contact.html`. Ganti hanya dengan data yang benar.

## Mengganti Foto dan Gambar

Ganti `assets/images/profile-placeholder.svg` dengan foto portrait milik Anda. Jika memakai file baru, sesuaikan atribut `src` pada halaman HTML. Gambar proyek berada di `assets/images/project-01.svg` sampai `project-04.svg`.

## Mengubah Pendidikan, Pengalaman, dan Keahlian

Edit bagian timeline di `profile.html` dan `index.html`. Progress bar di halaman profil masih contoh visual. Ubah `data-progress` hanya jika memiliki data tingkat kemampuan yang ingin ditampilkan.

## Menambah Proyek Portofolio

Di `portfolio.html`, duplikasi elemen dengan class `portfolio-item`. Atur `data-category` menjadi:

- `web`
- `uiux`
- `academic`

Ubah juga data pada tombol modal seperti `data-project-title`, `data-project-description`, `data-project-stack`, dan `data-project-image`.

## Memasang File CV PDF

File CV PDF sudah tersedia di `assets/cv.pdf` dan tombol `Download CV` pada halaman profil sudah aktif. Jika ingin mengganti CV:

1. Buat atau ekspor file PDF baru.
2. Simpan dengan nama `cv.pdf`.
3. Letakkan di folder `assets/`.
4. Pastikan tombol `Download CV` di `profile.html` tetap mengarah ke `assets/cv.pdf`.
5. Buka file melalui browser untuk memastikan PDF bisa dibaca.

## Menghubungkan Formulir Kontak

Form kontak saat ini hanya validasi front-end. Untuk pengiriman nyata, hubungkan ke backend sendiri atau layanan seperti Formspree, Getform, Netlify Forms, atau server kampus. Jangan menulis pesan “terkirim” sebelum integrasi benar-benar aktif.

## Upload ke GitHub

1. Buat repository baru di GitHub.
2. Upload semua file dan folder proyek.
3. Pastikan `index.html` berada di root repository.
4. Commit perubahan.

## Mengaktifkan GitHub Pages

1. Buka repository di GitHub.
2. Masuk ke `Settings`.
3. Pilih `Pages`.
4. Pada bagian `Build and deployment`, pilih branch utama, misalnya `main`.
5. Pilih folder `/root`.
6. Simpan pengaturan.

## Cek Setelah Publikasi

- Buka URL GitHub Pages yang diberikan.
- Uji navigasi Beranda, Profil, Portofolio, dan Kontak.
- Uji filter portofolio.
- Uji modal detail proyek.
- Uji validasi form kontak.
- Cek tampilan mobile dengan fitur responsive mode di browser.
- Pastikan tidak ada data pribadi placeholder yang tertinggal sebelum dipublikasikan.
