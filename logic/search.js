// Kata kunci yang akan ditampilkan dengan tujuan halaman HTML lokal
var keywords = [
    { term: "Artikel Balita", url: "balita.html" },
    { term: "Artikel Remaja", url: "remaja.html" },
    { term: "Artikel Dewasa", url: "dewasa.html" },
    { term: "Artikel Periksa Kesehatan", url: "article-pp-01.html" },
    { term: "Artikel Zat Adiktif", url: "article-pp-02.html" },
    { term: "Artikel Peduli Kesehatan", url: "article-pp-03.html" },
    { term: "Artikel Gizi Seimbang", url: "article-pp-04.html" },
    { term: "Artikel Cukup Hidrasi", url: "article-pp-05.html" },
    { term: "Artikel Kendali Stress", url: "article-pp-06.html" },
    { term: "Artikel Selalu Bersih", url: "article-pp-07.html" },
    { term: "Artikel Tidur Cukup", url: "article-pp-08.html" },
    { term: "Artikel Olahraga", url: "article-pp-09.html" },
    { term: "Artikel Vaksinasi", url: "article-pp-10.html" },
    { term: "Artikel Makanan Sehat Balita", url: "article-blt-01.html" },
    { term: "Artikel Kelengkapan Imunisasi Balita", url: "article-blt-02.html" },
    { term: "Artikel Pertumbuhan Ideal Balita", url: "article-blt-03.html" },
    { term: "Artikel Kemampuan Minimal Balita", url: "article-blt-04.html" },
    { term: "Artikel Kelainan Yang Diwaspadai", url: "article-blt-05.html" },
    { term: "Artikel Pengertian Olahraga (For LK)", url: "article-rmj-01.html" },
    { term: "Artikel Pengertian Olahraga (For PR)", url: "article-rmj-02.html" },
    { term: "Artikel Olahraga Harian (For LK)", url: "article-rmj-03.html" },
    { term: "Artikel Olahraga Harian (For PR)", url: "article-rmj-04.html" },
    { term: "Artikel Makanan Sehat (For LK)", url: "article-rmj-05.html" },
    { term: "Artikel Makanan Sehat (For PR)", url: "article-rmj-06.html" },
    { term: "Artikel Pola Hidup Disarankan (For LK)", url: "article-rmj-07.html" },
    { term: "Artikel Pola Hidup Disarankan (For PR)", url: "article-rmj-08.html" },
    { term: "Artikel Edukasi Pra-Nikah (For LK)", url: "article-rmj-09.html" },
    { term: "Artikel Edukasi Pra-Nikah (For PR)", url: "article-rmj-10.html" },
    { term: "Artikel Edukasi Saat Menstruasi", url: "article-rmj-11.html" },
    { term: "Artikel Kesiapan Menikah", url: "article-dws-01.html" },
    { term: "Artikel Tes Yang Diperlukan", url: "article-dws-02.html" },
    { term: "Artikel Kesiapan Mental", url: "article-dws-03.html" },
    { term: "Artikel Kesiapan Finansial", url: "article-dws-04.html" },
    { term: "Artikel Tugas Harian Ayah", url: "article-dws-05.html" },
    { term: "Artikel Tugas Harian Bunda", url: "article-dws-06.html" },
    { term: "Resep Puding Kelor", url: "article-rsp-01.html" },
    { term: "Resep Susu Jagung", url: "article-rsp-02.html" },
    { term: "Resep Bubur Sayur", url: "article-rsp-03.html" },
    // Tambahkan kata kunci lain dengan tujuan halaman HTML lokal di sini
];

function showPreview() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var searchPreview = document.querySelector(".result"); // Mengubah ini menjadi selector yang benar
    searchPreview.innerHTML = "";

    if (searchTerm.length === 0) {
        return;
    }

    var matchedKeywords = keywords.filter(function(keyword) {
        return keyword.term.toLowerCase().includes(searchTerm);
    });

    var previewList = document.createElement("ul");
    matchedKeywords.forEach(function(keyword) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.textContent = keyword.term;
        link.href = keyword.url;
        listItem.appendChild(link);
        previewList.appendChild(listItem);
    });
    searchPreview.appendChild(previewList);
}
