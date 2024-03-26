# JavaScript Functions and Unit Testing

Proyek ini berisi implementasi dari beberapa fungsi JavaScript dasar dan contoh unit test menggunakan Jest. Fungsi-fungsi tersebut termasuk:

- `fishBash(limit)`: Fungsi untuk mencetak angka dari 1 sampai `limit`. Untuk angka yang habis dibagi 3, ia mencetak "fish"; untuk angka yang habis dibagi 5, ia mencetak "bash"; dan untuk angka yang habis dibagi 15, ia mencetak "fish bash".
- `sortArray(arr)`: Fungsi untuk mengurutkan array angka dari kecil ke besar dan besar ke kecil tanpa menggunakan fungsi bawaan JavaScript.
- `isPalindrome(str)`: Fungsi untuk memeriksa apakah sebuah string adalah palindrome.

## Setup Proyek

Untuk menjalankan proyek ini, Anda harus memiliki Node.js dan npm terinstal pada sistem Anda. Anda dapat mengikuti panduan instalasi resmi di [situs Node.js](https://nodejs.org/).

Setelah Node.js dan npm terinstal, ikuti langkah-langkah berikut untuk menyiapkan proyek:

1. **Klon Proyek**

   Klon repositori ini ke sistem lokal Anda menggunakan git:

git clone https://github.com/IlhamArbani/altech-test.git
cd altech-test


2. **Instal Dependensi**

Dalam direktori proyek, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

npm install

## Menjalankan Unit Test

Proyek ini menggunakan Jest untuk unit testing. Untuk menjalankan unit test, gunakan perintah berikut:

npm test

Perintah ini akan menjalankan semua test yang ada di dalam folder proyek yang memiliki ekstensi `.test.js` atau `.spec.js`.
