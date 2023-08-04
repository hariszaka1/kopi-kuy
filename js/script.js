// JavaScript
var popup = document.getElementById("customerServicePopup");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// Anda bisa menambahkan logika untuk menampilkan popup ini berdasarkan event tertentu, seperti setelah pengguna mengunjungi halaman selama beberapa detik.
