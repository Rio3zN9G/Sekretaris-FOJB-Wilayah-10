const siswa = [{ no: 1, nama: "Luciana Muzayanah", posisi: "Koordinator Wilayah X", asalSekolah: "SMKN 1 Kedawung", asalDaerah: "Kab. Cirebon", status: "Hadir" },
{ no: 2, nama: "Galuh Saputra", posisi: "Wakil Koordinator Wilayah X", asalSekolah: "SMKN 1 Jamblang", asalDaerah: "Kab. Cirebon", status: "Hadir" },
{ no: 3, nama: "Danda Chantika Maulidina", posisi: "Koordinator Kota Cirebon", asalSekolah: "SMK Kartika XIX-3", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 4, nama: "Nazilatul Mahmudah", posisi: "Koordinator Kabupaten Cirebon", asalSekolah: "MAN 2 Cirebon", asalDaerah: "Kab. Cirebon", status: "Hadir" },
{ no: 5, nama: "Salwa Regisya", posisi: "Koordinator Kuningan", asalSekolah: "SMAN 1 Luragung", asalDaerah: "Kabupaten Cirebon", status: "Hadir" },
{ no: 6, nama: "Ario Zulkaesi Nubli", posisi: "Wakil Koordinator Kuningan", asalSekolah: "SMK Pertiwi Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 7, nama: "Thasa Nur M.", posisi: "Sekretaris Wilayah", asalSekolah: "SMAN 1 Luragung", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 8, nama: "Bagus Saputra", posisi: "Bendahara Wilayah", asalSekolah: "MAN 1 Kota Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 9, nama: "Auliani Laila Sya'ban", posisi: "Kaman Management Learning Center", asalSekolah: "MAN 1 Kota Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 10, nama: "Elga Frasiska", posisi: "Human Resource", asalSekolah: "SMK Pertiwi Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 11, nama: "Deon Putra Hamid", posisi: "Program", asalSekolah: "SMAN 1 Ciwaringin", asalDaerah: "Kabupaten Cirebon", status: "Hadir" },
{ no: 12, nama: "Devi", posisi: "Program", asalSekolah: "SMK BM Yalti Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 13, nama: "Muhammad Fahri Maula", posisi: "Program", asalSekolah: "MAN 1 Kota Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 14, nama: "Nadia Putri Nur Azizah", posisi: "Team Development", asalSekolah: "SMK Pertiwi Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 15, nama: "Rifda Fajriah", posisi: "Ketua Management Sosial Center", asalSekolah: "MAN 2 Kota Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 16, nama: "Kayla Meisya Aulia", posisi: "Program", asalSekolah: "SMAN 3 Kota Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 17, nama: "Azzusa Celia Putri", posisi: "Program", asalSekolah: "SMA Islam Al Azhar 5 Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 18, nama: "Nadia Rafaihyatul Aisy", posisi: "Program", asalSekolah: "SMKN 1 Cilimus Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 19, nama: "Kaysha Dwi Nur Sabilla", posisi: "Ketua Management Business Center", asalSekolah: "SMKN 1 Kedawung", asalDaerah: "Kab. Cirebon", status: "Hadir" },
{ no: 20, nama: "Aulia Rahmawati", posisi: "Program", asalSekolah: "SMAN 1 Ciwaringin", asalDaerah: "Kabupaten Cirebon", status: "Hadir" },
{ no: 21, nama: "Kevin Reynaldi", posisi: "Produksi", asalSekolah: "SMAN 1 Ciwaringin", asalDaerah: "Kabupaten Cirebon", status: "Hadir" },
{ no: 22, nama: "Nadya Gkhalyba", posisi: "Marketing", asalSekolah: "MAN 3 Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 23, nama: "Rizka Nurul Azkia", posisi: "Distribusi", asalSekolah: "SMAN 1 Ciwaringin", asalDaerah: "Kabupaten Cirebon", status: "Hadir" },
{ no: 24, nama: "Naysella Adzahra", posisi: "Ketua Management Media Center", asalSekolah: "MAN 1 Kota Cirebon", asalDaerah: "Kota Cirebon", status: "Hadir" },
{ no: 25, nama: "Sabrina Nasya Sabilah", posisi: "Design Grafis", asalSekolah: "SMKN 1 Kedawung", asalDaerah: "Kab. Cirebon", status: "Hadir" },
{ no: 26, nama: "Nabilatul Annaiyah", posisi: "Design Grafis", asalSekolah: "SMAN 1 Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },
{ no: 27, nama: "Ardie Surya Dharmawan", posisi: "Video Editor", asalSekolah: "SMK Pertiwi Kuningan", asalDaerah: "Kabupaten Kuningan", status: "Hadir" },


  

];

function isiTabelAbsensi() {
  const absensiTable = document.getElementById('absensiTable');
  absensiTable.innerHTML = ''; 

  siswa.forEach((siswa, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${siswa.no}</td>
      <td>${siswa.nama}</td>
      <td>${siswa.posisi}</td>
      <td>${siswa.asalSekolah}</td>
      <td>${siswa.asalDaerah}</td>
      <td><button class="btn ${siswa.status === 'Hadir' ? 'btn-present' : 'btn-absent'}" onclick="toggleStatus(${index})">${siswa.status}</button></td>
    `;
    absensiTable.appendChild(row);
  });
}


function toggleStatus(index) {
  siswa[index].status = siswa[index].status === 'Hadir' ? 'Tidak Hadir' : 'Hadir';
  isiTabelAbsensi();
}

function saveAbsensi() {
  showPage('riwayat');
}


function saveRiwayat(event) {
  event.preventDefault(); 

  const tanggal = document.getElementById('tanggal').value;
  const absensiList = siswa.map(s => `${s.nama}: ${s.status}`).join(', ');

  const riwayatItem = {
    tanggal: tanggal,
    absensi: absensiList
  };

  
  let riwayat = JSON.parse(localStorage.getItem('riwayatAbsensi')) || [];
  
  
  riwayat.push(riwayatItem);

  
  localStorage.setItem('riwayatAbsensi', JSON.stringify(riwayat));

  
  displayRiwayat(riwayat);

  
  document.getElementById('riwayatForm').reset();

  
  alert('Riwayat absensi berhasil disimpan!');
}


function displayRiwayat(riwayat) {
  const riwayatList = document.getElementById('riwayatList');
  riwayatList.innerHTML = ''; 

  riwayat.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `<strong>Tanggal: ${item.tanggal}</strong><br>${item.absensi}`;
    riwayatList.appendChild(li);
  });
}


function loadRiwayatFromLocalStorage() {
  const riwayat = JSON.parse(localStorage.getItem('riwayatAbsensi')) || [];
  displayRiwayat(riwayat);
}


function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let riwayatContent = document.getElementById('riwayatList').innerText;

 
  doc.text(riwayatContent, 10, 10);

  
  doc.save('riwayat_absensi.pdf');
}


function exportToDevice() {
  const riwayat = JSON.parse(localStorage.getItem('riwayatAbsensi')) || [];
  
 
  let textData = "Riwayat Absensi:\n";
  riwayat.forEach(item => {
    textData += `Tanggal: ${item.tanggal}\nAbsensi: ${item.absensi}\n\n`;
  });

  
  const blob = new Blob([textData], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'riwayat_absensi.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  
  pages.forEach(page => {
    page.style.display = 'none'; 
  });

  document.getElementById(pageId + 'Page').style.display = 'block'; 
}


window.onload = function() {
  showPage('home'); 
  isiTabelAbsensi();
  loadRiwayatFromLocalStorage();
};

function clearRiwayat() {
  if (confirm("Apakah Anda yakin ingin menghapus semua riwayat?")) {
    // Menghapus item riwayat dari localStorage
    localStorage.removeItem('riwayatAbsensi');
    
    // Mengosongkan daftar riwayat di antarmuka pengguna
    document.getElementById('riwayatList').innerHTML = '';
    
    alert("Riwayat berhasil dihapus.");
  }
}


function exportToSpreadsheet() {
  try {
    const riwayat = JSON.parse(localStorage.getItem('riwayatAbsensi')) || [];

    if (riwayat.length === 0) {
      alert("Tidak ada data riwayat absensi yang tersedia untuk diekspor.");
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Riwayat Absensi');

    // Menambahkan header dengan style
    worksheet.columns = [
      { header: 'No', key: 'no', width: 5 },
      { header: 'Nama', key: 'nama', width: 25 },
      { header: 'Posisi', key: 'posisi', width: 20 },
      { header: 'Asal Sekolah', key: 'asalSekolah', width: 30 },
      { header: 'Asal Daerah', key: 'asalDaerah', width: 20 },
      { header: 'Status Kehadiran', key: 'status', width: 20 }
    ];

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF28a745' }
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    // Menambahkan data siswa ke worksheet
    siswa.forEach(siswa => {
      worksheet.addRow({
        no: siswa.no,
        nama: siswa.nama,
        posisi: siswa.posisi,
        asalSekolah: siswa.asalSekolah,
        asalDaerah: siswa.asalDaerah,
        status: siswa.status
      });
    });

    // Menambahkan border pada setiap sel
    worksheet.eachRow({ includeEmpty: true }, (row) => {
      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
      });
    });

    // Simpan workbook sebagai file Excel dengan nama yang termasuk tanggal
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD format
    const filename = `absensi wilayah 10 ${dateStr}.xlsx`;

    workbook.xlsx.writeBuffer().then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });

  } catch (error) {
    console.error("Terjadi kesalahan saat mengekspor file:", error);
    alert("Gagal mengekspor file. Silakan coba lagi.");
  }
}
