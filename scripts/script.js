function dialogSubmit() {
    var nama = document.getElementById("nama").value;
    var nilaiTugas = parseInt(document.getElementById("nilaiTugas").value);
    var nilaiUTS = parseInt(document.getElementById("nilaiUTS").value);
    var nilaiUAS = parseInt(document.getElementById("nilaiUAS").value);

    if (nama === "" || nilaiTugas === "" || nilaiUTS === "" || nilaiUAS === "") {
        alert("Mohon isi semua data terlebih dahulu!");
        return;
      }

    if (confirm("Apakah data yang anda isi sudah benar?")) {

        var nilaiAkhir = Number(0.3 * nilaiTugas) + Number(0.3 * nilaiUTS) + Number(0.4 * nilaiUAS);

        nilaiAkhir = nilaiAkhir || 0;

        localStorage.setItem("namaUser", nama);
        localStorage.setItem("nilaiAkhirUser", nilaiAkhir);

        location.replace("result.html");
    }
}

var namaUser = localStorage.getItem("namaUser");
document.getElementById("namaUser").innerHTML = namaUser;

var nilaiAkhirUser = localStorage.getItem("nilaiAkhirUser");
document.getElementById("nilaiAkhirUser").innerHTML = nilaiAkhirUser;

var keterangan;
if (nilaiAkhirUser >= 60) {
    keterangan = "Lulus";
} else {
    keterangan = "Gagal";
}

document.getElementById("keterangan").innerHTML = keterangan;

function cobaLagi() {
    location.replace("index.html");
}
