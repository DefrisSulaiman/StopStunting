document.getElementById('submitBtn').addEventListener('click', function() {
    const form1_selectedOption = document.querySelector('#form1 input[name="options"]:checked');
    const form2_selectedOption = document.querySelector('#form2 input[name="options"]:checked');
    const form3_selectedOption = document.querySelector('#form3 input[name="options"]:checked');
    const form4_selectedOption = document.querySelector('#form4 input[name="options"]:checked');
    const form5_selectedOption = document.querySelector('#form5 input[name="options"]:checked');
    const form6_selectedOption = document.querySelector('#form6 input[name="options"]:checked');
    const form7_selectedOption = document.querySelector('#form7 input[name="options"]:checked');
    const form8_selectedOption = document.querySelector('#form8 input[name="options"]:checked');
    const form9_selectedOption = document.querySelector('#form9 input[name="options"]:checked');
    const form10_selectedOption = document.querySelector('#form10 input[name="options"]:checked');
    const outputDiv = document.getElementById('combined_output');

    let form1_output = "";
    let form2_output = "";
    let form3_output = "";
    let form4_output = "";
    let form5_output = "";
    let form6_output = "";
    let form7_output = "";
    let form8_output = "";
    let form9_output = "";
    let form10_output = "";
    
    // Memeriksa hasil dari formulir pertama
    if (form1_selectedOption) {
        form1_output = form1_selectedOption.value === "a" ? 
        "1. Luar biasa! Anda sudah melangkah dengan baik dalam mengonsumsi buah dan sayuran yang sangat penting untuk kesehatan Anda, " : 
        "1. Sayang sekali, mungkin kesempatan untuk mengonsumsi lebih banyak buah dan sayuran telah terlewatkan. Ini dapat memengaruhi asupan nutrisi Anda dan kesehatan Anda secara keseluruhan, karena buah dan sayuran mengandung vitamin, mineral, dan serat yang penting untuk kesehatan tubuh, ";
    } 

    // Memeriksa hasil dari formulir kedua
    if (form2_selectedOption) {
        form2_output = form2_selectedOption.value === "a" ? 
        "2. Terima kasih atas kesadaran Anda untuk memasukkan protein dalam setiap makanan utama Anda, ini akan membantu tubuh Anda mendapatkan nutrisi yang diperlukan, " : 
        "2. Merasa disayangkan bahwa protein tidak dimasukkan dalam setiap makanan utama. Kekurangan protein dapat mengakibatkan kelemahan otot, masalah pertumbuhan, dan penurunan energi, ";
    } 

    // Memeriksa hasil dari formulir ketiga
    if (form3_selectedOption) {
        form3_output = form3_selectedOption.value === "a" ? 
        "3. Bagus sekali! Memilih sumber karbohidrat yang sehat menunjukkan kesadaran akan pentingnya pola makan yang seimbang, " : 
        "3. Menyesalnya tidak mengonsumsi sumber karbohidrat yang sehat. Ini dapat mempengaruhi tingkat energi Anda dan kesehatan pencernaan, karena karbohidrat kompleks membantu memberikan energi yang stabil dan mendukung fungsi pencernaan yang sehat, ";
    } 

    // Memeriksa hasil dari formulir keempat
    if (form4_selectedOption) {
        form4_output = form4_selectedOption.value === "a" ? 
        "4. Sangat baik! Anda telah memastikan bahwa tubuh Anda tetap terhidrasi dengan cukup, yang sangat penting untuk kesehatan secara keseluruhan, " : 
        "4. Sangat disayangkan tidak minum minimal delapan gelas air putih. Kekurangan hidrasi dapat menyebabkan dehidrasi, gangguan fungsi organ, dan penurunan kinerja fisik dan mental, ";
    } 

    // Memeriksa hasil dari formulir kelima
    if (form5_selectedOption) {
        form5_output = form5_selectedOption.value === "a" ? 
        "5. Terima kasih atas perhatian Anda terhadap konsumsi serat, hal ini akan mendukung pencernaan dan kesehatan jantung Anda, " : 
        "5. Merasa menyesal bahwa makanan kaya serat tidak dikonsumsi. Ini bisa berdampak pada pencernaan yang buruk, peningkatan risiko penyakit jantung, dan penurunan kesehatan umum, ";
    } 

    // Memeriksa hasil dari formulir keenam
    if (form6_selectedOption) {
        form6_output = form6_selectedOption.value === "a" ? 
        "6. Apresiasi yang besar untuk memasukkan lemak sehat dalam diet Anda, ini membantu tubuh Anda berfungsi dengan optimal, " : 
        "6. Merasa disayangkan bahwa makanan yang mengandung lemak sehat tidak dimasukkan dalam diet. Lemak sehat penting untuk kesehatan jantung, fungsi otak, dan penyerapan nutrisi yang optimal, ";
    } 

    // Memeriksa hasil dari formulir ketujuh
    if (form7_selectedOption) {
        form7_output = form7_selectedOption.value === "a" ? 
        "7. Sangat baik! Anda telah memperhatikan untuk membatasi konsumsi gula tambahan, yang akan berkontribusi pada kesehatan Anda secara keseluruhan, " : 
        "7. Sangat disayangkan bahwa konsumsi gula tambahan tidak dibatasi. Ini bisa meningkatkan risiko obesitas, diabetes, dan penyakit jantung, ";
    } 

    // Memeriksa hasil dari formulir kedelapan
    if (form8_selectedOption) {
        form8_output = form8_selectedOption.value === "a" ? 
        "8. Luar biasa! Dengan memperhatikan sumber kalsium, Anda menjaga kesehatan tulang dan gigi Anda dengan baik, " : 
        "8. Merasa menyesal bahwa sumber kalsium tidak dimasukkan dalam diet. Kekurangan kalsium dapat meningkatkan risiko osteoporosis dan masalah tulang lainnya, ";
    } 

    // Memeriksa hasil dari formulir kesembilan
    if (form9_selectedOption) {
        form9_output = form9_selectedOption.value === "a" ? 
        "9. Terima kasih atas perhatian Anda terhadap asupan zat besi yang penting untuk kesehatan umum Anda, " : 
        "9. Merasa disayangkan bahwa asupan makanan yang kaya akan zat besi tidak diperhatikan. Kekurangan zat besi dapat menyebabkan anemia dan kelemahan fisik, ";
    } 

    // Memeriksa hasil dari formulir kesepuluh
    if (form10_selectedOption) {
        form10_output = form10_selectedOption.value === "a" ? 
        "10. Apresiasi yang besar untuk memastikan piring Anda berwarna-warni dan beragam, ini menunjukkan kesadaran akan pentingnya mendapatkan nutrisi yang beragam." : 
        "10. Sangat disayangkan bahwa piring tidak berwarna-warni dan beragam. Ini bisa berarti kurangnya asupan nutrisi yang beragam, yang diperlukan untuk menjaga kesehatan tubuh secara keseluruhan.";
    } else {
        // Menampilkan alert untuk memilih opsi terlebih dahulu
        alert("Pilih salah satu opsi terlebih dahulu");
    }

    // Menampilkan hasil dari kedua formulir
    outputDiv.innerHTML = "Hasil yang Anda Dapatkan Dari Analisis Gizi Kami : <br><br>" + form1_output + "<br><br>" + form2_output + "<br><br>" + form3_output + "<br><br>" + form4_output + "<br><br>" + form5_output + "<br><br>" + form6_output + "<br><br>" + form7_output + "<br><br>" + form8_output + "<br><br>" + form9_output + "<br><br>" + form10_output;
});
