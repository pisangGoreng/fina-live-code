Simple CMS

**Why:**
Aplikasi ini dibangun untuk mempermudah user membuat berbagai article, yang bisa di simpan secara online. Sehingga bisa di akses kapanpun & dimanapun.

**How:**
Aplikasi ini dibagi menjadi 2, antara Client & Server.
Untuk menggunakan nya, kita perlu menjalankan server terlebih dahulu,
caranya dengan masuk ke dalam folder server, lalu klik kanan & buka di terminal, ketikkan perintah 
1. "npm install" lalu enter. 
2. "npm run dev" lalu enter.

Setelah server berjalan, silahkan buka folder client, klik kanan & buka terminal nya. ketikkan perintah
1. live-server

**What**
Dari sisi server, ada beberapa endpoint API yang bisa diakses sesuai dengan beberapa kebutuhan, diantaranya sebagai berikut:

/content		GET		Untuk menarik data dari database
/content		POST	Untuk menyimpan data baru ke database
/content		PUT		Untuk melakukan perubahan data 
/content		DELETE	Untuk menghapus data yang ada di database
